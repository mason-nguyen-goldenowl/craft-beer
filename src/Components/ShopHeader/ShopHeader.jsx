import './ShopHeader.scss';

import { motion } from 'framer-motion';
import React, { Fragment, useEffect, useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../asset/shop/h1-logo-img-1.png';
import { logOutAction } from '../../redux/actions/usersAction';
import { selectUsers } from '../../redux/features/userSlice';
import Cart from '../Cart/Cart';
import ShopHeaderSub from '../ShopHeaderSub/ShopHeaderSub';
import { selectProducts } from '../../redux/features/productsSlice';

export default function ShopHeader({ setIsLogged }) {
  const [subMenuActive, setSubMenuActive] = useState('');
  const [cartActive, setCartActive] = useState('');
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector(selectProducts);

  const { isLoggedSusscess, email } = useSelector(selectUsers);
  const onClickActiveCart = () => {
    setCartActive('active');
  };
  const onClickActiveSubMenu = () => {
    setSubMenuActive('active');
  };

  const onClickLogOut = () => {
    setIsLogged(false);
    dispatch(logOutAction());
  };

  return (
    <Fragment>
      <ShopHeaderSub setActive={setSubMenuActive} active={subMenuActive} />

      <Cart active={cartActive} setActive={setCartActive} />
      <div className="shop-header__wrap">
        <div className="shop-header__nav">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="shop-header__nav-menu"
          >
            <ul>
              <li className="nav__item">
                <Link to="/">
                  <span className="nav__item-content">Home</span>{' '}
                </Link>
              </li>

              <li className="nav__item">
                <span className="nav__item-content">Shop</span>
              </li>
              <li className="nav__item" onClick={onClickActiveSubMenu}>
                <span className="nav__item-content">Contact</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ translateY: -200 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1.5 }}
            className="shop-header__nav-logo"
          >
            <img src={logo} alt="" />
          </motion.div>
          <motion.div
            className="shop-header__nav-icon"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <ul>
              {isLoggedSusscess ? (
                <li className="acount">
                  <span className="email">{email} </span>
                  <span className="logout acount__btn" onClick={onClickLogOut}>
                    Log out
                  </span>
                </li>
              ) : (
                <li className="acount">
                  <Link to="/login" className="acount__btn">
                    Login
                  </Link>
                  /
                  <Link to="/signup" className="acount__btn">
                    SignUp
                  </Link>
                </li>
              )}

              <li className="nav__icon basket" onClick={onClickActiveCart}>
                <FaShoppingBasket />
                <span className="total-quantity">{totalQuantity}</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="shop-header__content"
        >
          <h1 className="shop-header__content-text">MASON LIQUOR</h1>
        </motion.div>
      </div>
    </Fragment>
  );
}
