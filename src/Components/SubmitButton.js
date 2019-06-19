import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {  margin: theme.spacing(1), },
  input: { display: 'none', },
}));

export default function ContainedButtons(props) {
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
      Host : "smtp.elasticemail.com",
      Username : "dfmmalaw@gmail.com",
      Password : "d2296492-2689-49f7-ae3d-584f1507d23a",
      To : 'dfmmalaw@gmail.com',
      From : "dfmmalaw@gmail.com",
      Subject : "This is the subject",
      Body : textBuilder()
  }).then(
    message => alert(message)
  );
  };
  
    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button} disabled = {!props.isEnabled} type="submit" onClick={onClickBtn}>
          Submit
        </Button>
      </div>
    );
}
