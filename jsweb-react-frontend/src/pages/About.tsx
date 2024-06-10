import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../ui-components/Header';

/** ------------------------------------
 *  About
 *  ------------------------------------
 *  About page for the site.
 * 
 *  <div className="App"> - Highest level div. Renders background colour.
 * ------------------------------------ */

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <Link to="/">Home</Link>
    </>
  );
}