import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './Pages/Admin/Admin';
import OrdersAdmin from './Pages/Admin/OrdersAdmin/OrdersAdmin';
import Filter from './Pages/Filter/Filter';
import Login from './Pages/Login/Login';
import Shop from './Pages/Shop/Shop';
import SignUp from './Pages/Sign Up/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/page/:page" element={<Shop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filter" element={<Filter />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/orders" element={<OrdersAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
