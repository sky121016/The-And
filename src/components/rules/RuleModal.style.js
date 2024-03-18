import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(96, 96, 96, 0.35);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 425px;
  background-color: var(--dark);
  padding: 16px;
  box-sizing: border-box;
  border-radius: 10px;

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: var(--light3);
    padding-left: 8px;
    margin-bottom: 8px;
  }
`;

export const Header = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 24px;
`;

export const Title = styled.div`
  input {
    width: 100%;
    background-color: var(--light1);
    border: none;
    padding: 16px 12px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;

    &::placeholder {
      color: var(--light3);
      font-size: 14px;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Description = styled.div`
  textarea {
    width: 100%;
    background-color: var(--light1);
    border: none;
    padding: 16px 12px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 16px;
    height: 120px;

    &::placeholder {
      color: var(--light3);
      font-size: 14px;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    width: 156px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
  }
`;

export const Cancel = styled.button`
  background-color: var(--light1);
  border: none;
  color: var(--light3);
`;

export const Save = styled.button`
  border: 1px solid var(--light2);
  background-color: var(--normal);
`;

export const Delete = styled.p`
  color: var(--error);
  text-align: center;
  font-size: 14px;
`;
