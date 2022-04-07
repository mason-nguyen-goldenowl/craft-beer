import './CartItem.scss';

import React, { Fragment, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import {
  decreasingCartItem,
  deleteCartItem,
  getCartAction,
  increasingCartItem
} from '../../redux/actions/productAction';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="cart-item__wrap">
        <div className="cart-item__img">
          <img src={`${process.env.REACT_APP_API}/${item.product.image_url}`} alt="" />
        </div>
        <div className="cart-item__infor">
          <div className="cart-item__content">
            <div className="cart-item__content-name">{item.product.name}</div>
            <div className="cart-item__content-quantity">
              Quantity:{' '}
              <span
                className="change-quantity"
                onClick={() => {
                  dispatch(decreasingCartItem(item.id));
                  dispatch(getCartAction());
                }}
              >
                -
              </span>{' '}
              {item.quantity}
              <span
                className="change-quantity"
                onClick={() => {
                  dispatch(increasingCartItem(item.id));
                  dispatch(getCartAction());
                }}
              >
                +
              </span>
            </div>
            <div className="cart-item__content-price">${item.product.price}</div>
          </div>

          <div className="cart-item__sub-total">
            <div className="cart-item__sub-total-price">${item.product.price * item.quantity}</div>
            <div
              className="cart-item__delete"
              onClick={() => {
                dispatch(deleteCartItem(item.id));
                dispatch(getCartAction());
              }}
            >
              <FaTrash />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
