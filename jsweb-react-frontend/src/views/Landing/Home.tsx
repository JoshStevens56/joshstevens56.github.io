import "../../styling/views.css";
import "../../styling/style.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

//subpage content
import { PortfolioSummary } from "./PortfolioSubpage";
import { AboutSubpageContent } from "./AboutSubpage";

import { FormRow } from "../../components/FormRow";
import { Carousel } from "../../components/Carousel";
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
    <>
        <Carousel></Carousel>
    </>
  );
};
