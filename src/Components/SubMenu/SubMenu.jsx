import React from 'react';
import { Link } from 'react-router-dom';

import subMenuLogo from '../../asset/header/h5-logo-menu.png';

import './SubMenu.scss';

export default function SubMenu(props) {
  return (
    <div className={`sub-menu__wrap ${props.active}`}>
      <div className="sub-menu">
        <div className="sub-menu__img">
          <img src={subMenuLogo} alt="" />
        </div>
        <div className="sub-menu__list-item__wrap">
          <ul className="sub-menu__list-item">
            <li className="sub-menu__item active">Home</li>
            <li className="sub-menu__item">Page</li>
            <Link to="/shop">
              <li className="sub-menu__item">Shop</li>
            </Link>
            <li className="sub-menu__item">Blog</li>
            <li className="sub-menu__item">Landing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
