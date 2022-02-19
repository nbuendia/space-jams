import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { ClimbingBoxLoader } from "react-spinners";
import axios from "axios";

//COMPONENTS
import Curiosity from "./Curiosity";
import Opportunity from "./Opportunity";
import Spirit from "./Spirit";

//MUI
import { Box, Container } from "@mui/material";

//DATA
import key from '../../../secrets.json';
const apiKey = key["api-key"];
const urls =[
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Opportunity/?api_key=${apiKey}`,
    `https://api.nasa.gov/mars-photos/api/v1/manifests/Spirit/?api_key=${apiKey}`
];

function MarsRover() {
    const [isLoading, setLoading] = useStateIfMounted(true);
    const [curiosityData, getCuriosityData] = useState(null);
    const [opportunityData, getOpportunityData] = useState(null);
    const [spiritData, getSpiritData] = useState(null);

    useEffect(() => {
        axios.all(urls.map((url) => axios.get(url))).then((res) => {
            getCuriosityData(res[0].data.photo_manifest);
            getOpportunityData(res[1].data.photo_manifest);
            getSpiritData(res[2].data.photo_manifest);
            
            setTimeout(() => {
                setLoading(false);
            }, 3000);

        }).catch((err) => {
            console.error('Oh No! Something went wrong!', err);
        })

    }, []);

    if (isLoading) return (
        <Box className="loader" >
            <ClimbingBoxLoader loading={isLoading} color='white'/>
        </Box>
    );

    return(
        <Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center'}}>
            <Curiosity data={curiosityData} />
            <Opportunity data={opportunityData} />
            <Spirit data={spiritData} />
        </Container>
    )

}

export default MarsRover;