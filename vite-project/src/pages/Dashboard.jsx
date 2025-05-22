import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <nav>
        <Link to="profile">Go to Profile</Link> |{" "}
        <Link to="orders">Go to Orders</Link>
        <h1>Helllo All dced</h1>
      </nav>
      {/* ?/ hjb */}

      <hr />

      {/* This is where child route will appear */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
