import React, { useEffect, useState } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import axios from "axios";

//COMPONENTS
import Title from "./Title";
import Earth from "./Earth";

//MUI
import { Container, Grid } from "@mui/material";

//DATA
import key from '../../../secrets.json';
const apiKey = key["api-key"];
const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

function Epic() {
    const [isLoading, setLoading] = useStateIfMounted(true) //useState(true);
    const [data, getData] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => {
            getData(res.data);
            
            //SO THE LOADING DOESNT LOOK LIKE A GLITCH, AXIOS REQ IS TOO FAST
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }).catch((err) => {
            console.error('Oh No! Something went wrong!', err);
        });
    });

    //DISPLAYS LOADING WHILE AXIOS IS FETCHING IMAGES
    if (isLoading) return 'LOADING...';

    return(
        <Container>
            <Title data={data} />
            <Grid container spacing={1} justifyContent={'center'}>
                <Earth data={data}/>
            </Grid>
        </Container>
    )

}

export default Epic;