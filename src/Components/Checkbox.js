import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function Checkboxes() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checked"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      /> By checking this box you agree to all terms and conditions specified above.
    </div>
  );
}

export default Checkboxes;