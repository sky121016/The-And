import React from "react";
import * as B from "./BudgetDetail.style";
import MenuHeader from "../components/common/MenuHeader";
import DetailItem from "../components/budget/DetailItem";
import { GoPlus } from "react-icons/go";

const BudgetDetail = () => {
  return (
    <>
      <MenuHeader title={"상세 내역"} />
      <B.Container>
        <B.Title>스타벅스</B.Title>

        <B.CategoryContainer>
          <B.Category>카페</B.Category>
        </B.CategoryContainer>

        <B.Info>
          <B.PriceContainer>
            <h3>가격</h3>
            <h2>10,000원</h2>
          </B.PriceContainer>
          <B.Payer>
            <h3>계산한 사람</h3>
            <h3>홍수민</h3>
          </B.Payer>
        </B.Info>

        <B.ItemList>
          <DetailItem></DetailItem>
        </B.ItemList>

        <B.AddItem>
          <GoPlus size={22} />
        </B.AddItem>
      </B.Container>
    </>
  );
};

export default BudgetDetail;
