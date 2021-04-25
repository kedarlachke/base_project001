import {Checkbox,FormControl,FormLabel,FormControlLabel} from '@material-ui/core';
import React,{useState} from 'react'

const CheckBox = ({field_id,field_label,field_value}:any) => {
    const [checked, setChecked] = React.useState(field_value);

  const handleChange = (event:any) => {
    setChecked(event.target.checked);
  };

    return (
      <FormControlLabel
      id={field_id}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label={field_label}
      />
    )
}

export default CheckBox
