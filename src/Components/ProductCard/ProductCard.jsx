import React from 'react';
import productImg from '../../asset/shop/shop-img-1-2.png';

import { FaShoppingBasket, FaEye } from 'react-icons/fa';
import './ProductCard.scss';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCartAction } from '../../redux/actions/productAction';
import { useDispatch } from 'react-redux';
export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = Cookies.get('isLogged');
  const refreshToken = Cookies.get('refresh_token');
  const addProductToCart = () => {
    if (!isLogged || !refreshToken) {
      navigate('/login');
    } else {
      const action = addToCart;

      dispatch(action(product.id));
      dispatch(getCartAction());
    }
  };
  return (
    <div>
      <div className="product-card">
        <div className="product-card__wrap">
          <div className="product-card__img">
            <img src={`${process.env.REACT_APP_API}/${product.image_url}`} alt="" />
          </div>
          <div className="product-card__content">
            <p className="product-card__content-name">{product.name}</p>
            <p className="product-card__content-price">${product.price.toLocaleString()}</p>
          </div>

          <div className="overlay">
            <div className="product-card__feature">
              <div className="product-card__feature-item" onClick={addProductToCart}>
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
