import { useState, useEffect } from "react";

function Chart() {
  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setChartData(data))
  },[]);

  console.log(chartData);

  return (
    <div className='chart'>
      <div className='chart__bar'>
        <div className='chart__fill'></div>
      </div>
    </div>
  );
};

export default Chart;
