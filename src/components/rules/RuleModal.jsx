import React, { useState } from "react";
import * as R from "./RuleModal.style";
import { useSelector } from "react-redux";

const RuleModal = ({
  createModal,
  setCreateModal,
  editModal,
  setEditModal,
}) => {
  const rule = useSelector((state) => state.rule);
  const [title, setTitle] = useState(rule.title);
  const [description, setDescription] = useState(rule.description);

  console.log(title);
  console.log(description);

  const closeModal = () => {
    if (editModal) {
      setEditModal(false);
    } else {
      setCreateModal(false);
    }
  };

  const save = () => {
    closeModal();

    if (editModal) {
      console.log("edit");
    } else {
      console.log("create");
    }
  };

  return (
    <R.Background>
      <R.Container>
        {createModal && <R.Header>규칙 만들기</R.Header>}
        {editModal && <R.Header>규칙 수정하기</R.Header>}

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
          <R.Save onClick={save}>확인</R.Save>
        </R.Buttons>

        {editModal && <R.Delete onClick={closeModal}>규칙 삭제하기</R.Delete>}
      </R.Container>
    </R.Background>
  );
};

export default RuleModal;
