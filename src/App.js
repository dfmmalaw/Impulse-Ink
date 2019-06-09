import React from 'react';
import NavBar from './Components/NavBar'
import Form from './Components/InfoForm'
import SubmitButton from './Components/SubmitButton';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
   <div>
     <Container maxWidth="md">
     <NavBar />
     <Form />
     <SubmitButton />
     </Container>     
   </div>
  );
}

export default App;
