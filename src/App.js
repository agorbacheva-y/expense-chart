import Layout from './components/Layout';

function App() {
  return (
    <div className='body-container'>
      <Layout style={{backgroundColor: "hsl(10, 79%, 65%)", color: "white"}}>
        <h1>My Balance</h1>
      </Layout>
      <Layout style={{backgroundColor: "white", color: "hsl(25, 47%, 15%)"}}>
        <h1>Expense Chart</h1>
      </Layout>
    </div>
  );
}

export default App;