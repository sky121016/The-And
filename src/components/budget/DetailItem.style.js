import styled from "styled-components";
import { PiHandCoins } from "react-icons/pi";
import { GoTrash } from "react-icons/go";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  gap: 16px;
`;

export const Cart = styled(PiHandCoins)`
  margin-right: 20px;
  font-size: 20px;

  fill: ${(props) => (props.myExpense ? "var(--white)" : "var(--light2)")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    color: var(--light3);
  }
`;
export const Price = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

export const Delete = styled(GoTrash)`
  padding-top: 1px;
  fill: var(--light3);
`;
