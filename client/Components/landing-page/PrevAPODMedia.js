import React from "react";

//MUI
import { Box, CardMedia, IconButton } from "@mui/material";

//MUI ICONS
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function PrevAPODMedia (props) {
    const { currPhoto, setCurrPhoto, photoUrls, mediaTypes } = props;

    let lastPhotoIdx = photoUrls.length - 1;
    let currentPhoto = photoUrls[currPhoto];
    let currMediaType = mediaTypes[currPhoto];

    function handlePrevPhoto() {
        if (currPhoto === 0) setCurrPhoto(lastPhotoIdx);
        else setCurrPhoto(currPhoto - 1);
    }

    function handleNextPhoto() {
        if (currPhoto === lastPhotoIdx) setCurrPhoto(0);
        else setCurrPhoto(currPhoto + 1)
    }

    return (
        <Box style={{display: 'flex'}}>
            <IconButton onClick={handlePrevPhoto}>
                <ArrowBackIosNewIcon style={{color: 'whitesmoke'}} />
            </IconButton>
            
            <CardMedia 
                component={currMediaType === 'image' ? 'img' : 'iframe'}
                image={currentPhoto}
                alt='Astronomy Photo of The Day'
                allowFullScreen
                style={{width: '75%'}}
            />

            <IconButton onClick={handleNextPhoto}>
                <ArrowForwardIosIcon style={{color: 'whitesmoke'}} />
            </IconButton>
        </Box>
    )
}

export default PrevAPODMedia;