import './ProductDetail.scss';

import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import useOnClickOutside from '../../hook/useClickOutside';
import { addToCart } from '../../redux/actions/productAction';

const Productdetail = ({ product, setOpenModal }) => {
  const dispatch = useDispatch();
  const productDetailRef = useRef();
  useOnClickOutside(productDetailRef, () => {
    setOpenModal(false);
  });
  let isDisable = false;
  if (product.in_stock === 0) {
    isDisable = true;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="product-detail__wrap"
      ref={productDetailRef}
    >
      <div className="product-detail">
        <div className="product-detail__img">
          <img src={`${process.env.REACT_APP_API}/${product.image_url}`} alt="" />
        </div>
        <div className="product-detail__content__wrap">
          <div className="product-detail__content">
            <div className="product-detail__content-name">
              <h2>{product.name}</h2>
            </div>
            <div className="product-detail__content-price">
              {isDisable ? 'Sold out' : `$${product.price.toLocaleString()}`}
            </div>
            <div className="product-detail__content-description">{product.description}</div>
          </div>

          <div className="product-detail__feature">
            <button
              className="btn"
              disabled={isDisable}
              onClick={() => {
                dispatch(addToCart(product.id));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        className="product-detail__close"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        <FaTimes />
      </div>
    </motion.div>
  );
};

export default Productdetail;
