import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 76px;
  background-color: var(--normal);
  border-radius: 10px;
  padding: 16px 12px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: var(--peach);
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--light3);
`;

export const Edit = styled.button`
  display: flex;
  background: none;
  border: none;
`;
