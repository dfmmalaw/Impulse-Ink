import React from 'react';
import NavBar from './Components/NavBar'
import Form from './Components/InfoForm'
import SubmitButton from './Components/SubmitButton';
import Container from '@material-ui/core/Container';
import Checkbox from './Components/Checkbox';
import './App.css';

function App() {
  return (
   <div>
     <Container maxWidth="md">
     <NavBar />
     <Form />
     <br />
     <Checkbox /> 
     <SubmitButton /> 
     </Container>     
   </div>
  );
}

export default App;
