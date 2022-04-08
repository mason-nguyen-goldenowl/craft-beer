import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../hook/useClickOutside';
import { addToCart, getCartAction } from '../../redux/actions/productAction';
import './ProductDetail.scss';
const Productdetail = ({ product, setOpenModal }) => {
  const dispatch = useDispatch();
  const productDetailRef = useRef();
  useOnClickOutside(productDetailRef, () => {
    setOpenModal(false);
  });
  return (
    <div className="product-detail__wrap" ref={productDetailRef}>
      <div className="product-detail">
        <div className="product-detail__img">
          <img src={`${process.env.REACT_APP_API}/${product.image_url}`} alt="" />
        </div>
        <div className="product-detail__content__wrap">
          <div className="product-detail__content">
            <div className="product-detail__content-name">
              <h2>{product.name}</h2>
            </div>
            <div className="product-detail__content-price">${product.price.toLocaleString()}</div>
            <div className="product-detail__content-description">{product.description}</div>
          </div>

          <div className="product-detail__feature">
            <button
              className="btn"
              disabled={product.sold_out}
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
    </div>
  );
};

export default Productdetail;
