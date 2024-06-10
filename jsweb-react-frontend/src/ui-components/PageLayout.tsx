import { Route, Routes } from "react-router-dom";
import Header from "./Header";

import Home from "../pages/Home";
import About from "../pages/About";
import ResponsiveAppBar from "./Header";

export function PageLayout() {
  return (
    <>
      <ResponsiveAppBar/>
      <div className = "page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route></Route>
        <Route path="about" element={<About />} />
      </Routes>
      </div>
    </>
  );
}
