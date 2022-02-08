import React from "react";

//MUI
import { Typography } from "@mui/material";

function Title(props) {
  const { data } = props;

  //IMG CAPTIONS ARE ALL THE SAME. I EDITED THE CAPTION TO BE PLURAL TO INCLUDE ALL IMAGES
  const caption = `All images were ${data[0].caption
    .split(" ")
    .slice(3)
    .join(" ")} on `;

  //['YYYY', 'MM', 'DD']
  let date = data[0].date.split(" ")[0].split("-");

  //FORMATTED DATE TO DISPLAY FULL DAY, MONTH, DAY AND YEAR
  date = new Date(date[0], date[1] - 1, date[2]);
  const options = { dateStyle: "full" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <>
      <hr />
      <Typography
        fontSize={35}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"whitesmoke"}
      >
        MOST RECENT IMAGES OF OUR LOVELY PLANET EARTH !
      </Typography>

      <Typography fontSize={25} textAlign={"center"} color={"whitesmoke"}>
        {caption}
      </Typography>

      <Typography
        fontSize={28}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"whitesmoke"}
      >
        {formattedDate}
      </Typography>
      <br />
      <hr />
    </>
  );
}

export default Title;