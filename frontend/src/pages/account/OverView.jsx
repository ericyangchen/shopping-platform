import { useAuth } from '../../contexts/AuthContext';

function OverView() {
  const { user, logout } = useAuth();

  // logout button click
  const handleLogOutClick = async (e) => {
    e.preventDefault();
    try {
      await logout();
      // go to login page
    } catch (error) {
      console.log('Firebase Sign out failed: ', error);
    }
  }

  return (
    <div>
      <p>{user?.email}</p>

      <button className="p-2 bg-black text-white text-sm rounded-md "
        onClick={handleLogOutClick}
      >
        Sign out
      </button>
    </div>
  )
}

export default OverView