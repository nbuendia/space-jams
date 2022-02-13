import React from "react";

//COMPONENTS
import EarthPhoto from "./EarthPhoto";

//MUI
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function Earth(props) {
  const { data } = props;

  return (
    <>
      {data.map((elem) => (
        <Grid item key={elem.identifier} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="350px"
              image={`https://epic.gsfc.nasa.gov/archive/natural/${elem.date
                .split(" ")[0]
                .split("-")
                .join("/")}/png/${elem.image}.png`}
              alt="Image of Earth"
            />
            <CardContent className="earth-card-content">
              <Typography fontFamily={'Patrick Hand'} fontSize={15} fontWeight={800} textAlign={"center"}>
                Photo Was Taken at {elem.date.split(" ")[1]}
              </Typography>

              <EarthPhoto elem={elem} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default Earth;