import { Link } from 'react-router-dom';


function SearchItem({ id, title, tag, src, closeSearchTab }) {
  return (
    <div className="my-8 flex flex-row gap-8">
      {/* Image */}
      <div className="w-1/4"
        onClick={closeSearchTab}
      >
        <Link to={"/products/" + id}>
          <img className="w-full object-contain rounded-md"
            src={src}
            alt={title}
          />
        </Link>
      </div>

      {/* Item title & Tag */}
      <div className="flex-1 flex flex-col justify-center gap-2">
        {/* Tags */}
        {tag.length !== 0 &&
          <div className="flex flex-row gap-2">
            {tag.map(tagItem => (
              <span key={tagItem?.name}
                className={"rounded text-sm px-2 "
                  + tagItem?.bg + " " + tagItem?.color}
              >
                {tagItem?.name}
              </span>
            ))}
          </div>
        }
        <p className="font-medium">{title}</p>
      </div>

    </div>
  )
}

export default SearchItem