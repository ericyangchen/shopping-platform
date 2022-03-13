import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';

import { useAuth } from '../../contexts/AuthContext';

function OverView() {
  const { user } = useAuth();

  const handleSignOutClick = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('Firebase Sign out successfully')
      })
      .catch((error) => {
        console.log('Firebase Sign out failed: ', error)
      })
  }


  return (
    <div>
      OverView
      <button className="p-2 bg-black text-white text-sm rounded-md "
        onClick={handleSignOutClick}>Sign out</button
      >
      <p>---------Show the user account info---------</p>
      {user?.email}
    </div>
  )
}

export default OverView