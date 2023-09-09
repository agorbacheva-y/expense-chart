import { useState, useEffect } from "react";
import Layout from './Layout';
import Chart from './Chart';
import ThisMonth from './ThisMonth';
import LastMonth from './LastMonth';

function Spending() {
  const [ spendingAmount, setSpendingAmout ] = useState([]);
  const [ chartDate, setChartDate ] = useState([]);

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
    <div className='spending'>
      <Layout style={{backgroundColor: "white", color: "hsl(25, 47%, 15%)"}}>
        <h3>Spending - Last 7 days</h3>
        <Chart spendingAmount={spendingAmount} chartDate={chartDate} />
        <hr />
        <div className="spending--month">
          <ThisMonth thisMonth={thisMonth} />
          <LastMonth thisMonth={thisMonth} lastMonth={lastMonth} />
        </div>
      </Layout>
    </div>
  );
};

export default Spending;
