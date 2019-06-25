import React from 'react';
import NavBar from './NavBar'
import Form from './InfoForm'
import SubmitButton from './SubmitButton';
import Container from '@material-ui/core/Container';
import Checkbox from './Checkbox';

function HomePage() {

    var divStyle = {
      marginLeft: '10px'
    };
  
    const [state, setState] = React.useState({
      checkbox: false,
  });
  
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    email: '',
    styles: '',
    locations: '',
    specificLocation: '',
    description: '',
    budgets: '',
    days: '',
    months: ''
  });
  
  const handleChangeForm = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
    return (
      <div>
       <Container maxWidth="md">
       <NavBar />
       <br />
       <div style={divStyle}>
        Wil specializes in black and grey realism but also does select color realism. The current minimum is $1,000
        and a day rate of $1,500. We are being selective with projects and designs that we take on for creative purposes. 
        Filling out this form will help expedite the process and keep everything organized (with all details) when
        creating designs. Thank you and we look forward to making art! 
        </div>
  
       <Form values={values} handleChangeForm={handleChangeForm} />
       <div style={divStyle}>
       <br />
       <p>Appointment dates are secured by deposit</p>
       <p>The deposit is $300 and is applied to the cost of the tatoo on the date of the appointment.</p>
       <p>The following will result in a forfeit of your deposit:</p>
       <p>1. No call/No show</p>
       <p>2. Less than 48 hour notice of cancellation/reschedule</p>
       </div>
  
       <Checkbox name="checkbox" onChange={handleChange} checked={state.checkbox} />
       <SubmitButton isEnabled={state.checkbox} values={values}/> 
       </Container>     
     </div>
    );
  }
  

export default HomePage;