import React from "react";

//MUI
import { Box, Container, Grid, Typography } from "@mui/material";

function Home() {
    return(
        <Container>
            <Grid item>
                <Box className="inner-main-container">
                    <Typography>
                        <b>HOME HOME HOME</b>
                    </Typography>
                    <br/>
                    <img src="https://i.imgur.com/wqPqOII.jpg"/>
                </Box>
            </Grid>
        </Container>
    )

}

export default Home;