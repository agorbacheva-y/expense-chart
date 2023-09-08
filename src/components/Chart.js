import { useState, useEffect } from "react";
import Amount from "./Amount";

function Chart() {
  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    fetchChartData();
  },[]);

  const fetchChartData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setChartData(data.map(({ amount }) => amount));

    console.log(chartData);
  };

  return (
    <div className='chart'>
      <div className='chart__bar'>
        {chartData.map((item, id) => (
          <div key={id} className='chart__fill' style={{ height:`${item}%` }}></div>
        ))}
      </div>
    </div>
  );
};

export default Chart;

// how to map chart__fill with heights from data in chartData