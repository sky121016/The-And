import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77px;
  padding: 24px 16px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.TitleColor === "peach" ? "var(--peach)" : "var(--white)"};

  font-size: 24px;
  font-weight: 500;
`;
