import React, { useState } from "react";

//MUI
import { Card, Typography } from "@mui/material";

//MUI ICONS
import PrevAPODMedia from "./PrevAPODMedia";
import PrevAPODContent from "./PrevAPODContent";


function PrevAPOD (props) {
    const { data } = props;
    const [currPhoto, setCurrPhoto] = useState(0);

    const photoUrls = data.map((elem) => elem.url);
    const mediaTypes = data.map((elem) => elem.media_type);
    const titles = data.map((elem) => elem.title);
    const dates = data.map((elem) => elem.date);
    const descriptions = data.map((elem) => elem.explanation);

    //REMOVES TODAYS ELEMENT THATS ALREADY BEING DISPLAYED
    photoUrls.pop();
    mediaTypes.pop();
    descriptions.pop();
    titles.pop();
    dates.pop();
    //ORDERS ELEMENTS FROM MOST RECENT TO LATEST DATE
    photoUrls.reverse();
    mediaTypes.reverse();
    descriptions.reverse();
    titles.reverse();
    dates.reverse();

    return (
        <>
            <hr/>
                <Typography fontFamily={'Shizuru'} fontSize={20} textAlign={'center'}>
                    THIS WEEKS FEATURED PHOTOS
                </Typography>
            <hr/>

            <Card elevation={0} style={{backgroundColor: 'transparent', marginLeft: '25%', marginRight: '25%'}}>
                <PrevAPODMedia currPhoto={currPhoto} setCurrPhoto={setCurrPhoto} photoUrls={photoUrls} mediaTypes={mediaTypes} />
                <PrevAPODContent currPhoto={currPhoto} titles={titles} dates={dates} descriptions={descriptions} />
            </Card>
        </>
    )
}

export default PrevAPOD;