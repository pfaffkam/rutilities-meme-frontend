import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function useFetch(url, formSubmitted) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formSubmitted]);

  return { data };
}

export default useFetch;
