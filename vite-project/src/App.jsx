import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Child Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
