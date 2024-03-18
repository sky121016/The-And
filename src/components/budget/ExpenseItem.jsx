import React from "react";
import * as E from "./ExpenseItem.style";

const ExpenseItem = ({ expense }) => {
  // console.log(expense);
  return (
    <E.Container>
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
