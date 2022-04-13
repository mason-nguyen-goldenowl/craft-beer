import './RangeSlider.scss';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { filterProductAction } from '../../redux/actions/productAction';
import { addSelectTag, deleteTag, selectProducts } from '../../redux/features/productsSlice';

function valuetext(value) {
  return value;
}

export default function RangeSlider() {
  const { selectedTag } = useSelector(selectProducts);
  const [value, setValue] = useState([40, 300]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = ['Bourbon', 'Fruit Liqueur', 'Liqueur', 'Skotch', 'Uncategorized', 'Whiskey'];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(
      filterProductAction({ category: selectedTag, lowPrice: value[0], highPrice: value[1] })
    );
  }, [selectedTag]);

  return (
    <Box sx={{ width: 300 }} className="range-slider">
      <h3>Filter Tag</h3>
      <div className="selected-tag__list">
        {selectedTag.map((tag) => {
          return (
            <div className="selected-tag__item" key={tag}>
              {tag}
              <span
                className="delete-tag"
                onClick={() => {
                  dispatch(deleteTag({ tag }));
                }}
              >
                <FaTimes />
              </span>
            </div>
          );
        })}
      </div>
      <h3>FILTER BY PRICE</h3>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="warning"
        min={40}
        max={300}
      />
      <div className="range-slider__submit">
        <button
          className="btn btn-outline"
          onClick={() => {
            dispatch(
              filterProductAction({
                category: selectedTag,
                lowPrice: value[0],
                highPrice: value[1]
              })
            );
            navigate('/filter');
          }}
        >
          Filter
        </button>
        <p className="range-slider__result">
          Price: ${value[0]} - ${value[1].toLocaleString()}
        </p>
      </div>
      <div className="shop__sub-menu__types">
        <h4>DRINK TYPES</h4>
        <ul className="types__list">
          {category.map((cate) => {
            return (
              <Link
                key={cate}
                to={`/filter`}
                onClick={() => {
                  dispatch(addSelectTag({ cate }));
                }}
              >
                <li className="types__list-item">{cate}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Box>
  );
}
