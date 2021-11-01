import { ADD, DELETE } from './users.actions.js';

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        users: [...state.users, action.userData],
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };

    default:
      return state;
  }
};