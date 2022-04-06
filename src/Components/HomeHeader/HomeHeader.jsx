import React, { useEffect, useState } from 'react';
import { FaBars, FaMixer } from 'react-icons/fa';

import brand from '../../asset/header/h5-logo-img-1.png';
import SubMenu from '../SubMenu/SubMenu';

import './HomeHeader.scss';

export default function HomeHeader() {
  const [subMenuActive, setSubMenuActive] = useState(false);
  let subMenuClass = '';
  if (subMenuActive) {
    subMenuClass = 'active';
  }
  const onClickActiveSubMenu = () => {
    setSubMenuActive(!subMenuActive);
  };
  useEffect(() => {}, [subMenuClass]);
  return (
    <div className="home-header__wrap">
      <div className={`sub-menu-wrap ${subMenuClass}  `}>
        <SubMenu active={subMenuClass} />
      </div>
      <div className="home-header">
        <div className="home-header__content container">
          <div className="home-header__content-text">
            <span className="home-header__text">Creafted with love</span>
            <h3 className="home-header__brand">Mason brewery</h3>
            <button className="btn btn-outline">EXPLORE</button>
          </div>
        </div>
        <span className="home-header__menu-btn" onClick={onClickActiveSubMenu}>
          {subMenuActive ? <FaMixer /> : <FaBars />}
        </span>
        <div className="home-header__brand-img">
          <img src={brand} alt="..." />
        </div>
      </div>
    </div>
  );
}
