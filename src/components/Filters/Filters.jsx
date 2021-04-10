import React, { useState,useContext ,useEffect} from 'react'
import { InputLabel, Checkbox, FormControlLabel, Container, Select, FormControl, TextField, Button, Typography, Grid, Card, CardContent, CardMedia, CardActions, ButtonBase } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./Filters.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Header from "../Header/Header"
import { useHistory } from "react-router-dom";
import {consumerdata} from "../../App"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1, 0, 1, 0),
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  grid: {
    display: "flex",
    margin: theme.spacing(1),
    alignItems: "center",
  },
  button: {
    height: "50",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btn1: {
    backgroundColor: '#B80707',
    margin: theme.spacing(5, 5, 5, 0),
  },
  btn3: {
    backgroundColor: '#28A745',
    margin: theme.spacing(5, 5, 5, 0),

  },
}));


function Filters() {
useEffect(() => {
  if (consumer.data.token == null) {
    history.push("/")
  }
 
}, [])

  const classes = useStyles();

  const history = useHistory();
  const consumer=useContext(consumerdata);

  const nextpage = () => {
    history.push("/dashboard");
  }




  const [bathroom, setbathroom] = useState(null);
  const [bedroom, setbedroom] = useState(null);
  const [propertytype, setpropertytype] = useState(null);

  const [afan, setafan] = useState(false);
  const [cfan, setcfan] = useState(false);
  const [hpump, sethpump] = useState(false);


  const submitdata=()=>{
const data={
  bedrooms:bedroom ,
  bathrooms:bathroom,
  type:propertytype,
  atticFan:afan,
  ceilingFan:cfan,
  heatPump:hpump,
}
consumer.setdata({type:"FILTER",value:data});
history.push("/dashboard");
  }


  return (
    <>
      < Header/>
      <Container className={classes.container} maxWidth="md">
        <div className={style.filter}>
          Filters
                </div>
        <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={6}>
            <Typography>Select Number Of Bedrooms</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Number Of Bedrooms</InputLabel>
              <Select
                native
                value={bedroom}
                onChange={(val)=>setbedroom(val.target.value)}
                label="Select Number of Bedrooms"
                inputProps={{
                 
                  id: 'outlined-age-native-simple',
                }}
              >
                
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography>Select Number Of Bathrooms</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Number Of Bathrooms</InputLabel>
              <Select
                native
                value={bathroom}
                onChange={(val)=>setbathroom(val.target.value)}
                label="Select Number of Bathrooms"
                inputProps={{
                 
                  id: 'outlined-age-native-simple',
                }}
              >
                
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Typography>Select Property Type</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Property Type</InputLabel>
              <Select
                native
                value={propertytype}
                onChange={(val)=>setpropertytype(val.target.value)}
                label="Select Property Type"
                inputProps={{
               
                  id: 'outlined-age-native-simple',
                }}
              >
                
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Typography>Enter sq.ft range</Typography>
        <Grid className={classes.grid} container spacing={2} >
          <div className={style.divmin}>Min</div>
          <TextField size={"small"} id="outlined-basic" variant="outlined" />
          <div className={style.divto}>to</div>
          <TextField size={"small"} id="outlined-basic" variant="outlined" />
          <div className={style.divmin}>Max</div>
        </Grid>


        <Typography>Enter Price range</Typography>
        <Grid className={classes.grid} container spacing={2} >
          <div className={style.divmin}>Min</div>
          <TextField size={"small"} id="outlined-basic" variant="outlined" />
          <div className={style.divto}>to</div>
          <TextField size={"small"} id="outlined-basic" variant="outlined" />
          <div className={style.divmin}>Max</div>
        </Grid>
        <Typography>Ammentites</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>

            <FormControlLabel
              control={<Checkbox onChange={(e) => setafan(e.target.checked)} name="gilad" />}
              label="Attic Fan"
            />
          </Grid>


          <Grid item xs={12} sm={6} md={4}>

            <FormControlLabel
              control={<Checkbox onChange={(e) => setcfan(e.target.checked)} name="ceiling" />}
              label="Ceiling Fan"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <FormControlLabel
              control={<Checkbox onChange={(e) => sethpump(e.target.checked)} name="heat" />}
              label="Heat pump"
            />
          </Grid>











        </Grid>
        <Grid container className={classes.button} spacing={2}>
          <Button onClick={nextpage} className={classes.btn3} variant="contained" color="secondary">
            cancel
</Button>
          <Button startIcon={<PersonAddOutlinedIcon />} onClick={submitdata} className={classes.btn1} variant="contained" color="secondary">
            Apply
</Button>
        </Grid>
      </Container>
    </>
  )
}

export default Filters
