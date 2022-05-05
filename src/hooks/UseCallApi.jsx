import axios from 'axios';
// require('dotenv').config();
import { useState, useEffect } from 'react';

const { BASEURL } = process.env;
const { APIFAVORITES } = process.env;

function useCallApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(BASEURL + APIFAVORITES);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [data]);
  return { data, loading, error };
}
export default useCallApi;
