import { Link } from 'react-router-dom';

function ProductItem({ id, title, price, tag, src }) {
  return (
    <>
      <Link to={"/products/" + id}>
        <div className="flex flex-col gap-2">
          {/* Product Image */}
          <div className="">
            <img className="rounded"
              src={src[0]}
              alt="product"
            />
          </div>

          {/* Product description */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-row justify-start gap-1 w-full overflow-scroll">
              {tag.map(tagItem => (
                <span key={tagItem?.name}
                  className={"whitespace-nowrap rounded text-xs px-2 "
                    + tagItem?.bg + " " + tagItem?.color}
                >
                  {tagItem?.name}
                </span>
              ))}
            </div>
            <p className="text-xs w-full line-clamp-3 lg:text-sm">{title}</p>
            <p className="text-xs font-bold text-red-600 lg:text-sm">$ {price}</p>
          </div>
        </div >
      </Link>
    </>
  )
}

export default ProductItem