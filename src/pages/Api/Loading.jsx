import { useState, useEffect } from "react";

function Loading() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(res => {
                if (!res.ok) throw new Error('API Failed');
                return res.json();
            })
            .then((result) => { setData(result) })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))

    }, []);


    return (
        <>
            <h3> Loading</h3>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                data.map(item => (<p key={item.id}>{item.title}</p>))
            )
            }


        </>
    )
}

export default Loading;