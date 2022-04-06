import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ListItemAdmin from '../../../Components/ListItemAdmin/ListItemAdmin';
import { getOrders } from '../../../redux/actions/productAction';

export default function OrdersAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getOrders;
    dispatch(action());
  }, []);
  return (
    <Fragment>
      <ListItemAdmin />
    </Fragment>
  );
}
