import { TextField } from '@mui/material';
import React, { Fragment } from 'react';
import { FaTrash } from 'react-icons/fa';
import productImg from '../../asset/shop/shop-img-1-2.png';
import './CartItem.scss';
const CartItem = () => {
  return (
    <Fragment>
      <div className="cart-item__wrap">
        <div className="cart-item__img">
          <img src={productImg} alt="" />
        </div>
        <div className="cart-item__infor">
          <div className="cart-item__content">
            <div className="cart-item__content-name">Rye Islay Double</div>
            <div className="cart-item__content-quantity">
              Quantity:{' '}
              <TextField
                style={{ width: '100px', textAlign: 'center' }}
                type="number"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className="cart-item__content-price">$59.00</div>
          </div>

          <div className="cart-item__sub-total">
            <div className="cart-item__sub-total-price">$500</div>
            <div className="car-tiem__delete">
              <FaTrash />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
