import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'; // ✅ uncomment this
// import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory ShopCategory="mens" />} />
        <Route path='/womens' element={<ShopCategory ShopCategory="womens" />} />
        <Route path='/kids' element={<ShopCategory ShopCategory="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
