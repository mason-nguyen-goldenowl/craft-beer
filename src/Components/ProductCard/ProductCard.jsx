import './ProductCard.scss';

import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { FaEye, FaShoppingBasket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { addToCart, increasingCartItem } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';
import Modal from '../Modal/Modal';
import Productdetail from '../ProductDetail/ProductDetail';

export default function ProductCard({ product }) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    color: '#dab879',
    iconColor: '#dab879',
    background: '#000',
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectProducts);
  const isLogged = Cookies.get('isLogged');
  const refreshToken = Cookies.get('refresh_token');
  const [openModal, setOpenModal] = useState(false);
  const addProductToCart = () => {
    if (!isLogged || !refreshToken) {
      navigate('/login');
    } else {
      const cartItemExits = cartItems.find((item) => item.product.id === product.id);
      if (cartItemExits) {
        dispatch(increasingCartItem(cartItemExits.id));
        Toast.fire({
          icon: 'success',
          title: 'This product in cart have been increased'
        });
      } else {
        dispatch(addToCart(product.id));
      }
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
            <p className="product-card__content-price">
              {product.sold_out ? (
                <span className="sold-out">Sold out</span>
              ) : (
                `$${product.price.toLocaleString()}`
              )}
            </p>
          </div>

          <div className="overlay">
            <div className="product-card__feature">
              {product.sold_out ? (
                <div></div>
              ) : (
                <div className="product-card__feature-item" onClick={addProductToCart}>
                  <FaShoppingBasket />
                </div>
              )}

              <div
                className="product-card__feature-item"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <FaEye />
              </div>
            </div>
          </div>
        </div>
        {openModal && (
          <Modal children={<Productdetail product={product} setOpenModal={setOpenModal} />} />
        )}
      </div>
    </div>
  );
}
