import React, { useState } from "react";
import * as R from "./RuleEditModal.style";
import { useSelector } from "react-redux";

const RuleEditModal = ({ setEditModal }) => {
  const rule = useSelector((state) => state.rule);
  const [title, setTitle] = useState(rule.title);
  const [description, setDescription] = useState(rule.description);

  console.log(title);
  console.log(description);

  const closeModal = () => {
    setEditModal(false);
  };
  return (
    <R.Background>
      <R.Container>
        <R.Header>규칙 수정하기</R.Header>
        <R.Title>
          <h3>규칙</h3>
          <input
            type="text"
            id="title"
            placeholder="규칙을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </R.Title>

        <R.Description>
          <h3>설명</h3>
          <textarea
            id="description"
            placeholder="규칙 설명을 입력하세요"
            onInput={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </R.Description>

        <R.Buttons>
          <R.Cancel onClick={closeModal}>취소</R.Cancel>
          <R.Save onClick={closeModal}>확인</R.Save>
        </R.Buttons>

        <R.Delete onClick={closeModal}>규칙 삭제하기</R.Delete>
      </R.Container>
    </R.Background>
  );
};

export default RuleEditModal;
