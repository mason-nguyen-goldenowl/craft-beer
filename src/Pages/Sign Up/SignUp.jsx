import React, { Fragment } from 'react';
import { Country, State, City } from 'country-state-city';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './SignUp.scss';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export default function SignUp() {
  //   console.log(Country.getAllCountries());
  //   console.log(State.getAllStates());
  //   console.log(State.getStatesOfCountry('MK'));
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Fragment>
      <div className="sign-up__wrap">
        <div className="sign-up">
          <form className=" sign-up__form">
            <div className="sign-up__form-logo">
              <LockOutlinedIcon />
            </div>
            <div className="sign-up__form-data">
              <TextField
                sx={{ minWidth: '350px', marginBottom: '20px' }}
                label="Email"
                variant="outlined"
              />

              <FormControl sx={{ minWidth: '350px', marginBottom: '20px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <TextField
                sx={{ minWidth: '350px', marginBottom: '20px' }}
                label="Phone Number"
                variant="outlined"
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
