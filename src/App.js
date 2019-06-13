import React from 'react';
import NavBar from './Components/NavBar'
import Form from './Components/InfoForm'
import SubmitButton from './Components/SubmitButton';
import Container from '@material-ui/core/Container';
import Checkbox from './Components/Checkbox';
import './App.css';

function App() {

  const [state, setState] = React.useState({
    checkbox: false,
});

const handleChange = event => {
  setState({ ...state, [event.target.name]: event.target.checked });
};


  return (
   <div>
     <Container maxWidth="md">
     <NavBar />
     <Form />
     <br />
     <Checkbox name="checkbox" onChange={handleChange} checked={state.checkbox} />
     <SubmitButton isEnabled={state.checkbox} /> 
     </Container>     
   </div>
  );
}

export default App;
