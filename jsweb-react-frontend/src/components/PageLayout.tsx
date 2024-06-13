import ResponsiveAppBar from "./Header";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

//page imports
import { Home } from "../views/Landing/Home";
import { About } from "../views/About/About";
import { Portfolio } from "../views/Portfolio/Portfolio-Landing";
import { Blog } from "../views/Blog/Blog";
import { Contact } from "../views/Contact/Home";

import '../styling/root.css'

export const PageLayout: React.FC<{}> = (props) => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="portfolio" element={<Portfolio/>} ></Route>
          <Route  path="blog" element={<Blog/>} ></Route>
          <Route  path="contact" element={<Contact/>} ></Route>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};
