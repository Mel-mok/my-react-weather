import React from "react";

import Title from "./Title";
import Header from "./Header";
import Main from "./Main";

import "./App.css";
import "./Title.css";
import "./Header.css";
import "./Main.css";

export default function App() {
  return (
    <div className="App">
      <Title />
      <div className="Weather-App">
        <Header />
        <Main />
      </div>
    </div>
  );
}
