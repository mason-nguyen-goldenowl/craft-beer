import './SuggestProductCard.scss';

import React from 'react';

export default function SuggestProductCard({ product }) {
  return (
    <div>
      <div className="suggest-card">
        <div className="suggest-card__wrap">
          <div className="suggest-card__img">
            <img src={`${process.env.REACT_APP_API}/${product.image_url}`} alt="" />
          </div>
          <div className="suggest-card__content">
            <p className="suggest-card__content-name">{product.name}</p>
            <p className="suggest-card__content-price">${product.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
