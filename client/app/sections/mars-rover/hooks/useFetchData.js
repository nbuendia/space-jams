import { useEffect, useState } from 'react';
import { useStateIfMounted } from 'use-state-if-mounted';
import axios from 'axios';

//DATA
import key from '../../../../../secrets.json';
const apiKey = key['api-key'];

const manifestUrls = [
  `https://api.nasa.gov/mars-photos/api/v1/manifests/Perseverance/?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=${apiKey}`,
];
const latestUrls = [
  `https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/latest_photos?api_key=${apiKey}`,
  `https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/latest_photos?api_key=${apiKey}`,
];

export function useFetchData() {
  const [isLoading, setLoading] = useStateIfMounted(true);
  const [roverData, setRoverData] = useState({
    perseverance: null,
    curiosity: null,
    opportunity: null,
    spirit: null,
  });

  useEffect(() => {
    axios
      .all(manifestUrls.map((url) => axios.get(url)))
      .then((res) => {
        const perseveranceData = res[0].data.photo_manifest;
        const perseveranceCameras =
          res[0].data.photo_manifest.photos[
            res[0].data.photo_manifest.photos.length - 1
          ].cameras;

        const curiosityData = res[1].data.photo_manifest;
        const curiosityCameras =
          res[1].data.photo_manifest.photos[
            res[1].data.photo_manifest.photos.length - 1
          ].cameras;

        const opportunityData = res[2].data.photo_manifest;
        const opportunityCameras =
          res[2].data.photo_manifest.photos[
            res[2].data.photo_manifest.photos.length - 1
          ].cameras;

        const spiritData = res[3].data.photo_manifest;
        const spiritCameras =
          res[3].data.photo_manifest.photos[
            res[3].data.photo_manifest.photos.length - 1
          ].cameras;

        setRoverData({
          perseverance: {
            data: perseveranceData,
            latest: null,
            cameras: perseveranceCameras,
          },
          curiosity: {
            data: curiosityData,
            latest: null,
            cameras: curiosityCameras,
          },
          opportunity: {
            data: opportunityData,
            latest: null,
            cameras: opportunityCameras,
          },
          spirit: {
            data: spiritData,
            latest: null,
            cameras: spiritCameras,
          },
        });
      })
      .then(() => {
        axios.all(latestUrls.map((url) => axios.get(url))).then((res) => {
          const [
            latestPerseveranceData,
            latestCuriosityData,
            latestOpportunityData,
            latestSpiritData,
          ] = res.map((r) => r.data.latest_photos);

          setRoverData((prevState) => ({
            ...prevState,
            perseverance: {
              ...prevState.perseverance,
              latest: latestPerseveranceData,
            },
            curiosity: {
              ...prevState.curiosity,
              latest: latestCuriosityData,
            },
            opportunity: {
              ...prevState.opportunity,
              latest: latestOpportunityData,
            },
            spirit: {
              ...prevState.spirit,
              latest: latestSpiritData,
            },
          }));

          setLoading(false);
        });
      })
      .catch((err) => {
        console.error('Oh No! Something went wrong!', err);
      });
  }, []);

  return [isLoading, roverData];
}
