import { ActionTypes } from "../constants/ActionTypes";
import axios from "../../APIs/FakeStoreApi";

//new
export const fetchProducts = () => (dispatch) => {
  axios
    .get("/products")
    .then((resp) =>
      dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: resp.data })
    )
    .catch((err) => console.log(err));
};

// old
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProduct = (id) => (dispatch) => {
  axios
    .get(`/products/${id}`)
    .then((resp) =>
      dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: resp.data })
    )
    .catch((err) => console.log(err));
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
