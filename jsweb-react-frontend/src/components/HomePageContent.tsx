import React from "react";
import { Grid, Paper } from "@mui/material";

import { HomeTitleCard } from "./HomeTitleCard";

interface FormRow {
  title: string;
  subtitle: string;
  buttontext: string;
  buttonlink: string;
  enablebutton: boolean;
  subcontent: any;
  colour: string;
}
export const HomePageContent = (Props: FormRow) => {
  return (
    <>
      <Grid item xs={0.5} sx={{ color: Props.colour }}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={5}>
        <HomeTitleCard
          title={Props.title}
          subtitle={Props.subtitle}
          buttonlink={Props.buttonlink}
          buttontext={Props.buttontext}
          enablebutton={Props.enablebutton}
          colour={Props.colour}
        />
      </Grid>
      <Grid item xs={5}>
        {Props.subcontent}
      </Grid>
    </>
  );
};
