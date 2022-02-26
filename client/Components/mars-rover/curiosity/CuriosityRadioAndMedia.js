import React, { useState } from "react";

//COMPONENTS
import CuriosityMedia from "./CuriosityMedia";

//MUI
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tooltip, Typography } from "@mui/material";

function CuriosityRadioAndMedia(props) {
    const { latest, cameras } = props;
    const [value, setValue] = useState(cameras[0]);

    function handleChange(event) {
        setValue(event.target.value);
    }

    //SPLITING BY CAMERA TYPE
    const FHAZ = latest.filter((elem) => elem.camera.name === 'FHAZ');
    const RHAZ = latest.filter((elem) => elem.camera.name === 'RHAZ');
    const MAST = latest.filter((elem) => elem.camera.name === 'MAST');
    const CHEMCAM = latest.filter((elem) => elem.camera.name === 'CHEMCAM');
    const MAHLI = latest.filter((elem) => elem.camera.name === 'MAHLI');
    const MARDI = latest.filter((elem) => elem.camera.name === 'MARDI');
    const NAVCAM = latest.filter((elem) => elem.camera.name === 'NAVCAM');

    //TOOLTIP - FULL CAMERA NAMES
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
            <FormControl fullWidth style={{alignItems: 'center', marginBottom: '25px'}}>
                <RadioGroup row value={value} onChange={handleChange}>
                    {cameras.map((camera) => (
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

            <Grid container spacing={1} justifyContent={'center'}>
                <CuriosityMedia value={value} FHAZ={FHAZ} RHAZ={RHAZ} MAST={MAST} CHEMCAM={CHEMCAM} MAHLI={MAHLI} MARDI={MARDI} NAVCAM={NAVCAM} />
            </Grid>
        </>
    )

}

export default CuriosityRadioAndMedia;