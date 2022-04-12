import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import ListItemAdmin from '../../../Components/ListItemAdmin/ListItemAdmin';
import OrdersTable from '../../../Components/OrdersTable/OrdersTable';
import { getOrdersAction } from '../../../redux/actions/productAction';
import { selectProducts } from '../../../redux/features/productsSlice';
import './OrderAdmin.scss';
import { FaBars } from 'react-icons/fa';
import { Dns, PermMedia, Public } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Modal from '../../../Components/Modal/Modal';
import AddProductForm from '../../../Components/AddProductform/AddProductForm';

export default function OrdersAdmin() {
  const dispatch = useDispatch();
  const { orders } = useSelector(selectProducts);
  const [openListItem, setOpenListItem] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState('');
  const isAdmin = Cookies.get('isAdmin');
  const refreshToken = Cookies.get('refresh_token');
  useEffect(() => {
    if (!isAdmin || !refreshToken) {
      return navigate('/');
    }
    dispatch(getOrdersAction());
  }, []);
  return (
    <Fragment>
      <div className="order-admin__wrap">
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
            <Link to="/admin">
              <Dns />
            </Link>
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

        <OrdersTable orders={orders} />
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
