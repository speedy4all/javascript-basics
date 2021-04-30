import React from "react";
import "./styles.css";
import logo from "./pentalog-logo-mini.svg";

export default function Header({ logout }) {
  return (
    <header className="header">
      <img className="logo-mini" src={logo} alt="Pentalog" />
      <h4 className="title">Pentalog Training Program</h4>
      <button className="ml-3 btn btn-primary" onClick={logout}>
        Logout
      </button>
    </header>
  );
}
