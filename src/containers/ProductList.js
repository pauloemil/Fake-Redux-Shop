import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/ProductActions";

function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductList;
