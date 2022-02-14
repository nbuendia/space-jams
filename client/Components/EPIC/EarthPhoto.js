import React from "react";

//MUI
import { IconButton, Tooltip, Zoom } from "@mui/material";
//MUI ICONS
import FullscreenIcon from "@mui/icons-material/Fullscreen";

function EarthPhoto(props) {
  const { elem } = props;

  //split date from time and access only the date; split date at '-' and rejoin with '/'
  let imgDate = elem.date.split(" ")[0].split("-").join("/");

  return (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://epic.gsfc.nasa.gov/archive/natural/${imgDate}/png/epic_1b_${elem.identifier}.png`}
    >
        <Tooltip title="Fullsize Image" placement="top" TransitionComponent={Zoom}>
            <IconButton>
                <FullscreenIcon />
            </IconButton>
        </Tooltip>
    </a>
  );
}

export default EarthPhoto;