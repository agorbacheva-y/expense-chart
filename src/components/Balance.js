import Layout from './Layout';
import logo from '../images/logo.svg';
import CurrBalance from './CurrBalance';

function Balance() {
  return (
    <div className='balance'>
      <Layout style={{backgroundColor: "hsl(10, 79%, 65%)", color: "white"}}>
        <div className='balance__nr'>
          <p>My balance</p>
          <CurrBalance />
        </div>
        <div className='balance__logo'>
          <img src={logo} alt="logo"/>
        </div>
      </Layout>
    </div>
  );
};

export default Balance;
