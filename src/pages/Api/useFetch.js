import { useEffect, useState } from "react";

function useFetch(url) {
    const [resdata, setResdata] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(url);

                if (!res.ok) throw new Error("Error featching data");

                const result = await res.json();
                setResdata(result);
            }

            catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);


    return { resdata, loading, error }
}

export default useFetch;