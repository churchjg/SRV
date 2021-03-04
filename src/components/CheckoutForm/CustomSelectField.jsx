import React from 'react';
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';


const CustomSelectField = ({ name, label, required, options }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Controller
      
        name={name}
        control={control}
        required={required}
        defaultValue=""
        render={(props) => (
          <Select
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            fullWidth
          >
            {options.map((item) => (
              <MenuItem value={item.value}>{item.name}</MenuItem>
            ))}
          </Select>
        )}
      />
    </Grid>
  );
};

export default CustomSelectField;