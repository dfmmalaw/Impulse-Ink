import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function Checkboxes(props) {
  const {onChange, checked} = props;
  return (
    <div>
      <Checkbox
        name = 'checkbox'
        value={checked}
        onChange={onChange} 
        inputProps={{ 'aria-label': 'primary checkbox', }}
      /> By checking this box you agree to all terms and conditions specified above.
    </div>
  );
}

export default Checkboxes;