import { useEffect, useState } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';

import key from '../../../../../secrets.json';

//DATA
const apiKey = key['api-key'];
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const formatDate = (date, minusDays) => {
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  date = date.split('-');
  let startDate = new Date(date[0], date[1] - 1, date[2]);

  //GRABS DATE 6 DAYS PRIOR TO CURRENT DATE
  startDate.setDate(startDate.getDate() - minusDays);

  //FORMAT DATE TO BE TWO DIGITS ON MONTH AND DAY
  startDate = startDate.toLocaleDateString('en-US', options).split('/');

  //REARRANGE DATE YYYY-MM-DD
  return `${startDate[2]}-${startDate[0]}-${startDate[1]}`;
};

export function useFetchData() {
  const [loading, isLoading] = useStateIfMounted(true);
  const [data, getData] = useState(null);
  const [prevImages, getPrevImages] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        getData(res.data);
        return res.data;
      })
      .then((res) => {
        const startDate = formatDate(res.date, 6);

        axios
          .get(`${url}&start_date=${startDate}&end_date=${res.date}`)
          .then((res) => {
            getPrevImages(res.data);

            //ADDED SO THE LOADING DOESNT LOOK LIKE A GLITCH, AXIOS REQ IS TOO FAST
            setTimeout(() => {
              isLoading(false);
            }, 3000);
          });
      })
      .catch((err) => {
        console.error('Oh No! Something went wrong!', err);
      });
  }, []);

  return [loading, isLoading, data, prevImages];
}
