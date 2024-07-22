import { useState, useEffect } from 'react';


// 네비 검색창에 대한 통신
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
        .then(res => {
          return res.json();
        })
        .catch(e => {
          setError(e);
        })
        .then(data => {
          setLoading(false);
          setData(data);
        });
  }, [url]);

  return [data, loading, error];
}
