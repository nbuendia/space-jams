import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { RingLoader } from "react-spinners";
import axios from "axios";

//COMPONENTS
import APOD from "./APOD";

//MUI
import { Box, Container, Grid } from "@mui/material";

//DATA
import key from '../../../secrets.json';
import PrevAPOD from "./PrevAPOD";
const apiKey = key["api-key"];
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function Home() {
    const [loading, isLoading] = useStateIfMounted(true);
    const [data, getData] = useState(null);
    const [prevImages, getPrevImages] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => {
            getData(res.data);
            return res.data;

        }).then((res) => {
            let date = res.date.split('-');
            let startDate = new Date(date[0], date[1] - 1, date[2]);
            
            //GRABS DATE 6 DAYS PRIOR TO CURRENT DATE
            startDate.setDate(startDate.getDate() - 6);
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }

            //FORMATTED DATE TO BE TWO DIGITS ON MONTH AND DAY 
            startDate = startDate.toLocaleDateString('en-US', options).split('/');
            
            //REARRANGED DATE YYYY-MM-DD
            const formattedDate = `${startDate[2]}-${startDate[0]}-${startDate[1]}`;

            axios.get(`${url}&start_date=${formattedDate}&end_date=${res.date}`).then((res) => {
                getPrevImages(res.data)
                
                //ADDED SO THE LOADING DOESNT LOOK LIKE A GLITCH, AXIOS REQ IS TOO FAST
                setTimeout(() => {
                    isLoading(false);
                }, 3000);
            })
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
            <PrevAPOD data={prevImages} />
        </Container>
    )

}

export default Home;