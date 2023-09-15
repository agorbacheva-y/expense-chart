import Layout from './Layout';
import Chart from './Chart';
import ThisMonth from './ThisMonth';
import LastMonth from './LastMonth';

function Spending() {
  return (
    <div className='spending'>
      <Layout style={{backgroundColor: "white", color: "hsl(25, 47%, 15%)"}}>
        <h3>Spending - Last 7 days</h3>
        <Chart />
        <hr />
        <div className="spending--month">
          <ThisMonth />
          <LastMonth />
        </div>
      </Layout>
    </div>
  );
};

export default Spending;
