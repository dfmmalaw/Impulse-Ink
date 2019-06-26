import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {  margin: theme.spacing(1), },
  input: { display: 'none', },
}));

function SubmitButton(props) {
  const classes = useStyles();  

  const onClickBtn = () => {

    const textBuilder = () => {
      var doc = "";
      for (const key in props.values) {
       doc += key + ": " + props.values[key] + "<br/>";      
      }
      return doc;
    } 
    
    window.Email.send({
      SecureToken : "2827323c-68c2-4826-983e-0ce78e7bb26e",
      To : 'dfmmalaw@gmail.com',
      From : "dfmmalaw@gmail.com",
      Subject : "New Client Info",
      Body : textBuilder()
  }).then(
    message => alert(message)
  );

  props.history.push('/thankyou');

  };
  
    return (
      <div>
          <Button variant="contained" color="primary" className={classes.button} disabled = {!props.isEnabled} type="submit" onClick={onClickBtn}>
            Submit
          </Button>
      </div>
    );
}

export default withRouter(SubmitButton);