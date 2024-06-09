import React, { useState } from "react";
import logo from "../logo.svg";
import "../styling/Header.css";

export const Header = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div className="Header">
      <div>
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          {" "}
          button{" "}
        </button>
      </div>
      <div>
        {state == false && <p> Welcome to My Website</p>}
        {state == true && (
          <p> Congratulations you activated the super scerte stuff wowee (we love shadow claw)</p>
        )}
      </div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
