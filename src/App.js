import React from "react";

import Title from "./Title";
import Header from "./Header";
import Main from "./Main";

import "./App.css";
import "./Title.css";
import "./Header.css";
import "./Main.css";

function App() {
  return (
  <section className="App">
    <Title />
    <div className="Weather-App">
      <Header />
      <Main />
    </div>
    </section>
  );
}

export default App;
