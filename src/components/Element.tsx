import * as React from 'react';
import CheckBox from './Elements/Checkbox';
import Input from './Elements/Input';
import SelectInput from './Elements/Select';

const Element = ({field:{field_type,field_id,field_label, field_placeholder,field_value,field_options}}) => {
  console.log(field_type)
  switch (field_type) {
      case "text":
          return <Input field_id={field_id}
          field_label={field_label} 
          field_placeholder={field_placeholder}
          field_value={field_value}/>
       
    
      case "select":
          return <SelectInput 
          field_id = {field_id}
          field_label = {field_label} 
          field_placeholder = {field_placeholder}
          field_value = {field_value}
          field_options={field_options}
          />
      
      case "checkbox":
            return <CheckBox field_id={field_id}
            field_label={field_label} 
            field_placeholder={field_placeholder}
            field_value={field_value}/>
  
      default:
          return null;
          break;
  }
    
}

export default Element 