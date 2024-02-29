import React from "react";
import * as T from "./TopNav.style";
import logo from "../assets/logo.png";

const TopNav = () => {
  return (
    <T.Container>
      <img src={logo} alt="logo" />
    </T.Container>
  );
};

export default TopNav;
