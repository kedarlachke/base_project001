import {Select,MenuItem,FormControl,InputLabel } from '@material-ui/core'
import React from 'react'

const SelectInput = ({field_id,field_label, field_placeholder,field_value,field_options}:any) => {
    
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
    const handleChange = (event:any) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.age}
          onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
    )
}

export default SelectInput;
