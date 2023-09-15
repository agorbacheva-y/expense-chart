import { useContext } from "react";
import { CounterContext } from "../App";

function ThisMonth() {
  const { thisMonth } = useContext(CounterContext);

  return (
    <div className="this-month">
      <p>Total this month</p>
      <h2>${thisMonth}</h2>
    </div>
  );
};

export default ThisMonth;
