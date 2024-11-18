import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;

  const [jumlahProduk, setJumlahProduk] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const kurangProduct = () => {
    setJumlahProduk(jumlahProduk - 1);
  };

  const tambahProduct = () => {
    setJumlahProduk(jumlahProduk + 1);
  };
  // const handleDelete = () => {
  //   onDeleteProduct(id);
  // };

  const handleShow = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, data) => {
    setShowEdit(false);
    onEditProduct(id, data);
  };

  const cancelEdit = () => {
    setShowEdit(false);
  };
  return (
    <div className="card">
      {showEdit ? (
        <ProductEdit
          product={product}
          onEditProduct={handleSubmit}
          cancelEdit={cancelEdit}
        />
      ) : (
        <>
          <div className="edit-delete">
            <AiFillEdit className="icon-edit" onClick={handleShow} />
            <MdDelete
              className="icon-delete"
              onClick={() => {
                onDeleteProduct(id);
              }}
            />
          </div>
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0px 0px",
            }}
            src={imageURL}
            alt=""
          />
          <div className="container">
            <h4>
              <b>{nama}</b>
            </h4>
            <p>{deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              jumlahProduk > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jumlahProduk > 0 ? (
              <>
                <button onClick={kurangProduct} className="button">
                  -
                </button>
                <div>{jumlahProduk}</div>
                <button onClick={tambahProduct} className="button">
                  +
                </button>
              </>
            ) : (
              <div className="keranjang" onClick={tambahProduct}>
                + Keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
