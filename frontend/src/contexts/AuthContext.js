import { createContext, useContext, useEffect, useReducer } from 'react';
import { reducer, ACTIONS } from './AuthReducer';

import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => (useContext(AuthContext));

export const AuthProvider = ({ children }) => {
  // state for auth
  const initialState = {
    user: null,
  }

  // listen for auth state changes (sign in & out) => addUser & deleteUser
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch({
          type: ACTIONS.ADD_USER,
          payload: currentUser,
        })
        console.log("signin user ", currentUser); 
      } else {
        dispatch({
          type: ACTIONS.DELETE_USER,
        })
        console.log("signout user "); 
      }
    });
    // return unsubscribe();
  }, []);

  // initialize reducer state and dispatch func.
  const [state, dispatch] = useReducer(reducer, initialState);

  // functions to be used
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logout = () => {
    return signOut(auth);
  }
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  const value = {
    user: state.user,
    signup,
    login,
    logout,
    resetPassword,
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
