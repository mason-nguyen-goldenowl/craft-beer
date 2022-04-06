import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/productAction';
import './Comfirm.scss';

export default function Comfirm({ setModalComfirm, selected }) {
  const dispatch = useDispatch();
  const handleComfirm = () => {
    const action = deleteProduct;
    dispatch(action(selected, selected.id));
    setModalComfirm(false);
  };
  return (
    <div className="comfirm__wrap">
      <div className="comfirm">
        <div className="comfirm-content">
          <p>Are you sure to delete this product?</p>
        </div>
        <div className="comfirm-submit">
          <button className="comfirm-submit btn" onClick={handleComfirm}>
            Yes
          </button>
          <button
            className="comfirm-submit btn"
            onClick={() => {
              setModalComfirm(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
