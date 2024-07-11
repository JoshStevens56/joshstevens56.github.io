import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

/** ------------------------------------
 *  Portfolio.tsx
 *  ------------------------------------
 *  Landing page for the portfolio section of the site.
 * 
 *  <div className="App"> - Highest level div. Renders background colour.
 * ------------------------------------ */

export const Portfolio =()=> {
  return (
    <>
      <h1>About Me</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default Portfolio;