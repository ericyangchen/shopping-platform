import { Link } from 'react-router-dom';

function ShoppingCartItem({ id, title, price, size, quantity, src, closeCart }) {
  return (
    <div className="my-8 flex flex-row gap-2 md:gap-4">
      {/* Image */}
      <div className="w-1/4 lg:w-32 object-contain"
        onClick={closeCart}
      >
        <Link to={"/products/" + id}>
          <img className="w-full object-contain rounded-md"
            src={src}
            alt={title}
          />
        </Link>
      </div>

      {/* Item Details */}
      <div className="flex-1 flex flex-col justify-center gap-1 lg:gap-2">
        <p className="text-xs font-medium md:text-base lg:text-lg ">{title}</p>
        <p className="text-xs font-semibold text-gray-400">{size}</p>

        {/* Quantity & Price */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <p className="text-sm font-medium">QTY</p>
            <button>-</button>
            <p className="font-semibold">{quantity}</p>
            <button>+</button>
          </div>
          <p className="text-sm font-bold">$ {price * quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartItem