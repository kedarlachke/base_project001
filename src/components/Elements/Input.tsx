import { TextField } from '@material-ui/core'
import React from 'react'

  const Input = ({field_id,field_label, field_placeholder,field_value}:any) => {
    return (
        <TextField 
            id={field_id}
            label={field_label}  
            placeholder={field_placeholder?field_placeholder:''} 
            value={field_value}
        />
    )
}

export default Input;