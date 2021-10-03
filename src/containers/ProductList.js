import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";

function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        //
        dispatch(setProducts(resp.data));
      })
      .catch((error) => console.log("Error: ", error));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
