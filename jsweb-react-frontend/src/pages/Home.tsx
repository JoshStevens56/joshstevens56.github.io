import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

import { Subpage } from "../component/Subpage";
import logo from "../logo.svg";
import ScrollFlag from "../ui-components/ScrollFlag";

import "../style.css";

/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *
 *
 * ------------------------------------ */

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const homesubcontent = (
  <React.Fragment>
    <Card variant="outlined">{card}</Card>
  </React.Fragment>
);

export default function Home() {
  return (
    <>
      <Box className="homepage">
        <Box className="scrollbar">
          <ScrollFlag/>
        </Box>
        <Box className = "subpages">
          <Subpage
            title="Joshua-Stevens.me"
            subtitle="Welcome to my website!"
            button_text=""
            button_link=""
            theme_colour="#FF9456"
            subcontent={homesubcontent}
          />
          <Subpage
            title="About"
            subtitle="Overview of everything me"
            button_text="Check me out"
            button_link="about"
            theme_colour="#323F49"
            subcontent={homesubcontent}
          />
          <Subpage
            title="Portfolio"
            subtitle="Take a closer look at my professional career"
            button_text="Check me out"
            button_link="about"
            theme_colour="#D85A62"
            subcontent={homesubcontent}
          />
          <Subpage
            title="Blog"
            subtitle="My thoughts on my latest obsessions"
            button_text="Check me out"
            button_link="about"
            theme_colour="#6AB97B"
            subcontent={homesubcontent}
          />
          <Subpage
            title="Contact"
            subtitle="Reach out to me if you have any questiosn"
            button_text="Check me out"
            button_link="about"
            theme_colour="#2D8CC5"
            subcontent={homesubcontent}
          />
        </Box>
      </Box>
    </>
  );
}
