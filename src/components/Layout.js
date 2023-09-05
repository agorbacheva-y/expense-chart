import '../app.css'

function Layout({ children, style }) {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

export default Layout;
