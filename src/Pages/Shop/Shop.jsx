import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../Components/Cart/Cart';
import ProductCard from '../../Components/ProductCard/ProductCard';
import RangeSlider from '../../Components/RangeSlider/RangeSlider';
import ShopHeader from '../../Components/ShopHeader/ShopHeader';
import SuggestProductCard from '../../Components/SuggestProductCard/SuggestProductCard';
import './Shop.scss';
export default function Shop() {
  const category = ['Bourbon', 'Fruit Liqueur', 'Liqueur', 'Skotch', 'Uncategorized', 'Whiskey'];
  return (
    <Fragment>
      <ShopHeader />
      <div className="shop__wrap">
        <div className="shop__content container">
          <div className="shop__products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="shop__sub-menu">
            <div className="shop__sub-menu__slider">
              <RangeSlider />
            </div>
            <div className="shop__sub-menu__types">
              <h4>DRINK TYPES</h4>
              <ul className="types__list">
                {category.map((cate) => {
                  return (
                    <Link key={cate} to={`/product/${cate}`}>
                      <li className="types__list-item">{cate}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="shop__sub-menu__top-suggest">
              <h4>TOP SUGGEST</h4>
              <SuggestProductCard />
              <SuggestProductCard />
              <SuggestProductCard />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
