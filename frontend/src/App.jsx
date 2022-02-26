import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import Home from './pages/home/Home';
import Account from './pages/account/Account';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
