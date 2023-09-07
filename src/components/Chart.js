import { useState, useEffect } from "react";
import Amount from "./Amount";

function Chart({ style }) {
  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    fetchChartData();
  },[]);

  const fetchChartData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setChartData(data.map(({ amount }) => amount));
  };

  return (
    <div className='chart'>
      <div className='chart__bar'>
        {chartData.map((id, item) => (
          <Amount key={id} className='chart__fill' style={{ height: `${item}%` }}/>
        ))}
          
      </div>
    </div>
  );
};

export default Chart;
