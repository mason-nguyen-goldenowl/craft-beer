import './Login.scss';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import Cookies from 'js-cookie';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../../redux/actions/usersAction';
import { regExpEmail } from '../../ultil/regExp/regExp';
import { selectUsers } from '../../redux/features/userSlice';

export default function Login() {
  const refreshToken = Cookies.get('refresh_token');
  const isLogged = Cookies.get('isLogged');
  const { isLoggedSusscess } = useSelector(selectUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValid && emailValid) {
      let values = { email, password };
      const action = signIn;
      dispatch(action(values));

      navigate('/');
    }
  };

  useEffect(() => {
    if (isLogged && refreshToken) {
      navigate('/');
    }
  }, [isLogged, navigate, refreshToken, isLoggedSusscess]);
  return (
    <Fragment>
      <div className="login__wrap">
        <div className="login">
          <form onSubmit={handleSubmit} className="login__form">
            <div className="sign-up__form-logo">
              <LockOutlinedIcon />
            </div>
            <h4>LOGIN</h4>
            <div className="login__form-data">
              <div className="login__form-data__list">
                <TextField
                  sx={{ minWidth: '350px', marginBottom: '20px' }}
                  label="Email"
                  variant="outlined"
                  error={!emailValid}
                  value={email}
                  onBlur={(e) => {
                    const regExp = regExpEmail;
                    if (regExp.test(e.target.value)) {
                      setEmailValid(true);
                    } else {
                      setEmailValid(false);
                    }
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="email"
                />
                <TextField
                  sx={{ minWidth: '350px', marginBottom: '20px' }}
                  label="Password"
                  variant="outlined"
                  value={password}
                  type="password"
                  error={!passwordValid}
                  onBlur={() => {
                    const regExp = new RegExp(
                      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                    );
                    regExp.test(password) ? setPasswordValid(true) : setPasswordValid(false);
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  helperText={`Password at least 8 characters and have at least one upper case and lower case letter
   `}
                />
              </div>
            </div>
            <div className="login-data__submit">
              <button className="btn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
