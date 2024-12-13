import { createContext, useState } from "react";
import {
  createProduct,
  deleteProduct,
  editProduct,
  fetchProducts,
} from "../api/ProductAPI";

const ProductContext = createContext();

export function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const response = await fetchProducts();
    setProducts(response.data);
  };
  const onCreateProduct = async (product) => {
    const response = await createProduct(product);

    setProducts([...products, response.data]);
  };
  const onDeleteProduct = async (id) => {
    await deleteProduct(id);
    const updatedProduct = products.filter((prod) => {
      return prod.id != id;
    });
    setProducts(updatedProduct);
  };
  const onEditProduct = async (id, data) => {
    const response = await editProduct(id, data);
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...response.data };
      } else {
        return prod;
      }
    });
    setProducts(updatedProducts);
  };

  const valueToShare = {
    products,
    fetchProduct,
    onCreateProduct,
    onEditProduct,
    onDeleteProduct,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
