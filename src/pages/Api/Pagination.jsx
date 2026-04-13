import { useEffect, useState } from "react";

function Pagination() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(null);
                setError(null);

                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
                );

                if (!res.ok) throw new Error("Failed to  fetch");

                const result = await res.json();
                setData(result);

            }
            catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [page]);

    return (
        <>
            <h3> Pagination </h3>

            {!loading && !error &&
                data.map(item => <p key={item.id}>{item.title}</p>)
            }

            <button onClick={() => setPage(p => p - 1)} disable={page === 1 || loading}>
                Prev
            </button>

            <button onClick={() => setPage(p => p + 1)} disabled={loading}>
                Next
            </button>
        </>
    )
}

export default Pagination;