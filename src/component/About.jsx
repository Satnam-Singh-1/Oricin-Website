import React from "react";
import { NavLink } from "react-router-dom";
import web from "../component/images/img2.svg";
import Common from "./common";

const Home = () => {
  return (
    <>
      <Common name="Welcome to About page" imgsrc={web} btn="Contact Us" visit="/contact"/>
    </>
  );
};

export default Home;
