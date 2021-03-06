import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import "./base.scss";

export const Layout = (props) => (
  <div>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);
