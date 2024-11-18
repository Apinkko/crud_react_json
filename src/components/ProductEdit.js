import React from "react";
import { useState } from "react";

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };

  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(product.id, formData);
    // console.log(formData);
  };

  const onCancel = (e) => {
    e.preventDefault();
    cancelEdit();
  };

  return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="nama"
            type="text"
            className="edit-input-text"
            placeholder="Nama Product"
            value={nama}
          />
        </div>
        <div className="form-group">
          <input
            name="deskripsi"
            onChange={handleChange}
            type="text"
            className="edit-input-text"
            placeholder="Deskripsi Product"
            value={deskripsi}
          />
        </div>
        <div className="form-group">
          <input
            name="imageURL"
            onChange={handleChange}
            type="text"
            className="edit-input-text"
            placeholder="Image Product"
            value={imageURL}
          />
        </div>
        <input type="submit" className="edit-input-submit save" value="Save" />
        <button onClick={onCancel} className="edit-input-submit cancel">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
