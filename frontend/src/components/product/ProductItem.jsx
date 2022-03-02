import { Link } from 'react-router-dom';

function ProductItem({ id, title, price, tag, src }) {
  return (
    <>
      <Link to={"/products/" + id}>
        <div className="flex flex-col gap-2">
          {/* Product Image */}
          <div className="">
            <img className="rounded-md lg:rounded-lg"
              src={src[0]}
              alt="product"
            />
          </div>

          {/* Product description */}
          <div className="flex flex-col items-start gap-1 lg:gap-2">
            <div className="flex flex-row justify-start gap-2 w-full overflow-scroll">
              {tag.map(tagItem => (
                <span key={tagItem?.name}
                  className={"whitespace-nowrap rounded text-xs px-2 lg:text-sm lg:px-4 "
                    + tagItem?.bg + " " + tagItem?.color}
                >
                  {tagItem?.name}
                </span>
              ))}
            </div>
            <p className="text-sm w-full line-clamp-3 lg:text-base">{title}</p>
            <p className="text-sm font-bold text-red-600 lg:text-base">$ {price}</p>
          </div>
        </div >
      </Link>
    </>
  )
}

export default ProductItem