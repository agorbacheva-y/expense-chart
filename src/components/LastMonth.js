import { useState, useEffect } from 'react';

function LastMonth({ thisMonth, lastMonth }) {
  const [ percentChange, setPercentChange ] = useState("");

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
    <div>
      <p>{percentChange}%</p>
      <p>from last month</p>
    </div>
  );
};

export default LastMonth;
