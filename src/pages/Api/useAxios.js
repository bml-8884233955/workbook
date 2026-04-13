
import { useEffect, useState } from "react";

import axios from "axios"
function useAxios(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) return;

        setLoading(true);

        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));


    }, [url]);

    return { data, loading }
}



export default useAxios;