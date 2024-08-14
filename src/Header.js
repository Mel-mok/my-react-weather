import React from "react";

import "./App.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <form className="Form-input" id="form-input">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="Form-search"
          id="form-search"
        />
        <input
          type="submit"
          value="Search"
          className="Form-submit"
          id="form-submit"
        />
      </form>
    </header>
  );
}
