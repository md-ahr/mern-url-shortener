import { useEffect, useState } from 'react';

interface OutputType {
    loading: boolean;
    error: boolean;
    result: null;
}

interface UrlResponse {
    _id: string,
    urlId: string,
    originalUrl: string,
    shortUrl: string,
    clicks: number,
    createdAt: string,
    updatedAt: string
};

interface Result {
    isSuccess: boolean;
    total: number;
    urls: UrlResponse
}

const useFetch = (url: string, method: string, headers?: HeadersInit): OutputType => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState<any>(null);

    useEffect(() => {
        async function requestFetch() {
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: method || 'GET',
                    headers: headers,
                });
                const data = await response.json();
                setLoading(false);
                setResult(data);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        loading, error, result
    };

}

export default useFetch;
