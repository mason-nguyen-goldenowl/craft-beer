import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductCard from '../../Components/ProductCard/ProductCard';
import RangeSlider from '../../Components/RangeSlider/RangeSlider';
import ShopHeader from '../../Components/ShopHeader/ShopHeader';
import { getCartAction } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const { arrFilter } = useSelector(selectProducts);

  const [isLogged, setIsLogged] = useState(Cookies.get('isLogged'));

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
    return arrFilter.map((product) => {
      return (
        <motion.div variants={item} key={product.id}>
          <ProductCard product={product} key={product.name} />
        </motion.div>
      );
    });
  };

  useEffect(() => {
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
            {arrFilter.length === 0 ? <p>This category have no product</p> : renderProduct()}
          </motion.div>
          <div className="shop__sub-menu">
            <div className="shop__sub-menu__slider">
              <RangeSlider />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
