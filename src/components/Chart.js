import { useState, useEffect, useContext } from "react";
import { CounterContext } from "../App";

function Chart() {
  const { chartDate, spendingAmount } = useContext(CounterContext);
  const [ dayIndex, setDayIndex ] = useState(null);
  
  let day = 'wed';
  
  useEffect(() => {
    currentDay();
  },[]);  

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
  //console.log(chartDate);

  return (
    <div>
      <div className="chart">
        {spendingAmount.map((item, id) => (
          <div
            key={id}
            className={dayIndex === id ? 'chart__fill--today' : 'chart__fill--other'}
            style={{ height: `${item/0.7}%` }}
          >
            <div className="chart__overlay">
              <div className="chart__overlay--text">${item}</div>
            </div>
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