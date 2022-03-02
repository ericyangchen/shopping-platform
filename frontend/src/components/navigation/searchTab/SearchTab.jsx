import './SearchTab.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchItem from './SearchItem';

const Results = [
  {
    'id': '00000001',
    'title': 'NIKE COURT BOROUGH 大童款 全白',
    'tag': [
      {
        'name': '預購',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
    ],
    'src': '/images/products/p1-1.jpeg',
  },
  {
    'id': '00000002',
    'title': 'NEW BALANCE 5740',
    'tag': [],
    'src': '/images/products/p2-1.jpeg',
  },
  {
    'id': '00000003',
    'title': 'NEW BALANCE 5740 新平衡 5740 超新平衡 測試用測試用測試用測試用',
    'tag': [
      {
        'name': '新配色',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
      {
        'name': '現貨供應',
        'bg': 'bg-sky-400',
        'color': 'text-white',
      },
    ],
    'src': '/images/products/p3-1.jpeg',
  },
  {
    'id': '00000004',
    'title': 'NEW BALANCE 327 白絲綢',
    'tag': [],
    'src': '/images/products/p4-1.jpeg',
  },
  {
    'id': '00000005',
    'title': 'CONVERSE 1970 黑色 低筒',
    'tag': [
      {
        'name': '下週到貨',
        'bg': 'bg-amber-400',
        'color': 'text-black',
      },
    ],
    'src': '/images/products/p5-1.jpeg',
  },
  {
    'id': '00000006',
    'title': 'NIKE WAFFLE TRAINER2',
    'tag': [],
    'src': '/images/products/p6-1.jpeg',
  },
  {
    'id': '00000007',
    'title': 'WHO A U 羊羔毛/尼龍面 雙面外套',
    'tag': [],
    'src': '/images/products/p7-1.jpeg',
  },
]

function SearchTab({ searchIconClick, closeSearchTab }) {
  // fetch results

  return (
    <div className={"fixed z-50 left-0 w-full h-full bg-white transition-all duration-500 delay-50 "
      + (searchIconClick === true ? " bottom-0" : " bottom-full")
    }>
      <div className="w-full flex flex-col justify-center">
        {/* top div */}
        <div className="border-b border-gray-300">
          {/* Search input & Close icon */}
          <div className="container px-4 h-16 flex flex-row justify-between items-center gap-2 ">
            <div className="w-full flex flex-row items-center border border-gray-300 rounded-3xl">
              <SearchIcon className="custom-css-icon-search ml-4" />
              <input className="flex-1 h-10 pl-4 py-2 rounded-3xl"
                type="text"
                placeholder="Search Items"
              />
            </div>
            <CloseIcon onClick={closeSearchTab} />
          </div>
        </div>

        {/* Search results */}
        <div className="container">
          <ul className="custom-css-ul-height flex flex-col px-8 divide-y overflow-y-scroll">
            {Results.map(item => (
              <li key={item.id}>
                < SearchItem
                  id={item.id}
                  title={item.title}
                  tag={item.tag}
                  src={item.src}
                  closeCart={closeSearchTab}
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div >
  )
}

export default SearchTab