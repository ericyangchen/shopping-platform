import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchItem from './SearchItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

function Search() {
  const navigate = useNavigate();
  // keep track of current search input
  const [searchInput, setSearchInput] = useState("");

  // close search page
  const clickCloseSearch = () => {
    setSearchInput("");
    navigate(-1);
  }

  // fetch results
  const handleSearch = (e) => {
    e.preventDefault();

    // search api with searchInput
    console.log("search: ", searchInput);
  }

  return (
    <div className="wrapper container p-4">
      <div className="w-full flex flex-col justify-center">
        {/* Search input & Close icon */}
        <div className="sticky top-0 flex flex-row justify-between items-center gap-2 ">
          <div className="w-full flex flex-row items-center border-2 border-gray-400 rounded-3xl">
            <button
              onClick={handleSearch}
              disabled={searchInput === "" ? true : false}
            >
              <SearchIcon className="ml-4 custom-css-icon-search" />
            </button>
            <input className="flex-1 h-10 pl-4 py-2 rounded-3xl"
              type="text"
              value={searchInput}
              placeholder="Search Items"
              onChange={(e) => (setSearchInput(e.target.value))}
              onKeyUp={(e) => (e.key === 'Enter' && searchInput !== "" && handleSearch(e))}
            />
          </div>
          <CloseIcon className="text-gray-400 font-bold" onClick={clickCloseSearch} />
        </div>

        {/* Search results */}
        <div>
          <ul className="flex flex-col divide-y items-start">
            {Results.map(item => (
              <li key={item.id}>
                < SearchItem
                  id={item.id}
                  title={item.title}
                  tag={item.tag}
                  src={item.src}
                // closeCart={closeSearchTab}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Search