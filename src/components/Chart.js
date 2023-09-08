import { useState, useEffect } from "react";
import Amount from "./Amount";

function Chart() {
  const [ chartAmount, setChartAmount ] = useState([]);
  const [ chartDate, setChartDate ] = useState([]);

  useEffect(() => {
    fetchChartData();
  },[]);

  const fetchChartData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setChartAmount(data.map(({ amount }) => amount));
    setChartDate(data.map(({ day }) => day));

    //console.log(chartAmount);
    console.log(chartDate);
  };

  return (
    <div className='chart'>
      <div className='chart__bar'>
        {chartAmount.map((item, id) => (
          <div key={id} className='chart__fill' style={{ height:`${item}%` }}></div>
        ))}
      </div>

      <div className="chart__week">
        {chartDate.map((item, id) => (
          <div key={id} className="chart__day">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Chart;

// how to map chart__fill with heights from data in chartData