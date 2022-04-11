import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItemAdmin from '../../../Components/ListItemAdmin/ListItemAdmin';
import OrdersTable from '../../../Components/OrdersTable/OrdersTable';
import { getOrdersAction } from '../../../redux/actions/productAction';
import { selectProducts } from '../../../redux/features/productsSlice';
import './OrderAdmin.scss';

export default function OrdersAdmin() {
  const dispatch = useDispatch();
  const { orders } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getOrdersAction());
  }, []);
  return (
    <Fragment>
      <div className="order-admin__wrap">
        <ListItemAdmin />

        <OrdersTable orders={orders} />
      </div>
    </Fragment>
  );
}
