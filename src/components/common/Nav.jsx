import React from "react";
import * as N from "./Nav.style";

const Nav = () => {
  return (
    <N.Container>
      <N.Menu>
        <N.Calendar size={22} />
      </N.Menu>
      <N.Menu>
        <N.Home size={24} />
      </N.Menu>
      <N.Menu>
        <N.MyPage size={24} />
      </N.Menu>
    </N.Container>
  );
};

export default Nav;
