import React from 'react';
import productImg from '../../asset/shop/shop-img-1-2.png';
import './SuggestProductCard.scss';
export default function SuggestProductCard() {
  return (
    <div>
      <div className="suggest-card">
        <div className="suggest-card__wrap">
          <div className="suggest-card__img">
            <img src={productImg} alt="" />
          </div>
          <div className="suggest-card__content">
            <p className="suggest-card__content-name">Rye Islay Double</p>
            <p className="suggest-card__content-price">$59.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
