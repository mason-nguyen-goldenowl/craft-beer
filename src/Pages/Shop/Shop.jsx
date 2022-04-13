import './Shop.scss';

import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PaginationItem from '@mui/material/PaginationItem';
import ProductCard from '../../Components/ProductCard/ProductCard';
import RangeSlider from '../../Components/RangeSlider/RangeSlider';
import ShopHeader from '../../Components/ShopHeader/ShopHeader';
import SuggestProductCard from '../../Components/SuggestProductCard/SuggestProductCard';
import { getCartAction, getProduct } from '../../redux/actions/productAction';
import { resetFilter, selectProducts } from '../../redux/features/productsSlice';
import { Pagination } from '@mui/material';

export default function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, totalPage } = useSelector(selectProducts);
  const [isLogged, setIsLogged] = useState(Cookies.get('isLogged'));
  const pageParam = useParams();

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
        <motion.div variants={item} key={product.id}>
          <ProductCard product={product} />
        </motion.div>
      );
    });
  };
  useEffect(() => {
    dispatch(getProduct(pageParam.page));
    dispatch(getCartAction());
    dispatch(resetFilter());
  }, [pageParam]);
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
            <div className="pagination">
              <Pagination
                page={Number(pageParam.page)}
                count={totalPage}
                onChange={(e, page) => {
                  navigate(`/page/${page}`);
                }}
              />
            </div>
          </motion.div>
          <div className="shop__sub-menu">
            <div className="shop__sub-menu__slider">
              <RangeSlider />
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
