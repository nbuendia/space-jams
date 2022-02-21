import React from "react";

//MUI
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function CuriosityMedia(props) {
    const { media } = props;

    return(
        <>
            {media.map((img) => (
                <Grid item key={img.id} xs={12} sm={6} md={4}>
                    <Card elevation={0} style={{backgroundColor: 'transparent'}}>
                        <CardMedia 
                            component='img'
                            image={img.img_src}
                            alt='Latest Curiosity Rover Photo'
                        />

                        <CardContent>
                            <Typography fontFamily={'Patrick Hand'} fontSize={15} textAlign={"center"} color={'whitesmoke'}>
                                Rover Camera: <br/>
                                {img.camera.full_name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    )

}

export default CuriosityMedia;