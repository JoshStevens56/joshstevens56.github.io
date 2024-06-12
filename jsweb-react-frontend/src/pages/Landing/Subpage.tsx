import { Box, Typography, Button, Color } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import "../../style.css";
import { HomeTitleCard } from "../../ui-components/HomeTitleCard";

interface Subpage {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  theme_colour: string;
  subcontent: any;
  buttonvisible: boolean
}

export const Subpage = (Props: Subpage) => {

  return (
    <Grid
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Box color={Props.theme_colour[500]}></Box>
      <HomeTitleCard
        title={Props.title}
        subtitle={Props.subtitle}
        buttonText={Props.button_text}
        buttonLink={Props.button_link}
        themecolor={Props.theme_colour}
        buttonvisible = {Props.buttonvisible}
      />
      <Box className="component">{Props.subcontent}</Box>
    </Grid>
  );
};
