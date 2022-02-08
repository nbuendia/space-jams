import React from "react";

//MUI
import { Box, Grid, Typography } from "@mui/material";

function ISS() {
    return(
        <>
            <Grid item>
                <Box style={{width: '85vw', height: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Typography>
                        <b>INTERNATIONAL SPACE STATION!</b>
                    </Typography>
                </Box>
            </Grid>
        </>
    )

}

export default ISS;