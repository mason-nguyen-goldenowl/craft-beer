import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import React, { Fragment } from 'react';

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027'
};

const Paragraph = styled('p')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: 10px 0;
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `
);

const Pre = styled('pre')(
  ({ theme }) => `
  font-family: monospace;
  font-size: 0.875rem;
  margin: 0px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(0, 30, 60, 0.5)' : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[400] : grey[700]};
  `
);

export default function InformationSelect({ selections, selected, setSelect, selectIndex }) {
  const handleChange = async (event) => {
    setSelect(event.target.value);
  };
  const renderSelection = () => {
    return selections.map((item) => {
      return (
        <MenuItem key={item.weight} value={item}>
          {item.weight}
        </MenuItem>
      );
    });
  };

  return (
    <Fragment>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Information</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selections[selectIndex]}
            label="Category"
            onChange={handleChange}
          >
            {renderSelection()}
          </Select>
        </FormControl>
      </Box>
      <Paragraph>Selected Information:</Paragraph>
      <Pre>{JSON.stringify(selected, null, 2)}</Pre>
    </Fragment>
  );
}
