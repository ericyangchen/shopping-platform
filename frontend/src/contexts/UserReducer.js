export const ACTIONS = {
  ADD_UID: 'ADD_UID',
  ADD_FIRSTNAME: 'ADD_FIRSTNAME',
  ADD_LASTNAME: 'ADD_LASTNAME',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_UID:
      return {
        ...state,
        uid: action.payload,
      }
    case ACTIONS.ADD_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload,
      }
    case ACTIONS.ADD_LASTNAME:
      return {
        ...state,
        lastName: action.payload,
      }
    default:
      return state;
  } 
}