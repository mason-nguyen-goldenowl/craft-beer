import React from 'react';

import './HomeHeader.scss';

export default function HomeHeader() {
  return (
    <div className="home-header__wrap">
      <div className="home-header">
        <div className="home-header__content container">
          <div className="home-header__content-text">
            <span className="home-header__text">Creafted with love</span>
            <h3 className="home-header__brand">Mason brewery</h3>
            <button className="btn btn-outline">EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
