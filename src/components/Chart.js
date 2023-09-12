import { useState, useEffect } from "react";

function Chart({ chartDate }) {
  // const [ chartAmount, setChartAmount ] = useState([]);
  const [ dayIndex, setDayIndex ] = useState(0);
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  let day = 'wed';
  
  useEffect(() => {
    fetchSpendingData();
    currentDay();
  },[]);  

  // get amount and date from data.json
  const fetchSpendingData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setSpendingAmout(data.map(({ amount }) => amount));
  };

  // useEffect(() => {
  //   fetchChartData();
  //   currentDay();
  // },);

  // // adjust heights so max y value is 70%
  // const fetchChartData = () => {
  //   const newAmount = spendingAmount.map(currentValue => currentValue/0.7);
  //   setChartAmount(newAmount);
  // };

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
    <div className="chart">
      <div className="chart__cntr">
        {spendingAmount.map((item, id) => (
          <div className="chart__bar">
            <div key={id} className="chart__overlay">${item}</div>
            <div
              key={id}
              className={dayIndex === id ? 'chart__fill--today' : 'chart__fill--other'}
              style={{ height: `${item}%` }}
            >
            </div>
          </div>
        ))}
      </div>
      {/* <div className="chart__overlay">
        {spendingAmount.map((item, id) => (
          <div key={id} className="chart__overlay--box">${item}</div>
        ))}
      </div>
      
      <div className="chart__fill">
        {spendingAmount.map((item, id) => (
          <div
            key={id}
            className={dayIndex === id ? 'chart__fill--today' : 'chart__fill--other'}
            style={{ height: `${item}%` }}
          >
          </div>
        ))}
      </div> */}

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