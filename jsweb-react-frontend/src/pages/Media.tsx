import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../ui-components/Header';

/** ------------------------------------
 *  Home
 *  ------------------------------------
 *  Landing page for people visiting the base site.
 * 
 *  
 * ------------------------------------ */

export default function Media() {
  return (
    <>
      <h1>Media</h1>
      <Link to="/about">Home</Link>
    </>
  );
}