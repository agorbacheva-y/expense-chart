import { useContext } from "react";
import { CounterContext } from "../App";

function CurrBalance() {
  const { spendingAmount, thisMonth } = useContext(CounterContext);

  let sumWeek = 0;
  for (let i = 0; i < spendingAmount.length; i++ ) {
    sumWeek += spendingAmount[i];
  }

  let balance = 1399.81;
  let remBalance = balance - thisMonth;


  return (
    <div>
      <h3>${remBalance}</h3>
    </div>
  );
};

export default CurrBalance;
