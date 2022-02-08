import React, { useEffect, useState } from "react";
import axios from "axios";

//MUI
import { Container, Grid } from "@mui/material";

//DATA
import key from '../../../secrets.json';

const apiKey = key["api-key"];
const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

//COMPONENTS
import Title from "./Title";
import Earth from "./Earth";

function Epic() {
    const [isLoading, setLoading] = useState(true);
    const [data, getData] = useState(null);

    useEffect(() => {
        axios.get(url).then((res) => {
            getData(res.data);
            
            //SO THE LOADING DOESNT LOOK LIKE A GLITCH, AXIOS REQ IS TOO FAST
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        })
    });

    //DISPLAYS LOADING COMPONENT FOR 5secs WHILE AXIOS IS FETCHING IMAGES
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