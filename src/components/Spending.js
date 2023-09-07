import Layout from './Layout';
import Chart from './Chart';

function Spending() {
  return (
    <div className='spending'>
      <Layout style={{backgroundColor: "white", color: "hsl(25, 47%, 15%)"}}>
        <h3>Spending - Last 7 days</h3>
        <Chart />
        <hr />
        <p>Total this month</p>
        <h2>balance</h2>
        <p>% change</p>
        <p>from last month</p>
      </Layout>
    </div>
  );
};

export default Spending;
