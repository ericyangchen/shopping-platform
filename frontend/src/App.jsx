import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Account from './pages/account/Account';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
