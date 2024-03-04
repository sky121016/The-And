import React from "react";
import * as R from "./Rule.style";
import { GoPencil } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { setRule } from "../../redux/rule";

const Rule = ({ rule, setEditModal }) => {
  const dispatch = useDispatch();

  const handleEditModal = () => {
    setEditModal(true);
    dispatch(
      setRule({ id: rule.id, title: rule.title, description: rule.description })
    );
  };
  return (
    <R.Container>
      <R.Text>
        <R.Title>
          {rule.id}. {rule.title}
        </R.Title>
        <R.Description>{rule.description}</R.Description>
      </R.Text>

      <R.Edit onClick={() => handleEditModal()}>
        <GoPencil size={14} />
      </R.Edit>
    </R.Container>
  );
};

export default Rule;
