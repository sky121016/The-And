import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 142px;
  background-color: var(--normal);
  border-radius: 10px;
  padding: 16px;
  box-sizing: border-box;

  h2 {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  h1 {
    color: var(--peach);
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  h3 {
    color: var(--light3);
    font-size: 14px;
    font-weight: 400;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--white);
    font-size: 20px;
    font-weight: 500;
    padding: 16px 0;
  }

  h2 {
    color: var(--light3);
    font-size: 12px;
    font-weight: 300;
    padding-top: 8px;
    border-top: 1px solid var(--light2);
  }
`;
