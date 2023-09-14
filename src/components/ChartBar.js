import { useState, useEffect } from "react";

function ChartBar({ dayIndex }) {
  const [ chartAmount, setChartAmount ] = useState([]);
  const [ spendingAmount, setSpendingAmout ] = useState([]);

  useEffect(() => {
    fetchSpendingData();
  },[]);  

  useEffect(() => {
    fetchChartData();
  },[spendingAmount])

  // get amount and date from data.json
  const fetchSpendingData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setSpendingAmout(data.map(({ amount }) => amount));
  };

  // adjust heights so max y value is 70%
  const fetchChartData = () => {
    const newAmount = spendingAmount.map(currentValue => currentValue/0.7);
    setChartAmount(newAmount);
  };

  return (
    <div className="chart">
      {spendingAmount.map((item, id) => (
        <div
          key={id}
          className={dayIndex === id ? 'chart__fill--today' : 'chart__fill--other'}
          style={{ height: `${item}%` }}
        >
          <div className="chart__overlay">${item}</div>
        </div>
      ))}
    </div>
  );
};

export default ChartBar;
