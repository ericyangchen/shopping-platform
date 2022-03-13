import { Outlet, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

const Tabs = [
  {
    name: 'Overview',
    path: '',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'Orders',
    path: '/orders',
  },
  {
    name: 'Payments',
    path: '/payments',
  },
]

function Account() {

  // navigate between tabs
  const [path, setPath] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/account${path}`);
  }, [path, navigate]);

  return (
    <div className="container p-4">
      {/* Tabs */}
      <div className="w-full mb-2 flex items-center gap-2 overflow-scroll text-center">
        {Tabs.map(tab => (
          <button className={"flex-1 p-1 text-sm rounded-3xl "
            + (path === tab.path ? " bg-orange-500 text-white " : " bg-gray-300 text-black "
            )}
            key={tab.name}
            onClick={() => setPath(tab.path)}
          >
            {tab.name}
          </button>
        )
        )}
      </div>

      {/* Tab components */}
      <Outlet />
    </div >
  )
}

export default Account