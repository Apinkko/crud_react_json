import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";
import ProductEdit from "./components/ProductEdit";

function App() {
  const [products, setProducts] = useState(Products);
  const onCreateProduct = (product) => {
    setProducts([
      ...products,
      { id: Math.round(Math.random() * 77777), ...product },
    ]);
  };
  const onDeleteProduct = (id) => {
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };
  const onEditProduct = (id, data) => {
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      } else {
        return prod;
      }
    });
    setProducts(updatedProducts);
    // console.log(products);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate propsOncreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
