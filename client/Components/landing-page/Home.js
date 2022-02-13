import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { RingLoader } from "react-spinners";
import axios from "axios";

//COMPONENTS
import APOD from "./APOD";

//MUI
import { Box, Container } from "@mui/material";

//DATA
import key from '../../../secrets.json';
const apiKey = key["api-key"];
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function Home() {
    const [loading, isLoading] = useStateIfMounted(true);
    const [data, getData] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => {
            getData(res.data);
            
            //ADDED SO THE LOADING DOESNT LOOK LIKE A GLITCH, AXIOS REQ IS TOO FAST
            setTimeout(() => {
                isLoading(false);
            }, 3000);

        }).catch((err) => {
            console.error('Oh No! Something went wrong!', err);
        });

    }, []);

    //DISPLAYS LOADING WHILE AXIOS IS FETCHING IMAGES
    if (loading) return (
        <Box className="loader">
            <RingLoader loading={isLoading} color="white" size={100} />
        </Box>
    );

    return(
        <Container>
            <APOD data={data} />
        </Container>
    )

}

export default Home;