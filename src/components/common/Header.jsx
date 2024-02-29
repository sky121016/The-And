import React from "react";
import * as H from "./Header.style";

const Header = ({ TitleColor, Text }) => {
  return (
    <H.Container>
      <H.Title TitleColor={TitleColor}>{Text}</H.Title>
    </H.Container>
  );
};

export default Header;
