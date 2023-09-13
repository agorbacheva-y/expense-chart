import { useState, useEffect } from "react";

function Chart({ chartDate }) {
  const [ chartAmount, setChartAmount ] = useState([]);
  const [ dayIndex, setDayIndex ] = useState(0);
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  const [ isHover, setIsHover ] = useState(false);
  let day = 'wed';
  
  useEffect(() => {
    fetchSpendingData();
    currentDay();
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

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <div className="chart">

      <div className="chart__fill" >
        {chartAmount.map((item, id) => (
          <div
            key={id}
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
            className={dayIndex === id ? 'chart__fill--today' : 'chart__fill--other'}
            style={{ height: `${item}%` }}
          >
          </div>
        ))}
      </div>

      {isHover && (
        <div className="chart__bar">
        {spendingAmount.map((item, id) => (
          <div key={id} className="chart__overlay">${item}</div>
        ))}
        </div>
      )}

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