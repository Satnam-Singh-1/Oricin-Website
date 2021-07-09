import React from "react";
import { NavLink } from "react-router-dom";
import web from "../component/images/img1.svg";
import Common from "./common";

const Home = () => {
  return (
    <>
      <Common name="Grow your business with" imgsrc={web} btn="Get Started" visit="/service"/>
    </>
  );
};

export default Home;
