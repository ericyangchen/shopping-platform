import { Link } from 'react-router-dom';


function SearchItem({ id, title, tag, src, closeSearchTab }) {
  return (
    <div className="my-4 w-full flex flex-row gap-4">
      {/* Image */}
      <div className="shrink-0 w-1/4 lg:w-32 object-contain"
        onClick={closeSearchTab}
      >
        <Link to={"/products/" + id}>
          <img className="w-full object-contain rounded"
            src={src}
            alt={title}
          />
        </Link>
      </div>

      {/* Item title & Tag */}
      <div className="flex-1 flex flex-col gap-1 overflow-hidden">
        {/* Tags */}
        {tag.length !== 0 &&
          <div className="flex flex-row gap-2 overflow-scroll">
            {tag.map(tagItem => (
              <span key={tagItem?.name}
                className={"rounded text-xs px-2 whitespace-nowrap "
                  + tagItem?.bg + " " + tagItem?.color}
              >
                {tagItem?.name}
              </span>
            ))}
          </div>
        }
        <p className="text-sm font-medium">{title}</p>
      </div>

    </div>
  )
}

export default SearchItem