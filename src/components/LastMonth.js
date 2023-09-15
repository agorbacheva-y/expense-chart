import { useState, useEffect, useContext } from 'react';
import { CounterContext } from "../App";

function LastMonth() {
  const [ percentChange, setPercentChange ] = useState("");
  const { thisMonth, lastMonth} = useContext(CounterContext);

  useEffect(() => {
    findDiff();
  },[])

  const findDiff = () => {
    let diff = ((thisMonth / lastMonth) -1) * 100;
    let roundedDiff = Math.round(diff * 10) / 10;

    if (roundedDiff > 0) {
      roundedDiff = "+" + roundedDiff;
    } else {
      return roundedDiff;
    }

    setPercentChange(roundedDiff);
  };

  return (
    <div className="last-month">
      <h5>{percentChange}%</h5>
      <p>from last month</p>
    </div>
  );
};

export default LastMonth;
