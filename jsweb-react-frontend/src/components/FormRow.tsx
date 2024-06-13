import React from "react";
import { Grid, Paper } from "@mui/material";

import { HomeTitleCard } from "./HomeTitleCard";

interface FormRow {
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  button_include: boolean;
  subcontent: any;
  theme_color: string;
}
export const FormRow = (Props: FormRow) => {
  return (
    <>
      <Grid item xs={0.5} sx={{ bgcolor: Props.theme_color[500] }}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={5}>
        <HomeTitleCard
          title={Props.title}
          subtitle={Props.subtitle}
          buttonLink={Props.button_link}
          buttonText={Props.button_text}
          buttonvisible={Props.button_include}
          themecolor={Props.theme_color}
        />
      </Grid>
      <Grid item xs={5}>
        {Props.subcontent}
      </Grid>
    </>
  );
};
