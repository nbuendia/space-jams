import React from "react";

//MUI
import { Card, CardMedia, Grid } from "@mui/material";

function CuriosityMedia(props) {
    const { value, FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM } = props;

    let camValue = value === 'FHAZ' ? FHAZ
                 : value === 'RHAZ' ? RHAZ
                 : value === 'MAST' ? MAST
                 : value === 'CHEMCAM' ? CHEMCAM
                 : value === 'MAHLI' ? MAHLI
                 : value === 'MARDI' ? MARDI
                 : value === 'NAVCAM' ? NAVCAM
                 : null;

    return(
        <>
            {camValue !== null ? camValue.map((img) => (
                <Grid item key={img.id} xs={12} sm={6} md={4}>
                    <Card elevation={0} style={{backgroundColor: 'transparent'}}>
                        <CardMedia 
                            component='img'
                            image={img.img_src}
                            alt='Latest Curiosity Rover Photo'
                        />
                    </Card>
                </Grid>
            )) : ''}
        </>
    )

}

export default CuriosityMedia;