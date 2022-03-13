import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer, ACTIONS } from './AuthReducer';

import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const useAuth = () => (useContext(AuthContext));

const AuthProvider = ({ children }) => {
  // state for auth
  const initialState = {
    user: null,
  }

  // listen for auth state changes (sign in & out) => addUser & deleteUser
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        addUser(currentUser);
        console.log("Add user => ", currentUser); 
      } else {
        deleteUser();
        console.log("Delete user "); 
      }
    });
  }, []);

  // initialize reducer state and dispatch func.
  const [state, dispatch] = useReducer(reducer, initialState);

  // functions to be used
  const addUser = (user) => {
    dispatch({
      type: ACTIONS.ADD_USER,
      payload: user,
    })
  }
  const deleteUser = () => {
    dispatch({
      type: ACTIONS.DELETE_USER,
    })
  }

  const value = {
    user: state.user,
    addUser,
    deleteUser,
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;