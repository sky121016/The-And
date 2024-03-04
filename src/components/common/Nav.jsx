import React from "react";
import * as N from "./Nav.style";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <N.Container>
      <N.Menu>
        <N.Calendar size={22} />
      </N.Menu>
      <N.Menu onClick={() => navigate("/")}>
        <N.Home size={24} />
      </N.Menu>
      <N.Menu>
        <N.MyPage size={24} />
      </N.Menu>
    </N.Container>
  );
};

export default Nav;
