import './Cart.scss';

import React, { Fragment, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import useOnClickOutside from '../../hook/useClickOutside';
import CartItem from '../CartItem/CartItem';
import { selectProducts } from '../../redux/features/productsSlice';
import { createOrder, getCartAction } from '../../redux/actions/productAction';

export default function Cart({ active, setActive }) {
  const cartRef = useRef();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectProducts);
  useOnClickOutside(cartRef, () => {
    setActive('');
  });
  let total = 0;
  const renderCartItem = () => {
    return cartItems.map((cartItem) => {
      total += cartItem.quantity * cartItem.product.price;
      return <CartItem item={cartItem} key={cartItem.name} />;
    });
  };

  return (
    <Fragment>
      <div ref={cartRef} className={`cart__wrap ${active}`}>
        <div className="cart">
          <div
            className="cart-close"
            onClick={() => {
              setActive('');
            }}
          >
            <FaTimes />
          </div>
          <div className="cart-header">
            <h4>YOUR CART</h4>
          </div>
          <div className="cart-list">{renderCartItem()}</div>
          <div className="cart-checkout">
            <div className="cart-checkout__total">Total:</div>
            <div className="cart-checkout__price">${total}</div>
          </div>
          <button
            className="cart-checkout__btn btn"
            onClick={() => {
              dispatch(createOrder());
              dispatch(getCartAction());
              setActive('');
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </Fragment>
  );
}
