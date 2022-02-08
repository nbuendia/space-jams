import React from "react";

//MUI
import { Box, Grid, Typography } from "@mui/material";

function Home() {
    return(
        <>
            <Grid item>
                <Box style={{width: '85vw', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography>
                        <b>HOME HOME HOME</b>
                    </Typography>
                    <br/>
                    <img src="https://i.imgur.com/wqPqOII.jpg"/>
                </Box>
            </Grid>
        </>
    )

}

export default Home;