import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const NavCategoryList = [
  {
    'id': '00000001',
    'title': '新品',
    'link': '/new-arrivals',
  },
  {
    'id': '00000002',
    'title': '男裝',
    'link': '/men',
  },
  {
    'id': '00000003',
    'title': '女裝',
    'link': '/women',
  },
  {
    'id': '00000004',
    'title': '男鞋',
    'link': '/men-shoes',
  },
  {
    'id': '00000005',
    'title': '女鞋',
    'link': '/women-shoes',
  },
  {
    'id': '00000006',
    'title': '飾品',
    'link': '/accessories',
  },
  {
    'id': '00000007',
    'title': '特價1',
    'link': '/on-sale',
  },
  {
    'id': '00000008',
    'title': '特價2',
    'link': '/on-sale',
  },
  {
    'id': '00000009',
    'title': '特價3',
    'link': '/on-sale',
  },
  // {
  //   'id': '000000209',
  //   'title': '特價4',
  //   'link': '/on-sale',
  // },
  // {
  //   'id': '0000002029',
  //   'title': '特價5',
  //   'link': '/on-sale',
  // },
  // {
  //   'id': '0000d002029',
  //   'title': '特價6',
  //   'link': '/on-sale',
  // },
  // {
  //   'id': '00000d02029',
  //   'title': '特價7',
  //   'link': '/on-sale',
  // },
]

function SideMenu({ menuClick, closeMenu }) {
  return (
    <div className={
      "fixed top-0 -left-full w-full h-full bg-white transition-all duration-500 delay-50"
      + (menuClick && ' left-0')
      + " lg:relative lg:left-0 lg:w-fit lg:h-fit lg:flex lg:flex-row lg:border-none"
    }>
      <div className="flex flex-col justify-center lg:block ">
        {/* Close button & Logo */}
        <div className="border-b border-slate-100 lg:border-none">
          <div className="container flex flex-row items-center h-16 lg:h-fit lg:block">
            <button className={"text-left ml-4 lg:hidden"}>
              <CloseIcon onClick={closeMenu} />
            </button>
            {/* <img className="object-contain h-16 mx-auto lg:mx-0 lg: mr-auto" src='/images/sailboat-logo.png' alt='Sailboat Store' /> */}
            <h1 className="flex-1 text-xl text-center mr-10 font-bold lg:hidden">
              <Link to="/">
                Sailboat Store
              </Link>
            </h1>
          </div>
        </div>

        {/* Category list */}
        <div className="container">
          <ul className="flex flex-col px-4 lg:px-0 lg:flex-row lg:gap-8">
            {NavCategoryList.map(item => (
              <Link to={item.link} key={item.id}>
                <div className="flex justify-between items-center hover:bg-slate-100 rounded-md"
                  onClick={closeMenu}
                >
                  <li className="pl-4 py-4 font-medium lg:py-2 lg:px-2">
                    {item.title}
                  </li>
                  <button className="lg:hidden">
                    <NavigateNextIcon fontSize="small" />
                  </button>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default SideMenu