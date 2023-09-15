import { useState, useEffect, createContext } from "react";
import Balance from './components/Balance';
import Spending from './components/Spending';

export const CounterContext = createContext("");

function App() {
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  const [ chartDate, setChartDate ] = useState([]);
  

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
      <CounterContext.Provider value= {{ spendingAmount, chartDate }} >
        <Balance />
        <Spending />
      </CounterContext.Provider>
    </div>
  );
}

export default App;