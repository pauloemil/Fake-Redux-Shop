import { ActionTypes } from "../constants/ActionTypes";

const init_state = {
  products: [],
};
export const productReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
