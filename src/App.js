import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Admin from './Pages/Admin/Admin';
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin';
import OrdersAdmin from './Pages/Admin/OrdersAdmin/OrdersAdmin';

import Login from './Pages/Login/Login';
import Shop from './Pages/Shop/Shop';
import SignUp from './Pages/Sign Up/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
