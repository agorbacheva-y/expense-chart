import { useState, useEffect } from "react";

function Chart() {
  const [ chartData, setChartData ] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //   .then(res => res.json())
  //   .then(data => setChartData(data))

  //   console.log(chartData);
  // },[]);

  useEffect(() => {
    fetchChartData();
  },[]);

  const fetchChartData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setChartData(data.map(({ amount }) => amount));
  };

  console.log(chartData);

  return (
    <div className='chart'>
      <div className='chart__bar'>
          <div className='chart__fill' style={{ height: `${chartData}%` }}></div>
      </div>
    </div>
  );
};

export default Chart;
