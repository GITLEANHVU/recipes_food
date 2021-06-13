// custom hook, make useFetch()
import { useState, useEffect, useCallback } from "react";
const useFetch = (url) => {
  console.log("useFetch started");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  // callback function
  const doFetch = useCallback((options = {}) => {
    console.log("do fetch");
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetch(url, options)
          .then(response => response.json())
          .then(json =>  json);
        
        // .then(json => console.log(json));
        setResponse(data);
      } catch (err) {
        const data = err.response ? err.response.data : "Server error";
        setError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ response, error, isLoading }, doFetch];
};

export default useFetch;