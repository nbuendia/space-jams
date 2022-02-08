import React from "react";

//MUI
import { Box, Grid, Typography } from "@mui/material";

function Roadster() {
    return(
        <>
            <Grid item>
                <Box style={{width: '85vw', height: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Typography>
                        <b>ROADSTER ROADSTER ROADSTER</b>
                    </Typography>
                </Box>
            </Grid>
        </>
    )

}

export default Roadster;