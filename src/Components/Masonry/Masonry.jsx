import React from 'react';

import masonry1 from '../../asset/masonry/masonry-img-1.jpg';
import masonry2 from '../../asset/masonry/masonry-img-2.jpg';
import masonry3 from '../../asset/masonry/masonry-img-3.jpg';

import './Masonry.scss';

export default function MasonryComponent() {
  return (
    <div>
      <div className="masonry-wrap">
        <div className="masonry-left">
          <div className="masonry-item" style={{ backgroundImage: `url(${masonry1}) ` }}>
            {/* <img src={masonry1} alt="" /> */}
          </div>
        </div>
        <div className="masonry-right">
          <div className="masonry-item">
            <img src={masonry2} alt="" />
          </div>
          <div className="masonry-item-content"></div>
          <div className="masonry-item">
            <img src={masonry3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
