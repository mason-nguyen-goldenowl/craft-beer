import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import Modal from '../../Components/Modal/Modal';
import { getProduct } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';
import ListItemAdmin from '../../Components/ListItemAdmin/ListItemAdmin';
import AddProductForm from '../../Components/AddProductform/AddProductForm';
import AdminProductTable from '../../Components/AdminProductTable/AdminProductTable';

import './Admin.scss';

export default function Admin() {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState('');

  useEffect(() => {
    const action = getProduct;
    dispatch(action());
  }, [products]);
  return (
    <Fragment>
      <div className="products__wrap">
        <ListItemAdmin setProductSelected={setProductSelected} setModalOpen={setModalOpen} />
        <AdminProductTable
          products={products}
          setSelected={setProductSelected}
          setModalOpen={setModalOpen}
          selected={productSelected}
        />
        <div
          className="add-product__btn"
          onClick={() => {
            setProductSelected('');
            setModalOpen(true);
          }}
        >
          <AddCircleOutlinedIcon />
        </div>
      </div>
      {modalOpen && (
        <Modal
          children={
            <AddProductForm
              selected={productSelected}
              setSelected={setProductSelected}
              setModalOpen={setModalOpen}
            />
          }
        />
      )}
    </Fragment>
  );
}
