import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const PrivateRouteWrapper = ({ authState, redirectPath }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Require authState == true but user is not authenticated
  if (authState && !user) {
    console.log("Account => redirect to Login (not auth)")
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location }}
        replace={true}
      />
    )
  }
  // Require authState == false but user is authenticated
  else if (!authState && user) {
    console.log("Login/Register => redirect to Account (authed)")
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location }}
        replace={true}
      />
    )
  }
  // no problem
  else {
    return (<Outlet />);
  }
}

export default PrivateRouteWrapper;