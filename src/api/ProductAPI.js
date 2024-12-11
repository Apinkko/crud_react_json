import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:3005/products");
  return response;
};
export const createProduct = async (product) => {
  const response = await axios.post("http://localhost:3005/products", product);
  return response;
};
export const editProduct = async (id, data) => {
  const response = await axios.put(
    `http://localhost:3005/products/${id}`,
    data
  );
  return response;
};
export const deleteProduct = async (id) => {
  const response = await axios.delete(`http://localhost:3005/products/${id}`);
  return response;
};
