import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const locations = [
  {
    value: 'Arm-R',
    label: 'Right Arm',
  },
  {
    value: 'Arm-L',
    label: 'Left Arm',
  },
  {
    value: 'Leg-R',
    label: 'Right Leg',
  },
  {
    value: 'Leg-L',
    label: 'Left Leg',
  },
  {
    value: 'Chest',
    label: 'Chest',
  },
  {
    value: 'Abdomen',
    label: 'Abdomen',
  },
  {
    value: 'Butt',
    label: 'Butt',
  },
  {
    value: 'Scalp',
    label: 'Scalp',
  },
  {
    value: 'Neck',
    label: 'Neck',
  },
];

const styles = [
    {
        value: 'BG',
        label: 'Black and Grey'
    },
    {
        value: 'C',
        label: 'Color'
    },
    {
        value: 'B',
        label: 'Infused/Both'
    },
];

const budgets = [

    {
        value: '$250-$500',
        label: '$250-$500'
    },
    {
        value: '$500-$1000',
        label: '$500-$1000'
    },
    {
        value: '$1000-$1500',
        label: '$1000-$1500'
    },
    {
        value: '$1500-$2000',
        label: '$1500-$2000'
    },
    {
        value: '$2000 <',
        label: '$2000 <'
    },
];

const days = [

    {
        value: 'Monday',
        label: 'Monday'
    },
    {
        value: 'Wednesday',
        label: 'Wednesday'
    },
    {
        value: 'Friday',
        label: 'Friday'
    },
];

const months = [

    {
        value: 'Jan',
        label: 'January'
    },
    {
        value: 'Feb',
        label: 'February'
    },
    {
        value: 'Mar',
        label: 'March'
    },
    {
        value: 'Apr',
        label: 'April'
    },
    {
        value: 'May',
        label: 'May'
    },
    {
        value: 'June',
        label: 'June'
    },
    {
        value: 'Jul',
        label: 'July'
    },
    {
        value: 'Aug',
        label: 'August'
    },
    {
        value: 'Sep',
        label: 'September'
    },
    {
        value: 'Oct',
        label: 'October'
    },
    {
        value: 'Nov',
        label: 'November'
    },
    {
        value: 'Dec',
        label: 'December'
    },
];



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function Form(props) {
  const classes = useStyles();

  const { values, handleChangeForm } = props;

  return (

    <form className={classes.container} noValidate autoComplete="off" >
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChangeForm('name')}
        margin="normal"
        variant="outlined"
      />

      <TextField
        id="outlined-age"
        label="Age"
        className={classes.textField}
        value={values.age}
        onChange={handleChangeForm('age')}
        margin="normal"
        variant="outlined"
      />
     
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        value={values.email}
        onChange={handleChangeForm('email')}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />      

       <TextField
        id="outlined-select-styles"
        select
        label="Select"
        className={classes.textField}
        value={values.styles}
        onChange={handleChangeForm('styles')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select the desired style of tatooing"
        margin="normal"
        variant="outlined"
      >
        {styles.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>   


      <TextField
        id="outlined-select-locations"
        select
        label="Select"
        className={classes.textField}
        value={values.locations}
        onChange={handleChangeForm('locations')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select the desired area of the body"
        margin="normal"
        variant="outlined"
      >
        {locations.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>   

      <TextField
        id="outlined-specific-location"
        label="Specific Location"
        className={classes.textField}
        value={values.specificLocation}
        onChange={handleChangeForm('specificLocation')}
        margin="normal"
        helperText="Detailed location (ie. wrist, forearm, bicep, half/full sleeve, etc.)"
        variant="outlined"
      />

      <TextField
        id="outlined-description"
        label="Tatoo Description"
        multiline
        rowsMax="4"
        value={values.description}
        onChange={handleChangeForm('description')}
        className={classes.textField}
        margin="normal"
        helperText="Please be as detailed as possible"
        variant="outlined"
      /> 

      <TextField
        id="outlined-select-budgets"
        select
        label="Select"
        className={classes.textField}
        value={values.budgets}
        onChange={handleChangeForm('budgets')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your budget"
        margin="normal"
        variant="outlined"
      >
        {budgets.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-select-days"
        select
        label="Select"
        className={classes.textField}
        value={values.days}
        onChange={handleChangeForm('days')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Available days for appointment"
        margin="normal"
        variant="outlined"
      >
        {days.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-select-months"
        select
        label="Select"
        className={classes.textField}
        value={values.months}
        onChange={handleChangeForm('months')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Month looking to book"
        margin="normal"
        variant="outlined"
      >
        {months.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}

export default Form;