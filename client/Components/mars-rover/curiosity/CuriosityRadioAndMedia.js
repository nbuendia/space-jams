import React, { useEffect, useState } from "react";

//COMPONENTS
import CuriosityMedia from "./CuriosityMedia";

//MUI
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, Tooltip, Typography } from "@mui/material";

function CuriosityRadioAndMedia(props) {
    const { latest } = props;
    const [value, setValue] = useState(null);

    //SPLITING BY CAMERA TYPE
    const FHAZ = latest.filter((elem) => elem.camera.name === 'FHAZ');
    const RHAZ = latest.filter((elem) => elem.camera.name === 'RHAZ');
    const MAST = latest.filter((elem) => elem.camera.name === 'MAST');
    const CHEMCAM = latest.filter((elem) => elem.camera.name === 'CHEMCAM');
    const MAHLI = latest.filter((elem) => elem.camera.name === 'MAHLI');
    const MARDI = latest.filter((elem) => elem.camera.name === 'MARDI');
    const NAVCAM = latest.filter((elem) => elem.camera.name === 'NAVCAM');

    //SETS INITIAL VALUE TO RADIO BUTTON
    useEffect(() => {
        if (FHAZ.length) setValue('FHAZ');
        else if (RHAZ.length) setValue('RHAZ');
        else if (MAST.length) setValue('MAST');
        else if (CHEMCAM.length) setValue('CHEMCAM');
        else if (MAHLI.length) setValue('MAHLI');
        else if (MARDI.length) setValue('MARDI');
        else if (NAVCAM.length) setValue('NAVCAM');
    }, []);

    function handleChange(event) {
        setValue(event.target.value);
    }
    
    return(
        <>
            <FormControl fullWidth style={{alignItems: 'center', marginBottom: '25px'}}>
                <RadioGroup row value={value} onChange={handleChange}>
                    {FHAZ.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Front Hazard Avoidance Camera</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='FHAZ' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>FHAZ</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            /> 
                        </Tooltip>
                    : ''}

                    {RHAZ.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Rear Hazard Avoidance Camera</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='RHAZ' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>RHAZ</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            />
                        </Tooltip> 
                    : ''}

                    {MAST.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Mast Camera</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='MAST' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>MAST</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            />
                        </Tooltip>
                    : ''}

                    {CHEMCAM.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Chemistry and Camera Complex</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='CHEMCAM' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>CHEMCAM</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            /> 
                        </Tooltip>
                    : ''}

                    {MAHLI.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Mars Hand Lens Imager</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='MAHLI' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>MAHLI</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            /> 
                        </Tooltip>
                    : ''}

                    {MARDI.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Mars Descent Imager</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='MARDI' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>MARDI</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            />
                        </Tooltip>
                    : ''}

                    {NAVCAM.length ? 
                        <Tooltip title={<Typography fontFamily={'Patrick Hand'}>Navigation Camera</Typography>} placement='bottom'>
                            <FormControlLabel 
                                value='NAVCAM' 
                                label={<Typography fontFamily={'Patrick Hand'} color={'whitesmoke'}>NAVCAM</Typography>} 
                                labelPlacement="top" 
                                control={<Radio style={{color: 'whitesmoke'}} />} 
                            /> 
                        </Tooltip>
                    : ''}
                </RadioGroup>
            </FormControl>

            <Grid container spacing={1} justifyContent={'center'}>
                <CuriosityMedia value={value} FHAZ={FHAZ} RHAZ={RHAZ} MAST={MAST} CHEMCAM={CHEMCAM} MAHLI={MAHLI} MARDI={MARDI} NAVCAM={NAVCAM} />
            </Grid>
        </>
    )

}

export default CuriosityRadioAndMedia;