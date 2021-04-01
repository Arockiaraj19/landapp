import React from 'react'
import {Avatar,Container,TextField,Button,Typography,Grid,Slider} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Radius.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Header from "../Header/Header"
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  grid:{
    margin: theme.spacing(4,0,4,0), 
display:"flex",
justifyContent:"space-around",

[theme.breakpoints.down(780)]: {
 justifyContent:"flex-start",
 flowDirection:"column",
 }
  },
  grid1:{

display:"flex",
justifyContent:"flex-end",

  },
 input: {
     width:"70%"
 },
 btn:{
    backgroundColor: '#B80707',
   margin:theme.spacing(5,4,0,0),
    border:"none",
   
 },
 btn2:{
  backgroundColor: '#28A745',
 margin:theme.spacing(5,0,0,0),
  border:"none",
 
},
 btn1:{
  backgroundColor: '#B80707',
  [theme.breakpoints.down(780)]: {
    margin:theme.spacing(1,0,0,0),
    },
  border:"none",
 
},
 text:{
     fontSize:"1.2rem",
     color:"grey",
     fontWeight:"500",
     margin:theme.spacing(2,0,2,0)
 },

  }));
function Radius() {
  const history=useHistory();
  const nextpage=()=>{
    history.push("/dashboard");
  }
    const marks = [
        {
          value:1,
          label: '1 Miles',
        },
        {
          value: 50,
          label: '50 Miles',
        },
        {
          value: 100,
          label: '100 Miles',
        },
       
      ];
   
    const classes = useStyles();
    return (
        <>
            <Header/>
           <Container className={classes.container} maxWidth="md">
               <Typography className={classes.text}>Radius</Typography>
               <Slider
               m={1}
        defaultValue={80}
      
        aria-labelledby="discrete-slider-always"
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
     <Grid container className={classes.grid} spacing={1}>
     <TextField size={"small"} className={classes.input}  id="outlined-basic" label="Search eg.your live location" variant="outlined" />
    <Button className={classes.btn1} variant="contained" color="secondary">
    Use Current Location
 
</Button>
     </Grid>
     <Container className={style.map} maxWidth="md">
   
   </Container>
   <Grid container className={classes.grid1} spacing={1}>
   <Button onClick={nextpage} className={classes.btn} variant="contained" color="secondary">
cancel
</Button>
<Button startIcon={<PersonAddOutlinedIcon />} className={classes.btn2} variant="contained" color="secondary">
Apply
</Button>
   </Grid>
               </Container>   
        </>
    )
}

export default Radius
