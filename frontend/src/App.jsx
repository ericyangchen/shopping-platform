import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// utility component
import Header from './components/navigation/Header';
import PrivateRouteWrapper from './components/auth/PrivateRouteWrapper';

// pages
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Product from './pages/product/Product';
import Account from './pages/account/Account';
import OverView from './pages/account/OverView';
import EditProfile from './pages/account/EditProfile';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Checkout from './pages/checkout/Checkout';


function App() {
  return (
    <div>
      <BrowserRouter>
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
              <Route path="profile" element={<EditProfile />} />
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
          <Route path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;
