import React from "react";
import { Box, Paper } from "@mui/material";

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
      <Box className = "cardcontent">
        <HomeTitleCard
          title={Props.title}
          subtitle={Props.subtitle}
          buttonlink={Props.buttonlink}
          buttontext={Props.buttontext}
          enablebutton={Props.enablebutton}
          colour={Props.colour}
        />
      </Box>
      <Box className = "subcontent">
        {Props.subcontent}
      </Box>
    </>
  );
};
