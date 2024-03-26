import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
  width: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Category = styled.div`
  background-color: var(--light1);
  padding: 4px 8px;
  box-sizing: border-box;
  height: 20px;
  color: var(--white);
  font-size: 10px;
  font-weight: 300;
  border-radius: 20px;
`;

export const Info = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    color: var(--peach);
    text-align: right;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
`;

export const Payer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--light2);
`;

export const ItemList = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const AddItem = styled.button`
  width: 100%;
  height: 34px;
  background-color: var(--dark);
  border: 1px solid var(--light2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
