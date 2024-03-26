import React from "react";
import * as B from "./Budget.style";
import Header from "../components/common/Header";
import ExpenseItem from "../components/budget/ExpenseItem";
import CreateButton from "../components/common/CreateButton";

const Budget = () => {
  const expenses = [
    {
      date: "03/04",
      payer: "홍수민",
      category: "카페",
      title: "스타벅스",
      price: 10000,
    },
    {
      date: "03/04",
      payer: "홍수민",
      category: "식당",
      title: "떡볶이",
      price: 12000,
    },
    {
      date: "03/02",
      payer: "홍수민",
      category: "카페",
      title: "이디야",
      price: 9000,
    },
  ];

  let prevDate = null;

  const createExpense = () => {};

  return (
    <>
      <Header Text="예산" />
      <B.Container>
        <B.TotalContainer>
          <h2>지출 합계</h2>
          <h1>1,124,580원</h1>
          <h3>나의 지출 540,600원</h3>
        </B.TotalContainer>

        <B.DetailContainer>
          <h1>지출 내역</h1>
          {expenses.map((expense, key) => {
            const renderDate = expense.date !== prevDate;
            prevDate = expense.date;

            return (
              <>
                {renderDate && <h2>{expense.date}</h2>}
                <ExpenseItem expense={expense} key={key}></ExpenseItem>
              </>
            );
          })}
        </B.DetailContainer>
      </B.Container>

      <CreateButton text="내역 추가하기" action={createExpense} />
    </>
  );
};

export default Budget;
