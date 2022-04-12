import './Shop.scss';

import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../Components/ProductCard/ProductCard';
import RangeSlider from '../../Components/RangeSlider/RangeSlider';
import ShopHeader from '../../Components/ShopHeader/ShopHeader';
import SuggestProductCard from '../../Components/SuggestProductCard/SuggestProductCard';
import { getCartAction, getProduct } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';

export default function Shop() {
  const category = ['Bourbon', 'Fruit Liqueur', 'Liqueur', 'Skotch', 'Uncategorized', 'Whiskey'];
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);
  const [isLogged, setIsLogged] = useState(Cookies.get('isLogged'));

  const renderSuggest = () => {
    const productSuggest = products.slice(0, 3);
    return productSuggest.map((product) => {
      return <SuggestProductCard product={product} key={product.id} />;
    });
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };
  const item = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.5,
        linear: [0.17, 0.57, 0.83, 0.57],
        bounce: 0.25
      }
    }
  };
  const renderProduct = () => {
    return products.map((product) => {
      return (
        <motion.div variants={item}>
          <ProductCard product={product} key={product.name} />
        </motion.div>
      );
    });
  };
  useEffect(() => {
    const action = getProduct;
    dispatch(action());
    dispatch(getCartAction());
  }, []);
  return (
    <Fragment>
      <ShopHeader isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className="shop__wrap">
        <div className="shop__content container">
          <motion.div
            className="shop__products"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {renderProduct()}
          </motion.div>
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
              {renderSuggest()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
