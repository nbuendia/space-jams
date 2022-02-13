import React from "react";

//COMPONENTS
import APODCardContent from "./APODCardContent";

//MUI
import { Box, Card, CardMedia, Typography } from "@mui/material";

function APOD(props) {
    const { data } = props;

    return (
        <Box>
            <hr/>
            <Typography fontFamily={'Shizuru'} fontSize={30} textAlign={'center'}>
                {data.title}
            </Typography>
            <hr/>

            <Card style={{backgroundColor: 'transparent'}} elevation={0}>
                <CardMedia 
                    component='img'
                    image={data.url}
                    alt='Astronomy Picture of The Day'
                />

                <APODCardContent data={data} />
            </Card>
        </Box>
    )
}

export default APOD;