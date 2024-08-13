import React from "react";
import * as M from "./MenuHeader.style";

const MenuHeader = ({ title }) => {
  return (
    <M.Container>
      <M.GoBack />
      <M.Title>{title}</M.Title>
      <M.Menu />
    </M.Container>
  );
};

export default MenuHeader;
