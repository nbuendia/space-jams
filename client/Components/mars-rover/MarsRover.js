import React from "react";

//MUI
import { Box, Grid, Typography } from "@mui/material";

function MarsRover() {
    return(
        <>
            <Grid item>
                <Box style={{width: '85vw', height: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Typography>
                        <b>MARS ROVER MARS ROVER</b>
                    </Typography>
                </Box>
            </Grid>
        </>
    )

}

export default MarsRover;