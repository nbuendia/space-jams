import { useEffect, useState } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';

//DATA
import key from '../../../../../secrets.json';
const apiKey = key['api-key'];
const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

export function useFetchData() {
  const [isLoading, setLoading] = useStateIfMounted(true);
  const [data, getData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        getData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Oh No! Something went wrong!', err);
      });
  }, []);

  return [isLoading, data];
}
