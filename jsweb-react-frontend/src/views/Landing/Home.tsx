import "../../styling/views.css";
import "../../styling/style.css";
import { Grid } from "@mui/material";

//subpage content
import { PortfolioSummary } from "./PortfolioSubpage";
import { AboutSubpageContent } from "./AboutSubpage";

import { FormRow } from "../../components/FormRow";
/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *  A single page broken up into a series of subpages, with the intention of scrolling through them.
 *
 * Each subpage has split content,.
 * ------------------------------------ */

const portfoliosummary = PortfolioSummary();

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
          subcontent={""}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="About"
          subtitle="Welcome to my personal website!"
          button_include={true}
          button_text="about"
          button_link="about"
          theme_color="#323F49"
          subcontent={AboutSubpageContent()}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Portfolio"
          subtitle="Welcome to my personal website!"
          button_include={true}
          button_text="Portfolio"
          button_link="portfolio"
          theme_color="#D85A62"
          subcontent={PortfolioSummary()}
        />
      </Grid>
      <Grid container item className="HomeGrid-Row">
        <FormRow
          title="Blog"
          subtitle="Welcome to my personal website!"
          button_include={true}
          button_text="Blog"
          button_link="blog"
          theme_color="#6AB97B"
          subcontent={portfoliosummary}
        />
      </Grid>
    </Grid>
  );
};
