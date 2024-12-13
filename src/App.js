import "./App.css";
import ProductList from "./components/ProductList";
import { useState, useEffect, useContext } from "react";
import ProductCreate from "./components/ProductCreate";
import ProductContext from "./context/products";

function App() {
  const { fetchProduct } = useContext(ProductContext);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate />
      <ProductList />
    </>
  );
}

export default App;
