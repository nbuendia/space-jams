import React from "react";

//MUI
import { Box, Container, Grid, Typography } from "@mui/material";

function ISS() {
    return(
        <Container>
            <Grid item>
                <Box className="inner-main-container">
                    <Typography>
                        <b>INTERNATIONAL SPACE STATION!</b>
                    </Typography>
                </Box>
            </Grid>
        </Container>
    )

}

export default ISS;