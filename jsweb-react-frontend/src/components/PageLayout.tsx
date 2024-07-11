import ResponsiveAppBar from "./Header";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "../styling/root.css";

//page imports
const Home = lazy(() => import("../views/Landing/Home"));
const About = lazy(() => import("../views/About/About"));
const Portfolio = lazy(() => import("../views/Portfolio/Portfolio-Landing"));
const Blog = lazy(() => import("../views/Blog/Blog"));
const Contact = lazy(() => import("../views/Contact/Home"));

export const PageLayout: React.FC<{}> = (props) => {
  return (
    <>
      <ResponsiveAppBar />

      <div className="page">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="blog" element={<Blog />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
