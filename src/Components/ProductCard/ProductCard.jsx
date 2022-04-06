import React from 'react';
import productImg from '../../asset/shop/shop-img-1-2.png';

import { FaShoppingBasket, FaEye } from 'react-icons/fa';
import './ProductCard.scss';
export default function ProductCard() {
  return (
    <div>
      <div className="product-card">
        <div className="product-card__wrap">
          <div className="product-card__img">
            <img src={productImg} alt="" />
          </div>
          <div className="product-card__content">
            <p className="product-card__content-name">Rye Islay Double</p>
            <p className="product-card__content-price">$59.00</p>
          </div>

          <div className="overlay">
            <div className="product-card__feature">
              <div className="product-card__feature-item">
                <FaShoppingBasket />
              </div>
              <div className="product-card__feature-item">
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
