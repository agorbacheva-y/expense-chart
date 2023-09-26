import { useState, useEffect, createContext } from "react";
import Balance from './components/Balance';
import Spending from './components/Spending';

export const CounterContext = createContext("");

function App() {
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  const [ chartDate, setChartDate ] = useState([]);
  
  // given values
  let thisMonth = 478.33;
  let lastMonth = 467.12;

  useEffect(() => {
    fetchSpendingData();
  },[]);  

  // get amount and date from data.json
  const fetchSpendingData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setSpendingAmout(data.map(({ amount }) => amount));
    setChartDate(data.map(({ day }) => day));
  };

  return (
    <div className='body-container'>
      <CounterContext.Provider value= {{ spendingAmount, chartDate, thisMonth, lastMonth }} >
        <Balance />
        <Spending />
      </CounterContext.Provider>

      <div class="attribution">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. </p>
        <p>Coded by <a href="https://github.com/agorbacheva-y">AGorbacheva</a>.</p>
      </div>
    </div>
  );
}

export default App;