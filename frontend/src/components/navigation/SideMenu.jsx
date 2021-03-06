import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CategoryNames from '../../constants/CategoryNames';


function SideMenu({ menuClick, closeMenu }) {
  return (
    <div className={
      "fixed top-0 w-full h-screen bg-white transition-all duration-500 delay-50 z-40 "
      + (menuClick === true ? " left-0" : " -left-full")
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
            {Object.keys(CategoryNames).map((key, index) => (
              <Link to={"/category/" + key} key={key + index}>
                <div className="flex justify-between items-center hover:bg-slate-100 rounded-md"
                  onClick={closeMenu}
                >
                  <li className="pl-4 py-4 font-medium lg:py-2 lg:px-2">
                    {CategoryNames[key]}
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