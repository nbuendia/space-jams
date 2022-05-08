import React, { useEffect, useState } from "react";

//COMPONENTS
import CuriosityDateMedia from "./CuriosityDateMedia";

//MUI
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tooltip, Typography } from "@mui/material";

function CuriosityDateRadioAndMedia(props) {
    const { photos, isLoading, date } = props;
    const [value, setValue] = useState(null);

    function handleChange(event) {
        setValue(event.target.value);
    }

    let FHAZ = '';
    let RHAZ = '';
    let MAST = '';
    let CHEMCAM = '';
    let MAHLI = '';
    let MARDI = '';
    let NAVCAM = '';

    //SPLITING BY CAMERA TYPE
    if (photos) {
        FHAZ = photos.filter((elem) => elem.camera.name === 'FHAZ');
        RHAZ = photos.filter((elem) => elem.camera.name === 'RHAZ');
        MAST = photos.filter((elem) => elem.camera.name === 'MAST');
        CHEMCAM = photos.filter((elem) => elem.camera.name === 'CHEMCAM');
        MAHLI = photos.filter((elem) => elem.camera.name === 'MAHLI');
        MARDI = photos.filter((elem) => elem.camera.name === 'MARDI');
        NAVCAM = photos.filter((elem) => elem.camera.name === 'NAVCAM');
    }

    //IF CAMERAS ARRAY IS NULL, FILTER THORUGH ALL CAMS AND CREATE NEW ARR WITH CAMS WITH LENGTH > 0
    let cams = [FHAZ, RHAZ, MAST, CHEMCAM, MAHLI, MARDI, NAVCAM].map((elem) => {
        if (elem.length) return elem[0].camera.name;
        return
    }).filter((elem) => elem !== undefined);

    useEffect(() => {
        setValue(cams[0]);
    }, [photos]);

    // //TOOLTIP - FULL CAMERA NAMES
    function fullName(name) {
        switch (name) {
            case 'FHAZ':
                name = 'Front Hazard Avoidance Camera';
                break;
            case 'RHAZ':
                name = 'Rear Hazard Avoidance Camera';
                break;
            case 'MAST':
                name = 'Mast Camera';
                break;
            case 'CHEMCAM':
                name = 'Chemistry and Camera Complex';
                break;
            case 'MAHLI':
                name = 'Mars Hand Lens Imager';
                break;
            case 'MARDI':
                name = 'Mars Descent Imager';
                break;
            case 'NAVCAM':
                name = 'Navigation Camera';
                break;
            default:
                '';
        }

        return name;
    }
    
    return(
        <>
            {!isLoading ? 
                <>
                    <FormControl fullWidth style={{alignItems: 'center', marginBottom: '25px'}}>
                        <RadioGroup row value={value} onChange={handleChange}>
                            {cams.map((camera) => (
                                <Tooltip key={camera} placement='bottom' title={<Typography fontFamily={'Patrick Hand'}>{fullName(camera)}</Typography>}>
                                    <FormControlLabel
                                        value={camera}
                                        label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>{camera}</Typography>}
                                        labelPlacement='top'
                                        control={<Radio style={{color: 'whitesmoke'}} />}
                                    />
                                </Tooltip>
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Grid container spacing={1} justifyContent={'center'} style={{marginBottom: '15px'}}>
                        <CuriosityDateMedia value={value} date={date} FHAZ={FHAZ} RHAZ={RHAZ} MAST={MAST} CHEMCAM={CHEMCAM} MAHLI={MAHLI} MARDI={MARDI} NAVCAM={NAVCAM} />
                    </Grid>
                </>

            : 
                ''
            }
        </>
    )

}

export default CuriosityDateRadioAndMedia;