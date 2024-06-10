import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style.css";


/** ------------------------------------
 *  Index
 *  ------------------------------------
 *  Root Level of Application.
 * 
 *  <StrictMode> is a dev-only wrapper that challenges app behaviour to better encounter bugs.
 *  <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
 *  <App> renders the content inside the 'App.tsx' page. 
 * ------------------------------------ */


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
