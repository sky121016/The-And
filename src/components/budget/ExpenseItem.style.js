import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 79px;
  padding: 16px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Payer = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--light3);
`;

export const Category = styled.p`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 400;
  border-radius: 30px;
  background-color: var(--light1);
  color: var(--light3);
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--white);
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--white);
`;
