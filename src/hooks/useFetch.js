import React, { useState, useEffect } from 'react'

function useFetch(ruta) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetch(ruta)
                .then(response => response.json())
                .then(datos => datos)
            setData(result);
            setIsLoading(false);
        }
        loadData();

    }, []);



    return { isLoading, data, setData };

}

export default useFetch;