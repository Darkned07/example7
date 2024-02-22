import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "../redux/features/slices/shopSlice";
import { toast } from "react-toastify";
export function useApi() {
  const dispatch = useDispatch();
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const req = await fetch(url);
          const data = await req.json();
          setData(data);
          dispatch(api(data));
          setLoading(false);
          setError(null);
        } catch (error) {
          setError(error.message);

          setTimeout(() => {
            toast.error(error.message);
          }, 10000);

          toast.error(error.message);
          setLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return { data, loading, error };
  };
  return { useFetch };
}
