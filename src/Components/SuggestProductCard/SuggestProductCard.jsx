import './SuggestProductCard.scss';

import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Productdetail from '../ProductDetail/ProductDetail';

export default function SuggestProductCard({ product }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="suggest-card">
        <div
          className="suggest-card__wrap"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <div className="suggest-card__img">
            <img src={`${process.env.REACT_APP_API}/${product.image_url}`} alt="" />
          </div>
          <div className="suggest-card__content">
            <p className="suggest-card__content-name">{product.name}</p>
            <p className="suggest-card__content-price">${product.price.toLocaleString()}</p>
          </div>
        </div>
        {openModal && (
          <Modal children={<Productdetail product={product} setOpenModal={setOpenModal} />} />
        )}
      </div>
    </div>
  );
}
