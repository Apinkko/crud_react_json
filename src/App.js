import "./App.css";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import ProductCreate from "./components/ProductCreate";
import axios from "axios";
import ProductEdit from "./components/ProductEdit";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:3005/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const onCreateProduct = async (product) => {
    const response = await axios.post(
      "http://localhost:3005/products",
      product
    );

    setProducts([...products, response.data]);
    console.log(...products);
  };
  const onDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:3005/products/${id}`);
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };
  const onEditProduct = async (id, data) => {
    const response = await axios.put(
      `http://localhost:3005/products/${id}`,
      data
    );
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
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
