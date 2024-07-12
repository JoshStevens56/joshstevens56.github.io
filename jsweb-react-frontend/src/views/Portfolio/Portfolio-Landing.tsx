import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Typography } from "@mui/material";

/** ------------------------------------
 *  Portfolio.tsx
 *  ------------------------------------
 *  Landing page for the portfolio section of the site.
 *
 *  <div className="App"> - Highest level div. Renders background colour.
 * ------------------------------------ */

export const Portfolio = () => {
  return (
    <>
      <Typography variant="h1">Portfolio</Typography>
      <Link to="/">Home</Link>
      <Typography variant="h2">Skills</Typography>
      <Typography variant="h4">Languages</Typography>
      <Typography>c#, Python, Typescript, Javascript, Power Query M, DAX</Typography>
      <Typography variant="h4">Libraries</Typography>
      <Typography>React</Typography>
      <Typography variant="h4">Tools</Typography>
      <Typography>figma</Typography>
      <Typography variant="h4">Services</Typography>
      <Typography>Github, Postman</Typography>
      <Typography variant="h2">Experience</Typography>
      <Typography variant="h4">cubesys - Developer - 2020-Present</Typography>
      <Typography>Scoped, Designed, Developed, and Managed a Web-App</Typography>
    </>
  );
};

export default Portfolio;
