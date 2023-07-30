import { useEffect, useState } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';

import key from '../../../../../../../secrets.json';
const apiKey = key['api-key'];

export function useFetchData() {
  const [isLoading, setLoading] = useStateIfMounted(true);
  const [data, getData] = useState(null);
  const [date, getDate] = useState(null);

  let formattedDate = date
    ? new Intl.DateTimeFormat('en-US').format(date)
    : null;

  formattedDate = date ? date.toLocaleDateString().split('/') : null;
  formattedDate = formattedDate
    ? `${formattedDate[2]}-${formattedDate[0]}-${formattedDate[1]}`
    : null;

  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&earth_date=${formattedDate}`;

  useEffect(() => {
    setLoading(true);

    if (formattedDate) {
      axios
        .get(url)
        .then((res) => {
          if (res.data.photos.length) getData(res.data.photos);
          else getData(null);
        })
        .catch((err) => {
          console.error('Oh No! Something went wrong!', err);
        });
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [date]);

  return [data, isLoading, date, getDate];
}
