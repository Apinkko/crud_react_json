import React, { useContext } from "react";
import { useState } from "react";
import ProductContext from "../context/products";

const ProductCreate = () => {
  const { onCreateProduct } = useContext(ProductContext);
  // console.log(propsOncreateProduct);
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;

  const handleShow = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
    <div className=""></div>;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button className="edit-input-submit add-toggle" onClick={handleShow}>
          {showForm ? "Close" : "Add Product"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              placeholder="Nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              placeholder="Deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              placeholder="Image Product"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
