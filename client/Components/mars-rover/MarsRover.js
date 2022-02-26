import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";

//COMPONENTS
import Curiosity from "./curiosity/Curiosity";
import Opportunity from "./opportunity/Opportunity";
import Spirit from "./spirit/Spirit";

//MUI
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

//DATA
import key from '../../../secrets.json';
const apiKey = key["api-key"];

const manifestUrls =[
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=${apiKey}`
];
const latestUrls =[
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/latest_photos?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Spirit/latest_photos?api_key=${apiKey}`
];

function MarsRover() {
    const [isLoading, setLoading] = useStateIfMounted(true);
    const [value, setValue] = useState('curiosity');

    //CURIOSITY
    const [curiosityData, getCuriosityData] = useState(null);
    const [latestCuriosityData, getLatestCuriosityData] = useState(null);
    const [curiosityCameras, getCuriosityCameras] = useState(null);
    const [curiosityEarthDate, getCuriosityEarthDate] = useState(null);
    const [curiositySol, getCuriositySol] = useState(null);

    //OPPORTUNITY
    const [opportunityData, getOpportunityData] = useState(null);
    const [latestOpportunityData, getLatestOpportunityData] = useState(null);
    const [opportunityCameras, getOpportunityCameras] = useState(null);
    const [opportunityEarthDate, getOpportunityEarthDate] = useState(null);
    const [opportunitySol, getOpportunitySol] = useState(null);
    
    //SPIRIT
    const [spiritData, getSpiritData] = useState(null);
    const [latestSpiritData, getLatestSpiritData] = useState(null);
    const [spiritCameras, getSpiritCameras] = useState(null);
    const [spiritEarthDate, getSpiritEarthDate] = useState(null);
    const [spiritSol, getSpiritSol] = useState(null);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    useEffect(() => {
        axios.all(manifestUrls.map((url) => axios.get(url))).then((res) => {
            //CURIOSITY
            getCuriosityData(res[0].data.photo_manifest);
            getCuriosityCameras(res[0].data.photo_manifest.photos[res[0].data.photo_manifest.photos.length - 1].cameras);
            getCuriosityEarthDate(res[0].data.photo_manifest.photos[res[0].data.photo_manifest.photos.length - 1].earth_date);
            getCuriositySol(res[0].data.photo_manifest.photos[res[0].data.photo_manifest.photos.length - 1].sol);

            //OPPORTUNITY
            getOpportunityData(res[1].data.photo_manifest);
            getOpportunityCameras(res[1].data.photo_manifest.photos[res[1].data.photo_manifest.photos.length - 1].cameras);
            getOpportunityEarthDate(res[1].data.photo_manifest.photos[res[1].data.photo_manifest.photos.length - 1].earth_date);
            getOpportunitySol(res[1].data.photo_manifest.photos[res[1].data.photo_manifest.photos.length - 1].sol);

            //SPIRIT
            getSpiritData(res[2].data.photo_manifest);
            getSpiritCameras(res[2].data.photo_manifest.photos[res[2].data.photo_manifest.photos.length - 1].cameras);
            getSpiritEarthDate(res[2].data.photo_manifest.photos[res[2].data.photo_manifest.photos.length - 1].earth_date);
            getSpiritSol(res[2].data.photo_manifest.photos[res[2].data.photo_manifest.photos.length - 1].sol);

        }).then(() => {
            axios.all(latestUrls.map((url) => axios.get(url))).then((res) => {
                getLatestCuriosityData(res[0].data.latest_photos);
                getLatestOpportunityData(res[1].data.latest_photos);
                getLatestSpiritData(res[2].data.latest_photos);
                                
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

            {value === 'curiosity' ? <Curiosity data={curiosityData} latest={latestCuriosityData} cameras={curiosityCameras} date={curiosityEarthDate} sol={curiositySol} />
            : value === 'opportunity' ? <Opportunity data={opportunityData} latest={latestOpportunityData} cameras={opportunityCameras} date={opportunityEarthDate} sol={opportunitySol} />
            : <Spirit data={spiritData} latest={latestSpiritData} cameras={spiritCameras} date={spiritEarthDate} sol={spiritSol} />}
        </Container>
    )

}

export default MarsRover;