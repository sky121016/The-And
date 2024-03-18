import React from "react";
import * as C from "./CreateButton.style";

const CreateButton = ({ text, action }) => {
  return (
    <C.Container onClick={action}>
      <C.Button>{text}</C.Button>
    </C.Container>
  );
};

export default CreateButton;
