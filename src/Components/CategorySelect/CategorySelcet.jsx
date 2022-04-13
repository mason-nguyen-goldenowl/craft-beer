import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelect({ category, setCategory, setModalOpen }) {
  const handleChange = (event) => {
    setModalOpen(true);
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'Bourbon'}>Bourbon</MenuItem>
          <MenuItem value={'Fruit Liqueur'}>Fruit Liqueur</MenuItem>
          <MenuItem value={'Liqueur'}>Liqueur</MenuItem>
          <MenuItem value={'Skotch'}>Skotch</MenuItem>
          <MenuItem value={'Uncategorized'}>Uncategorized</MenuItem>
          <MenuItem value={'Whiskey'}>Whiskey</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
