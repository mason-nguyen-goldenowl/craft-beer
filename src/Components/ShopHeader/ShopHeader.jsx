import './ShopHeader.scss';

import React, { Fragment, useState } from 'react';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';

import logo from '../../asset/shop/h1-logo-img-1.png';
import ShopHeaderSub from '../ShopHeaderSub/ShopHeaderSub';
import Cart from '../Cart/Cart';

export default function ShopHeader() {
  const [subMenuActive, setSubMenuActive] = useState('');
  const [cartActive, setCartActive] = useState('');
  const onClickActiveCart = () => {
    setCartActive('active');
  };
  const onClickActiveSubMenu = () => {
    setSubMenuActive('active');
  };

  return (
    <Fragment>
      <ShopHeaderSub setActive={setSubMenuActive} active={subMenuActive} />
      <Cart active={cartActive} setActive={setCartActive} />
      <div className="shop-header__wrap">
        <div className="shop-header__nav">
          <div className="shop-header__nav-menu">
            <ul>
              <li className="nav__item">
                <span className="nav__item-content">Home</span>{' '}
              </li>
              <li className="nav__item">
                <span className="nav__item-content">Shop</span>
              </li>
              <li className="nav__item" onClick={onClickActiveSubMenu}>
                <span className="nav__item-content">Contact</span>
              </li>
            </ul>
          </div>
          <div className="shop-header__nav-logo">
            <img src={logo} alt="" />
          </div>
          <div className="shop-header__nav-icon">
            <ul>
              <li className="nav__icon">
                <FaSearch />
              </li>
              <li className="nav__icon" onClick={onClickActiveCart}>
                <FaShoppingBasket />
              </li>
            </ul>
          </div>
        </div>
        <div className="shop-header__content">
          <h1 className="shop-header__content-text">MASON BREWERY</h1>
        </div>
      </div>
    </Fragment>
  );
}
