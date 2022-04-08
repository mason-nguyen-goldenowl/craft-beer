import './AdminLogin.scss';

import { Button, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../../redux/actions/usersAction';
import { logging } from '../../../redux/features/userSlice';

export default function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAdmin = Cookies.get('isAdmin');
  const refreshToken = Cookies.get('refresh_token');

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      email,
      password
    };

    const action = signIn;
    dispatch(action(values));
    dispatch(logging({ isDisableLogginBTN: true }));
  };

  useEffect(() => {
    if (isAdmin && refreshToken) {
      navigate('/admin');
    }
  }, [isAdmin, refreshToken]);

  return (
    <Fragment>
      <div className="admin-login__wrap">
        <form onSubmit={handleSubmit} className="admin-login__form__wrap">
          <h1>Admin Login</h1>
          <div className="admin-login__form__item">
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="admin-login__form__item">
            <TextField
              id="outlined-multiline-flexible"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
            />
          </div>
          <div className="admin-login__form__item-submit">
            <Button color="warning" size="large" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
