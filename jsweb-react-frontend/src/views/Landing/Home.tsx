import "../../styling/views.css";
import "../../styling/style.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

//subpage content
import { PortfolioSummary } from "./PortfolioSubpage";
import { AboutSubpageContent } from "./AboutSubpage";

import { Carousel } from "../../components/Carousel";
import { CarouselCards } from "../../components/Carousel";

import { themeColours } from "../../styling/Colours";
/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 *  A single page broken up into a series of subpages, with the intention of scrolling through them.
 *
 * Each subpage has split content,.
 * ------------------------------------ */

const portfoliosummary = PortfolioSummary();
const cards: CarouselCards ={content:[
  {
    title: "joshua-stevens.me",
    subtitle: "",
    buttonvisible: false,
    buttontext: "",
    buttonlink: "",
    subcontent: <></>,
    colour: themeColours.primary,
  },{
    title: "About",
    subtitle: "A short read on everything me!",
    buttonvisible: true,
    buttontext: "About",
    buttonlink: "about",
    subcontent: AboutSubpageContent(),
    colour: themeColours.secondary,
  },{
    title: "Portfolio",
    subtitle: "An overview of my professional career",
    buttonvisible: true,
    buttontext: "Portfolio",
    buttonlink: "portfolio",
    subcontent: PortfolioSummary(),
    colour: themeColours.tertiary,
  },{
    title: "Blog",
    subtitle: "Check out who I am",
    buttonvisible: true,
    buttonlink: "Blog",
    buttontext: "blog",
    subcontent: <></>,
    colour: themeColours.extra1,
  },{
    title: "Contact",
    subtitle: "Check out who I am",
    buttonvisible: true,
    buttonlink: "Contact",
    buttontext: "contact",
    subcontent: <></>,
    colour: themeColours.extra2,
  }
]};

export const Home = () => {
  return (
    <>
      <Carousel content={cards.content}></Carousel>
    </>
  );
};

export default Home;
