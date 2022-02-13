import React from "react";

//MUI
import { Box, CardContent, Fade, IconButton, Tooltip, Typography } from "@mui/material";
//MUI ICONS
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function APODCardContent(props) {
    const { data } = props;

    let date = data.date.split('-');
    date = new Date(date[0], date[1], date[2]).toDateString();

    return (
        <CardContent>
            <Typography fontFamily={'Patrick Hand'} fontSize={15} textAlign={'center'} color={'whitesmoke'}>
                {data.explanation}
            </Typography>

            <Box className="apod-icons">
                <Tooltip title='Astronomy Picture of The Day' placement="left" TransitionComponent={Fade}>
                    <a target='_blank' rel="noopener" href="https://apod.nasa.gov/apod/astropix.html">
                        <IconButton>
                            <RocketLaunchIcon style={{color: 'whitesmoke', fontSize: 25}}/>
                        </IconButton>
                    </a>
                </Tooltip>

                <Tooltip title={date} placement='bottom' TransitionComponent={Fade}>
                    <IconButton>
                        <CalendarTodayIcon style={{color: 'whitesmoke', fontSize: 25}}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title='Fullsize Image' placement="right" TransitionComponent={Fade}>
                    <a target='_blank' rel='noopener' href={data.url}>
                        <IconButton>
                            <FullscreenIcon style={{color: 'whitesmoke', fontSize: 30}}/>
                        </IconButton>
                    </a>
                </Tooltip>
            </Box>
        </CardContent>
    )
}

export default APODCardContent;