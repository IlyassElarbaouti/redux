import { SET_USER, REMOVE_USER } from './user.actions.js';

export const userReducer = (state = null, {type,payload}) => {
  switch (type) {
    case SET_USER: {
      return {
        ...state,
        ...payload.userData,
      };
    }
    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};