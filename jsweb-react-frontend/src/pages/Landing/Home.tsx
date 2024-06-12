import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Paper,
} from "@mui/material";

import { red, green, blue, blueGrey, orange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { Subpage } from "./Subpage";
import logo from "../../resources/img/logo.svg";

import "../../style.css";
import { FormRow } from "../../ui-components/FormRow";
import { ThemeProvider } from "@mui/material";
/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *  A single page broken up into a series of subpages, with the intention of scrolling through them.
 *
 * Each subpage has split content,.
 * ------------------------------------ */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const portfoliocard = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Skilled in:
      </Typography>
      <Typography variant="h5" component="div">
        React{bull}c#{bull}Azure{bull}Project Lead
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        Experienced in designing, developing, delivering, and supporting
        solutions
        <p />
        Microsoft certified
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export const Home = () => {
  return (
    <Grid container spacing={1} sx={{ flexGrow: 1 }}>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Joshua-Stevens.Me"
          subtitle="Welcome to my personal website!"
          button_include={false}
          button_text=""
          button_link=""
          theme_color="primary"
          subcontent={portfoliocard}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="About"
          subtitle="Learn a little about me"
          button_include={true}
          button_text="About"
          button_link="about"
          theme_color="secondary"
          subcontent={portfoliocard}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Portfolio"
          subtitle="Take a closer look at my professional career"
          button_include={true}
          button_text="Check it out"
          button_link=""
          theme_color="#D85A62"
          subcontent={portfoliocard}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Blog"
          subtitle="Watch my obsessions"
          button_include={false}
          button_text=""
          button_link=""
          theme_color="#D85A62"
          subcontent={portfoliocard}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Portfolio"
          subtitle="Take a closer look at my professional career"
          button_include={false}
          button_text=""
          button_link=""
          theme_color="#D85A62"
          subcontent={portfoliocard}
        />
      </Grid>

    </Grid>
  );
};
