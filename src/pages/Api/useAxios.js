
import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url) {

    const [dataObj, setDataObj] = useState(null);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        if (!url) return;

        setLoadingData(true);

        axios.get(url)
            .then(res => setDataObj(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoadingData(false));


    }, [url]);

    return { dataObj, loadingData }
}



export default useAxios;