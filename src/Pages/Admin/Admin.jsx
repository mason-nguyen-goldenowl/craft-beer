import './Admin.scss';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Dns from '@mui/icons-material/Dns';
import PermMedia from '@mui/icons-material/PermMedia';
import Public from '@mui/icons-material/Public';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AddProductForm from '../../Components/AddProductform/AddProductForm';
import AdminProductTable from '../../Components/AdminProductTable/AdminProductTable';
import ListItemAdmin from '../../Components/ListItemAdmin/ListItemAdmin';
import Modal from '../../Components/Modal/Modal';
import { getAllProduct } from '../../redux/actions/productAction';
import { selectProducts } from '../../redux/features/productsSlice';

export default function Admin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(selectProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [openListItem, setOpenListItem] = useState(false);
  const [productSelected, setProductSelected] = useState('');
  const isAdmin = Cookies.get('isAdmin');
  const refreshToken = Cookies.get('refresh_token');

  useEffect(() => {
    if (!isAdmin || !refreshToken) {
      return navigate('/');
    }

    dispatch(getAllProduct());
  }, [products]);
  return (
    <Fragment>
      <div className="admin__wrap">
        <div className="products__wrap">
          {openListItem ? (
            <div className="listItem__wrap ">
              <ListItemAdmin
                setOpenListItem={setOpenListItem}
                setProductSelected={setProductSelected}
                setModalOpen={setModalOpen}
              />
            </div>
          ) : (
            <div className="toggle-list">
              <div
                className="toggle-list__btn"
                onClick={() => {
                  setOpenListItem(true);
                }}
              >
                <FaBars />
              </div>
              <Dns />
              <PermMedia
                onClick={() => {
                  setProductSelected('');
                  setModalOpen(true);
                }}
              />
              <Link to="/admin/orders">
                <Public />
              </Link>
            </div>
          )}

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
      </div>
    </Fragment>
  );
}
