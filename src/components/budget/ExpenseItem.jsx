import React from "react";
import * as E from "./ExpenseItem.style";
import { useNavigate } from "react-router-dom";

const ExpenseItem = ({ expense }) => {
  // console.log(expense);
  const navigate = useNavigate();
  return (
    <E.Container onClick={()=>navigate("/budget/detail")}>
      <E.Top>
        <E.Payer>{expense.payer}</E.Payer>
        <E.Category>{expense.category}</E.Category>
      </E.Top>
      <E.Bottom>
        <E.Title>{expense.title}</E.Title>
        <E.Price>{expense.price.toLocaleString()}원</E.Price>
      </E.Bottom>
    </E.Container>
  );
};

export default ExpenseItem;
