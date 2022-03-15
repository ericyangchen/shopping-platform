import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// utility component
import Header from './components/navigation/Header';
import PrivateRouteWrapper from './components/auth/PrivateRouteWrapper';

// pages
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Account from './pages/account/Account';
import OverView from './pages/account/OverView';
import Profile from './pages/account/Profile';
import Order from './pages/account/Order';
import Payment from './pages/account/Payment';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Checkout from './pages/checkout/Checkout';


function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header */}
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Category */}
          <Route path="/category/:category" element={<Category />} />

          {/* Product */}
          <Route path="/products/:productId" element={<Product />} />

          {/* (PrivateRoute: need Auth)*/}
          <Route element={<PrivateRouteWrapper authState={true} redirectPath="/login" />} >
            {/* Account */}
            <Route path="/account" element={<Account />}>
              {/* Overview */}
              <Route index element={<OverView />} />
              {/* Edit profile */}
              <Route path="profile" element={<Profile />} />
              {/* Order */}
              <Route path="order" element={<Order />} />
              {/* Payment */}
              <Route path="payment" element={<Payment />} />
            </Route>
          </Route>

          {/* (PrivateRoute: need not Auth) */}
          <Route element={<PrivateRouteWrapper authState={false} redirectPath="/account" />} >
            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Register */}
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* No match, redirect to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router >
    </AuthProvider >
  );
}

export default App;
