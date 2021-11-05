import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

const initValue = {
  products: [],
};

export const cartReducer = (state = initValue, {type,payload}) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload.productData],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== payload.id),
      };
    default:
      return state;
  }
};