import './ShopHeaderSub.scss';

import React, { Fragment, useRef } from 'react';

import subLogo from '../../asset/shop/h1-sidearea-img-1.png';
import useOnClickOutside from '../../hook/useClickOutside';

function ShopHeaderSub({ active, setActive }) {
  const shopHeaderSubRef = useRef();
  useOnClickOutside(shopHeaderSubRef, () => {
    setActive('');
  });
  return (
    <Fragment>
      <div ref={shopHeaderSubRef} className={`side-area__wrap ${active}`}>
        <div className="side-area">
          <div className="side-area__content">
            <img className="side-area__content-img" src={subLogo} alt="" />
            <h5 className="side-area__content-title">MASON BREWERY </h5>
            <p className="side-area__content-text">
              1078 Granville Lane Newark,
              <br /> New Jersey
            </p>
            <p className="side-area__content-text">862-754-7193</p>
          </div>
          <div className="side-area__coppy">© 2020 Qode Interactive, All Rights Reserved</div>
        </div>
      </div>
    </Fragment>
  );
}

export default ShopHeaderSub;
