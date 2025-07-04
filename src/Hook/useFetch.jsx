// src/hooks/useFetch.js
import { useState, useEffect } from "react";
import http from "@/api/http"; // use your axios instance with interceptors
import axios from "axios"; // still needed for CancelToken

const useFetch = (url) => {
  const [data, setData] = useState(null);     // generalized from "users"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await http.get(url, {
          cancelToken: source.token,
        });
        setData(response.data?.data ?? response.data); // flexible for API structure
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err?.response?.data?.message || err.message || "Error fetching data");
          console.error("Fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;