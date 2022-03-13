export const ACTIONS = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return {
        ...state,
        user: action.payload,
      }
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        user: null,
      }
    default:
      return state;
  } 
}