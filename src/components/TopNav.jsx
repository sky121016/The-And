import React from "react";
import * as T from "./TopNav.style";
import logo from "../assets/ticketLogo.png";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <T.Container>
      <img src={logo} alt="logo" onClick={()=>navigate("/")}/>
    </T.Container>
  );
};

export default TopNav;
