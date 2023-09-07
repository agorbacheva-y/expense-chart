import { useState, useEffect } from "react";

function Chart() {
  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setChartData(data))
  },[]);

  //console.log(chartData[0].amount);

  return (
    <div className='chart'>
      <div className='chart__bar'>
          <div className='chart__fill' style={{ height: `${chartData[3].amount}%` }}></div>
      </div>
    </div>
  );
};

export default Chart;
