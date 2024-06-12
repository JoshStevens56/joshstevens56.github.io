import * as React from "react";
import {
  Box,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";


import "../../style.css";
import { FormRow } from "../../ui-components/FormRow";
/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *  A single page broken up into a series of subpages, with the intention of scrolling through them.
 *
 * Each subpage has split content,.
 * ------------------------------------ */



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
          theme_color="pink"
          subcontent={portfoliocard}
        />
      </Grid>
    </Grid>
  );
};
