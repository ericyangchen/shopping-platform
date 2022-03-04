import './ShoppingCart.css';
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartItem from "./ShoppingCartItem";

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


function ShoppingCart({ cartClick, closeCart }) {
  const navigate = useNavigate();
  // Context API

  return (
    <div className={"fixed z-50 top-0 w-22/25 h-full bg-white transition-all duration-500 delay-50 md:w-1/2 lg:w-2/5 xl:w-1/3 "
      + (cartClick === true ? " right-0" : " -right-full")
    }>
      <div className="flex flex-col justify-center">
        {/* Shopping Cart Text */}
        <div className="border-b border-gray-300">
          <div className="container h-16 flex justify-center items-center">
            <h1 className="text-lg font-bold">
              Your Cart
            </h1>
          </div>
        </div>

        {/* Shopping Cart Items */}
        <div className="container custom-css-div-cart-items overflow-y-scroll">
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
                  closeCart={closeCart}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Empty Cart Message */}
        <div className={"container pt-16 text-center "
          + (ShoppingCartItems.length && " hidden")
        }>
          <p>
            Your shopping cart is empty.
          </p>
          <div className="mt-4 inline-block">
            View our
          </div>
          <span> </span>
          <div className="mt-4 inline-block text-blue-700"
            onClick={closeCart}
          >
            <Link to="/category/new-arrivals">
              latest items.
            </Link>
          </div>
        </div>

        {/* Total Price info & Checkout button */}
        <div className="w-22/25 h-80 p-4 fixed bottom-0 bg-white border-t border-gray-300 flex flex-col justify-between gap-4 overflow-scroll md:w-1/2 lg:w-2/5 xl:w-1/3 ">
          {/* Free shipping info */}
          <div className="w-full p-4 bg-gray-100 rounded text-sm text-center text-black ">
            Spend $ 1000 more for <span className="font-bold">FREE SHIPPING</span>.
          </div>

          {/* Total Price info */}
          <div className="mb-4 flex flex-col gap-4">
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

          {/* Checkout button */}
          <button className={"w-full p-4 h-14 rounded-xl text-center font-extrabold bg-gray-800 text-white "
            + (!ShoppingCartItems.length && " opacity-30 ")
          }
            disabled={!ShoppingCartItems.length}
            onClick={() => { closeCart(); navigate("/checkout"); }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div >
  )
}

export default ShoppingCart