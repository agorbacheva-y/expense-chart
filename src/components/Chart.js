import { useState, useEffect } from "react";

function Chart() {
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  const [ chartAmount, setChartAmount ] = useState([]);
  const [ chartDate, setChartDate ] = useState([]);
  const [ dayIndex, setDayIndex ] = useState(0);
  let day = 'wed';

  useEffect(() => {
    fetchSpendingData();
    currentDay();
  },[]);

  useEffect(() => {
    fetchChartData();
  },[spendingAmount]);

  // get amount and date from data.json
  const fetchSpendingData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setSpendingAmout(data.map(({ amount }) => amount));
    setChartDate(data.map(({ day }) => day));
  };

  // adjust heights so max y value is 70%
  const fetchChartData = () => {
    const newAmount = spendingAmount.map(currentValue => currentValue/0.7);
    setChartAmount(newAmount);
  };

  // set index of current day
  const currentDay = () => { 
    switch(day) {
      case 'mon' :
        setDayIndex(0);
        break;
      case 'tue' :
        setDayIndex(1);
        break;
      case 'wed' :
        setDayIndex(2);
        break;
      case 'thu' :
        setDayIndex(3);
        break;
      case 'fri' :
        setDayIndex(4);
        break;
      case 'sat' :
        setDayIndex(5);
        break;
      case 'sun' :
        setDayIndex(6);
        break;
      default :
      setDayIndex(7);
        return;
    };
  };
  //console.log(dayIndex);

  return (
    <div className='chart'>
      <div className='chart__bar'>
        {chartAmount.map((item, id) => (
          <div 
            key={id} 
            className={ dayIndex === id ? 'chart__fill--today' : 'chart__fill'}
            style={{ height:`${item}%` }}
          >
          </div>
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