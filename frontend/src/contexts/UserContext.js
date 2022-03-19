import { createContext, useContext, useReducer } from 'react';
import { reducer, ACTIONS } from './UserReducer';

const UserContext = createContext();

export const useUser = () => (useContext(UserContext));

export const UserProvider = ({ children }) => {
  const initialState = {
    uid: null,
    firstName: null,
    lastName: null,
    email: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState);


  const value = {
    uid: state.uid,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
