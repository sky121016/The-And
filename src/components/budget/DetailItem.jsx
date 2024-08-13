import React, { useState } from "react";
import * as D from "./DetailItem.style";

const DetailItem = () => {
  const [myExpense, setMyExpense] = useState(false);
  return (
    <D.Container>
      <D.Left>
        <D.Cart
          myExpense={myExpense}
          onClick={() => setMyExpense(!myExpense)}
        />
        <D.Content>
          <h3>아메리카노</h3>
          <p>홍가경</p>
        </D.Content>
      </D.Left>

      <D.Right>
        <D.Price>4,500원</D.Price>
        <D.Delete />
      </D.Right>
    </D.Container>
  );
};

export default DetailItem;
