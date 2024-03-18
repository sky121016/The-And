import React, { useEffect, useState } from "react";
import * as R from "./Rules.style";
import Header from "../components/common/Header";
import Rule from "../components/rules/Rule";
import RuleEditModal from "../components/rules/RuleModal";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import CreateButton from "../components/common/CreateButton";
import { useDispatch } from "react-redux";
import { resetRule } from "../redux/rule";

const Rules = () => {
  // const rules = [
  //   {
  //     id: 1,
  //     title: "7시에 일어나기",
  //     description: "알람이 울리면 바로 일어나기",
  //   },
  //   {
  //     id: 2,
  //     title: "지각하지 않기",
  //     description: "지각비 1분당 100원",
  //   },
  // ];

  const dispatch = useDispatch();

  const [rules, setRules] = useState();

  const addRule = async () => {
    try {
      const rulesCollection = collection(db, "rules");
      const newRuleDoc = await addDoc(rulesCollection, {
        id: 1,
        title: "new rule",
        description: "새로운 규칙",
      });
      console.log("added ", newRuleDoc.id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRules = async () => {
    try {
      const rulesCollection = collection(db, "rules");
      console.log(rulesCollection);
      const ruleSnapshot = await getDocs(rulesCollection);
      console.log("ruleSnapshot", ruleSnapshot);
      console.log("ruleSnapshot.docs", ruleSnapshot.docs);

      const rulesData = ruleSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("rulesData", rulesData);
      setRules(rulesData);
      console.log(rules);
    } catch (error) {
      console.log(error);
    }
  };

  // const getRules = query(collection(db, "rules"));
  // console.log(getRules);

  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  // 규칙 만들기 함수
  const createRule = () => {
    dispatch(resetRule());
    setCreateModal(true);
  };

  useEffect(() => {
    addRule();
    fetchRules();
  }, []);
  return (
    <>
      <Header Text="규칙" />
      <R.Container>
        {rules &&
          rules.map((rule) => {
            return (
              <Rule rule={rule} key={rule.id} setEditModal={setEditModal} />
            );
          })}
      </R.Container>

      <CreateButton text="규칙 만들기" action={createRule} />

      {createModal && (
        <RuleEditModal
          createModal={createModal}
          setCreateModal={setCreateModal}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      )}

      {editModal && (
        <RuleEditModal
          createModal={createModal}
          setCreateModal={setCreateModal}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      )}
    </>
  );
};

export default Rules;
