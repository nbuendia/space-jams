import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";

//COMPONENTS
import Perseverance from "./perseverance/Perseverance";
import Curiosity from "./curiosity/Curiosity";
import Opportunity from "./opportunity/Opportunity";
import Spirit from "./spirit/Spirit";

//MUI
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

//DATA
import key from '../../../secrets.json';
const apiKey = key["api-key"];

const manifestUrls =[
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Perseverance/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=${apiKey}`
];
const latestUrls =[
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Perseverance/latest_photos?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/latest_photos?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/latest_photos?api_key=${apiKey}`
];

function MarsRover() {
    const [isLoading, setLoading] = useStateIfMounted(true);
    const [value, setValue] = useState('curiosity');

    //PERSEVERANCE
    const [perseveranceData, getPerseveranceData] = useState(null);
    const [latestPerseveranceData, getLatestPerseveranceData] = useState(null);
    const [perseveranceCameras, getPerseveranceCameras] = useState(null);

    //CURIOSITY
    const [curiosityData, getCuriosityData] = useState(null);
    const [latestCuriosityData, getLatestCuriosityData] = useState(null);
    const [curiosityCameras, getCuriosityCameras] = useState(null);

    //OPPORTUNITY
    const [opportunityData, getOpportunityData] = useState(null);
    const [latestOpportunityData, getLatestOpportunityData] = useState(null);
    const [opportunityCameras, getOpportunityCameras] = useState(null);
    
    //SPIRIT
    const [spiritData, getSpiritData] = useState(null);
    const [latestSpiritData, getLatestSpiritData] = useState(null);
    const [spiritCameras, getSpiritCameras] = useState(null);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    useEffect(() => {
        axios.all(manifestUrls.map((url) => axios.get(url))).then((res) => {
            //PERSEVERANCE
            getPerseveranceData(res[0].data.photo_manifest);
            getPerseveranceCameras(res[0].data.photo_manifest.photos[res[0].data.photo_manifest.photos.length - 1].cameras);

            //CURIOSITY
            getCuriosityData(res[1].data.photo_manifest);
            getCuriosityCameras(res[1].data.photo_manifest.photos[res[1].data.photo_manifest.photos.length - 1].cameras);

            //OPPORTUNITY
            getOpportunityData(res[2].data.photo_manifest);
            getOpportunityCameras(res[2].data.photo_manifest.photos[res[2].data.photo_manifest.photos.length - 1].cameras);

            //SPIRIT
            getSpiritData(res[3].data.photo_manifest);
            getSpiritCameras(res[3].data.photo_manifest.photos[res[3].data.photo_manifest.photos.length - 1].cameras);

        }).then(() => {
            axios.all(latestUrls.map((url) => axios.get(url))).then((res) => {
                getLatestPerseveranceData(res[0].data.latest_photos);
                getLatestCuriosityData(res[1].data.latest_photos);
                getLatestOpportunityData(res[2].data.latest_photos);
                getLatestSpiritData(res[3].data.latest_photos);
                                
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            })
        }).catch((err) => {
            console.error('Oh No! Something went wrong!', err);
        })

    }, []);

    if (isLoading) return (
        <Box className="loader" >
            <ClimbingBoxLoader loading={isLoading} color='white' size={20}/>
        </Box>
    );

    return(
        <Container>
            <Box className="mars-rover-nav">
                <Tabs centered value={value} onChange={handleChange}>
                    <Tab 
                        label={<Typography fontSize={25} color={'whitesmoke'}>Perseverance</Typography>} 
                        value='perseverance' 
                        className='tab' 
                    />
                    <Tab 
                        label={<Typography fontSize={25} color={'whitesmoke'}>Curiosity</Typography>} 
                        value='curiosity' 
                        className='tab' 
                    />
                    <Tab 
                        label={<Typography fontSize={25} color={'whitesmoke'}>Opportunity</Typography>} 
                        value='opportunity' 
                        className='tab' 
                    />
                    <Tab 
                        label={<Typography fontSize={25} color={'whitesmoke'}>Spirit</Typography>} 
                        value='spirit' 
                        className='tab' 
                    />
                </Tabs>
            </Box>

            {value === 'perseverance' ? <Perseverance data={perseveranceData} latest={latestPerseveranceData} cameras={perseveranceCameras} />
            : value === 'curiosity' ? <Curiosity data={curiosityData} latest={latestCuriosityData} cameras={curiosityCameras} />
            : value === 'opportunity' ? <Opportunity data={opportunityData} latest={latestOpportunityData} cameras={opportunityCameras} />
            : <Spirit data={spiritData} latest={latestSpiritData} cameras={spiritCameras} />}
        </Container>
    )

}

export default MarsRover;