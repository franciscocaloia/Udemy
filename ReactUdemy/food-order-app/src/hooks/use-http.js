import { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, cfg, dataProcessor) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, cfg);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(`Codigo de error ${res.status}`);
      }
      console.log(data);
      dataProcessor(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, sendRequest };
};
export default useHttp;
