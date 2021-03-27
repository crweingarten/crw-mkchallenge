import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  }, 
}));


export default function InputForm() {
  const classes = useStyles();
  const [isConfirmed, userConfirmation] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: values => {
     console.log(values)
     userConfirmation(true);
    },
  });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div><img src="https://i.imgur.com/RIz4GW5.gif" alt="mklogo" width="200" /></div>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        
         
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}

          />
          

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="message"
            label="Type Message Here..."
            id="message"
            multiline
            rows="4"
            onChange={formik.handleChange}
            value={formik.values.message}
          />  

      {isConfirmed ?
        <Button
        fullWidth
        variant="contained"
        disabled
        color="default"
        >Message Submitted
        </Button>
        :  
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >Submit</Button>
      }    
        </form>
      </div>
    </Container>
  );
}