import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './RangeSlider.scss';
function valuetext(value) {
  return value;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([40, 12400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }} className="range-slider">
      <h3>FILTER BY PRICE</h3>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color="warning"
        min={40}
        max={12400}
      />
      <div className="range-slider__submit">
        <button className="btn btn-outline">Filter</button>
        <p className="range-slider__result">
          Price: ${value[0]} - ${value[1].toLocaleString()}
        </p>
      </div>
    </Box>
  );
}
