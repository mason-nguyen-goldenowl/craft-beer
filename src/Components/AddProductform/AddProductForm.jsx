import './AddProductForm.scss';

import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createProduct, updateProduct } from '../../redux/actions/productAction';
import CategorySelect from '../CategorySelect/CategorySelcet';
import InformationSelect from '../InformationSelect/InformationSelect';

export default function AddProductForm({ setModalOpen, selected, setSelected }) {
  const informations = [
    { weight: '0.5 kg', dimensions: '20 × 20 × 20 cm' },
    { weight: '0.25 kg', dimensions: '10 × 10 × 10 cm' },
    { weight: '0.4 kg', dimensions: '15 × 20 × 15 cm' },
    { weight: '0.8 kg', dimensions: '30 × 30 × 30 cm' },
    { weight: '1 kg', dimensions: '40 × 40 × 40 cm' }
  ];
  const dispatch = useDispatch();
  const [information, setInformation] = useState(informations[0]);
  const [category, setCategory] = useState(selected?.category || '');
  const [name, setName] = useState(selected?.name || '');
  const [price, setPrice] = useState(selected?.price || '');
  const [stock, setStock] = useState(selected?.in_stock || '');
  const [description, setDescription] = useState(selected?.description || '');
  const [imgSrc, setImgSrc] = useState(selected?.img_url || null);
  const [imgFile, setImgFile] = useState(null);
  const addProductFormRef = useRef();

  const selectIndex = informations.findIndex((item) => item.weight === information.weight);

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
    }
    setImgFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let productData = new FormData();

    productData.append('name', name);
    productData.append('price', Number(price));
    productData.append('description', description);
    productData.append('information', JSON.stringify(information));
    productData.append('category', category);
    productData.append('in_stock', Number(stock));
    productData.append('image', imgFile);
    if (selected) {
      const action = updateProduct;
      dispatch(action(productData, selected.id));
    } else {
      const action = createProduct;
      dispatch(action(productData));
    }

    setModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      ref={addProductFormRef}
    >
      <form onSubmit={handleSubmit} className="add-product__form">
        {selected ? <h2>Update Product</h2> : <h2>Create Product</h2>}
        <div className="add-product__wrap">
          <div className="add-product__content">
            <div className="add-product__item">
              <TextField
                style={{ minWidth: '320px' }}
                id="outlined-multiline-flexible"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="add-product__item">
              <TextField
                style={{ minWidth: '320px' }}
                id="outlined-multiline-flexible"
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="add-product__item">
              <TextField
                style={{ minWidth: '320px' }}
                id="outlined-multiline-flexible"
                label="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="add-product__item">
              <CategorySelect
                setModalOpen={setModalOpen}
                category={category}
                setCategory={setCategory}
              />
            </div>
            <div className="add-product__item">
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Description"
                name="description"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="add-product__img">
            <div className="add-product__item">
              <label htmlFor="image">Choose product image</label>
              <input type="file" name="image" id="" onChange={handleChangeFile} />
            </div>
            <div className="add-product__item">
              <img
                src={imgSrc || `${process.env.REACT_APP_API}/${selected?.image_url}` || ''}
                alt=""
              />
            </div>
            <div className="add-product__item">
              <InformationSelect
                selections={informations}
                selected={information}
                setSelect={setInformation}
                selectIndex={selectIndex}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn add-product__submit-btn">
          {selected ? <span>Update</span> : <span>Create</span>}
        </button>

        <button
          type="submit"
          className="btn add-product__submit-btn"
          onClick={() => {
            setSelected('');
            setModalOpen(false);
          }}
        >
          Close
        </button>
      </form>
    </motion.div>
  );
}
