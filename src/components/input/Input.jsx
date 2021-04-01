import React,{useState} from 'react'
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Grid, Box,Typography,Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {kred,kblack,kblue,host} from "../colors"
import axios from "axios"
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit2: {
      margin: theme.spacing(1, 0, 1,0),
      fontSize:"0.7rem",
      fontWeight:"500",
      backgroundColor:kblue,
    
    },
    signin: {
      margin: theme.spacing(3, 0, 3,0),
    backgroundColor: kred,
    },
    signup: {
      margin: theme.spacing(3, 0, 3,0),
      backgroundColor: kblack,
    },
    submit1: {
      margin: theme.spacing(1, 0, 1,0),
      fontSize:"0.7rem",
      fontWeight:"500",
      backgroundColor: kred,
    },
    gridbtn:{
      display: 'flex',
     justifyContent:"space-between",
      alignItems: 'center',
    },
    gridbtn1:{
      width:"100%",
      display: 'flex',
     justifyContent:"space-around",
      alignItems: 'center',
    },
    forgetcontainer:{
      display: 'flex',
      justifyContent:"center",
       alignItems: 'center',
    }
  }));
  


function Input() {

const [email,setemail]=useState("");
const [password,setpassword]=useState("");

    const classes = useStyles();

    const submit=async(e)=>{
      e.preventDefault();
      console.log(email);
      console.log(password);
      const responce=await axios.post(`${host}api/auth/login`,{
        email,password
      });
      console.log(responce);
    }
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <ValidatorForm
        className={classes.form}
              onSubmit={submit}
                // onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
      
        <Typography>Email/Username</Typography>
       
            <TextValidator
             size={"small"}
             variant="outlined"
             margin="normal"
             required
             fullWidth
             label="Email Address"
                    label="Email"
                    onChange={(val)=>setemail(val.target.value)}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
           <Typography>Password</Typography>
          <TextField
          size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            validators={['required']}
            errorMessages={['this field is required']}
            onChange={(val)=>setpassword(val.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
           <Grid container className={classes.gridbtn1}>
           <Grid item >
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.signin}
           
          >
            Sign In
          </Button>
         </Grid>
         <Grid item  >
          <Button
          
            fullWidth
            variant="contained"
            color="primary"
            className={classes.signup}
          >
            Sign Up
          </Button>
          </Grid>
           </Grid>
       
          <Grid container className={classes.gridbtn}>
            <Grid item >
            <Button
            size="small"
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit2}
          >
            Sign In Using Google
          </Button>
            </Grid>
            <Grid item>
            <Button
            size="small"
          
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit1}
          >
            Sign In Using Facebook
          </Button>
            </Grid>
          </Grid>
        <Grid container  className={classes.forgetcontainer} >
        <Typography >
         Forget Password?
        </Typography>
        </Grid>
        </ValidatorForm>
      </div>
     
    </Container>
  
    )
}

export default Input
