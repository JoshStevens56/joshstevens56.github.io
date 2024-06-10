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

export default function Gaming() {
  return (
    <>
      <h1>Gaming</h1>
      <Link to="/about">About</Link>
    </>
  );
}