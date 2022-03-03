import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Backdrop from '@mui/material/Backdrop';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SideMenu from './SideMenu';
import SearchTab from './searchTab/SearchTab';
import ShoppingCart from './shoppingCart/ShoppingCart';


function Header() {
  // history
  const navigate = useNavigate();

  // Click open and close side menu (on mobile)
  const [menuClick, setMenuClick] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  }

  // Click open search tab
  const [searchIconClick, setSearchIconClick] = useState(false);
  const handleSearchIconClick = () => {
    setSearchIconClick(!searchIconClick);
  }

  // Click open shopping cart
  const [cartClick, setCartClick] = useState(false);
  const handleCartClick = () => {
    setCartClick(!cartClick);
  }

  return (
    <div className="border-b border-slate-100 bg-white sticky top-0 h-16 z-30">
      <div className="container flex flex-row items-center h-full px-4">
        {/* hidden ecomponents */}
        {/* Side menu */}
        <SideMenu menuClick={menuClick} closeMenu={handleMenuClick} />
        {/* Search tab */}
        <SearchTab searchIconClick={searchIconClick} closeSearchTab={handleSearchIconClick} />
        {/* Shopping Cart Component */}
        <ShoppingCart cartClick={cartClick} closeCart={handleCartClick} />

        {/* Backdrop component */}
        <Backdrop sx={{ color: '#fff', zIndex: 40 }}
          open={cartClick}
          transitionDuration={700}
          onClick={() => (setCartClick(false))}
        />

        {/* Hamburger button */}
        <div className="flex-1 text-left lg:hidden" >
          <MenuOutlinedIcon onClick={handleMenuClick} />
        </div>

        {/* Logo image */}
        <div className="flex-1 lg:order-first">
          {/* <img className="object-contain h-16 mx-auto lg:mx-0 lg: mr-auto" src='/images/sailboat-logo.png' alt='Sailboat Store' /> */}
          <h1 className="text-base text-center font-bold whitespace-nowrap mr-4 lg:text-2xl lg:text-left">
            <Link to="/">
              Sailboat Store
            </Link>
          </h1>
        </div>

        {/* Right buttons */}
        <div className="flex-1 flex justify-end gap-2">
          {/* Search button */}
          <SearchIcon color="primary" onClick={handleSearchIconClick} />

          {/* Account button */}
          <PersonOutlineOutlinedIcon onClick={() => (navigate("/account"))} />

          {/* Shopping Bag button */}
          <ShoppingBagOutlinedIcon onClick={handleCartClick} />
        </div>
      </div>
    </div>
  )
}

export default Header
