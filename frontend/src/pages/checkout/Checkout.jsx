import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

import ShoppingCartItem from '../../components/navigation/shoppingCart/ShoppingCartItem';

const ShoppingCartItems = [
  {
    'id': '00000001',
    'title': 'NIKE COURT BOROUGH 大童款 全白 NIKE COURT BOROUGH 大童款 全白',
    'price': '1928',
    'size': 'X-SMALL',
    'quantity': 1,
    'src': '/images/products/p1-1.jpeg',
  },
  {
    'id': '00000001',
    'title': 'NIKE COURT BOROUGH 大童款 全白',
    'price': '1928',
    'size': 'MEDIUM',
    'quantity': 2,
    'src': '/images/products/p1-1.jpeg',
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740',
    'price': '3781',
    'size': 'SMALL',
    'quantity': 3,
    'src': '/images/products/p2-1.jpeg',
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740 NEW BALANCE 5740 NEW BALANCE 5740 NEW BALANCE 5740 NEW BALANCE 5740',
    'price': '3781',
    'size': 'X-SMALL',
    'quantity': 3,
    'src': '/images/products/p2-1.jpeg',
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740',
    'price': '3781',
    'size': 'MEDIUM',
    'quantity': 3,
    'src': '/images/products/p2-1.jpeg',
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740',
    'price': '3781',
    'size': 'LARGE',
    'quantity': 3,
    'src': '/images/products/p2-1.jpeg',
  },
]

const CheckoutInfo = {
  'name': 'Eric Chen',
  'shippingAddress': ['Lane 181, Section 1, Zhuangjing Rd', 'No. 10-15F-4', 'Taoyuan District', 'Taoyuan County', '33044', 'Taiwan']
}

function Checkout() {
  // fot toggling
  const [orderSummaryToggle, setOrderSummaryToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);

  // fetch info

  return (
    <div className="container p-4">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
        {/* Order Summary & Items */}
        <div className="flex flex-col justify-center items-center border border-gray-300 rounded lg:col-start-2 lg:row-start-1 lg:border-0 lg:justify-start ">
          {/* Order Summary and close button */}
          <div className="w-full flex flex-row justify-between items-center "
            onClick={() => (setOrderSummaryToggle(!orderSummaryToggle))}
          >
            <h1 className="flex-1 p-4 text-lg font-bold ">
              Order Summary
            </h1>
            <button className="mr-4 lg:hidden "
            >
              {orderSummaryToggle === true ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </button>
          </div>

          {/* Item List */}
          <div className={"w-full flex flex-col border-t border-gray-300 transition-all duration-500 delay-150 lg:border-0 "
            + (!orderSummaryToggle && " h-0 overflow-hidden opacity-0 lg:h-fit lg:opacity-1 lg:transition-none")
          }>
            <ul className="flex flex-col px-4 divide-y">
              {ShoppingCartItems.map(item => (
                <li key={item.id.toString() + item.size}>
                  < ShoppingCartItem
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    size={item.size}
                    quantity={item.quantity}
                    src={item.src}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outer div for desktop layout */}
        <div className="lg:flex lg:flex-col lg:gap-4 lg:col-start-1 lg:row-start-1 ">
          {/* Shipping info */}
          <div className="flex flex-col justify-center items-center border border-gray-300 rounded ">
            {/* Shipping & close button */}
            <div className="w-full flex flex-row justify-between items-center "
              onClick={() => (setShippingToggle(!shippingToggle))}
            >
              <h1 className="flex-1 p-4 text-lg font-bold">
                Shipping
              </h1>
              <button className="mr-4 ">
                {shippingToggle === true ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </button>
            </div>

            {/* Shipping info */}
            <div className={"w-full flex flex-col gap-1 border-t border-gray-300 transition-all duration-500 delay-150 "
              + (!shippingToggle && " h-0 overflow-hidden opacity-0 ")
            }>
              <p className="px-4 pt-4">{CheckoutInfo.name}</p>
              <div className="w-full px-4 pb-4 flex flex-col gap-1">
                {CheckoutInfo.shippingAddress.map(addressInfo => (
                  <p>{addressInfo}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col justify-center items-center border border-gray-300 rounded ">
            {/* Shipping & close button */}
            <div className="w-full flex flex-row justify-between items-center "
              onClick={() => (setPaymentToggle(!paymentToggle))}
            >
              <h1 className="flex-1 p-4 text-lg font-bold">
                Payment
              </h1>
              <button className="mr-4 ">
                {paymentToggle === true ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </button>
            </div>

            {/* Payment */}
            <div className={"w-full flex flex-col gap-1 border-t border-gray-300 transition-all duration-500 delay-150 "
              + (!paymentToggle && " h-0 overflow-hidden opacity-0 ")
            }>
              <p className="p-4">Payment section</p>
            </div>
          </div>

          {/* Total */}
          <div className="mt-4 flex flex-col justify-center gap-2 ">
            <div className="flex flex-row justify-between items-center">
              <p>Subtotal:</p>
              <p>$ 1000000</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p>Shipping:</p>
              <p>$ 700</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold">$ 10007000</p>
            </div>
          </div>

          {/* Place Order */}
          <div className="w-full mt-4 lg:col-start-1 ">
            <button className={"w-full p-4 h-14 rounded-xl text-center font-extrabold bg-gray-800 text-white "}
              onClick={() => (console.log("Place order"))}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout