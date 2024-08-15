import React from "react";

import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <br />
        This app was coded by{" "}
        <a href="https://github.com/Mel-mok" target="_blank" rel="noreferrer">
          Melba Mokoena
        </a>{" "}
        and is on{" "}
        <a
          href="https://github.com/Mel-mok/Weather-By-Melba.git"
          target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        and is hosted on{" "}
        <a href="https://weather-by-melba.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}
