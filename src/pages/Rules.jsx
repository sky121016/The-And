import React, { useState } from "react";
import * as R from "./Rules.style";
import Header from "../components/common/Header";
import Rule from "../components/rules/Rule";
import RuleEditModal from "../components/rules/RuleEditModal";

const Rules = () => {
  const rules = [
    {
      id: 1,
      title: "7시에 일어나기",
      description: "알람이 울리면 바로 일어나기",
    },
    {
      id: 2,
      title: "지각하지 않기",
      description: "지각비 1분당 100원",
    },
  ];

  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <Header Text="규칙" />
      <R.Container>
        {rules.map((rule) => {
          return <Rule rule={rule} key={rule.id} setEditModal={setEditModal} />;
        })}
      </R.Container>

      {editModal && <RuleEditModal setEditModal={setEditModal} />}
    </>
  );
};

export default Rules;
