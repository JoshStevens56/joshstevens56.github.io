import ResponsiveAppBar from "./Header";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

//page imports
import { Home } from "../pages/Landing/Home";
import { About } from "../pages/About/About";

import '../style.css'

export const PageLayout: React.FC<{}> = (props) => {
  return (
    <>
      <ResponsiveAppBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route></Route>
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};
