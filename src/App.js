import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import Admin from './Pages/Admin/Admin';
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin';
import OrdersAdmin from './Pages/Admin/OrdersAdmin/OrdersAdmin';

import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
