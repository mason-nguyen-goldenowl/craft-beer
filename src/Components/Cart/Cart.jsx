import './Cart.scss';

import React, { Fragment, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import CartItem from '../CartItem/CartItem';
import useOnClickOutside from '../../hook/useClickOutside';

export default function Cart({ active, setActive }) {
  const cartRef = useRef();

  useOnClickOutside(cartRef, () => {
    setActive('');
  });
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
          <div className="cart-list">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="cart-checkout">
            <div className="cart-checkout__total">Total:</div>
            <div className="cart-checkout__price">$500</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
