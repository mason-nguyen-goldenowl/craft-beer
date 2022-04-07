import './Admin.scss';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AddProductForm from '../../Components/AddProductform/AddProductForm';
import AdminProductTable from '../../Components/AdminProductTable/AdminProductTable';
import ListItemAdmin from '../../Components/ListItemAdmin/ListItemAdmin';
import Modal from '../../Components/Modal/Modal';
import { getProduct } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(selectProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState('');
  const isAdmin = Cookies.get('isAdmin');
  const refreshToken = Cookies.get('refresh_token');

  useEffect(() => {
    if (!isAdmin || !refreshToken) {
      return navigate('/admin/login');
    }
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
