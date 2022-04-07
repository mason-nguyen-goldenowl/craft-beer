import './SignUp.scss';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { City, Country, State } from 'country-state-city';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../redux/actions/usersAction';
import { regExpEmail, regExpPassword } from '../../ultil/regExp/regExp';

export default function SignUp() {
  const dispatch = useDispatch();
  const arrCountry = Country.getAllCountries();
  const [countrySelect, setCountrySelect] = useState('');
  const [stateSelect, setStateSelect] = useState('');
  const [citySelect, setCitySelect] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      email,
      password,
      phone,
      street_address: address,
      country: countrySelect.name,
      state: stateSelect.name,
      city: citySelect.name
    };
    if (passwordValid && phoneValid && addressValid) {
      const action = signUp;
      dispatch(action(values));
    }
  };
  return (
    <Fragment>
      <div className="sign-up__wrap">
        <div className="sign-up">
          <form onSubmit={handleSubmit} className=" sign-up__form">
            <div className="sign-up__form-logo">
              <LockOutlinedIcon />
            </div>
            <h4>SIGN UP</h4>
            <div className="sign-up__form-data">
              <div className="sign-up__form-data__list">
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
                    const regExp = regExpPassword;
                    regExp.test(password) ? setPasswordValid(true) : setPasswordValid(false);
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  helperText={`Password at least 8 characters and have at least one upper case and lower case letter
                   `}
                />

                <TextField
                  sx={{ minWidth: '350px', marginBottom: '20px' }}
                  label="Phone Number"
                  variant="outlined"
                  value={phone}
                  error={!phoneValid}
                  onBlur={(e) => {
                    const regExp = new RegExp(/[0-9]/);
                    if (e.target.value.length < 10 && !regExp.test(e.target.value)) {
                      setPhoneValid(false);
                    } else {
                      setPhoneValid(true);
                    }
                  }}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="sign-up__form-data__list">
                <FormControl sx={{ minWidth: '350px', marginBottom: '20px' }}>
                  <InputLabel id="country-select-label">Country</InputLabel>
                  <Select
                    labelId="country-select-label"
                    id="country-select"
                    value={countrySelect}
                    label="Country"
                    onChange={(e) => {
                      setCountrySelect(e.target.value);
                    }}
                    required
                  >
                    {arrCountry.map((country) => {
                      return (
                        <MenuItem value={country} key={country.isoCode}>
                          {country.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: '350px', marginBottom: '20px' }}>
                  <InputLabel>State</InputLabel>
                  <Select
                    labelId="stateselect-label"
                    id="stateselect"
                    value={stateSelect}
                    label="State"
                    onChange={(e) => {
                      setStateSelect(e.target.value);
                    }}
                    required
                  >
                    {State.getStatesOfCountry(countrySelect.isoCode).map((state) => {
                      return (
                        <MenuItem value={state} key={state.isoCode}>
                          {state.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: '350px', marginBottom: '20px' }}>
                  <InputLabel>City</InputLabel>
                  <Select
                    labelId="stateselect-label"
                    id="stateselect"
                    value={citySelect}
                    label="City"
                    onChange={(e) => {
                      setCitySelect(e.target.value);
                    }}
                    required
                  >
                    {City.getCitiesOfState(countrySelect.isoCode, stateSelect.isoCode).map(
                      (city) => {
                        return (
                          <MenuItem value={city} key={city.isoCode}>
                            {city.name}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>

                <TextField
                  sx={{ minWidth: '350px', marginBottom: '20px' }}
                  label="Address"
                  variant="outlined"
                  value={address}
                  error={!addressValid}
                  onBlur={(e) => {
                    if (e.target.value.length < 10) {
                      setAddressValid(false);
                    } else {
                      setAddressValid(true);
                    }
                  }}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="sign-up-data__submit">
              <button className="btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
