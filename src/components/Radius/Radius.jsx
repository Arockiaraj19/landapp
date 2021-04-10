import React, { useState, useContext,useEffect } from 'react'
import { Avatar, Container, TextField, Button, Typography, Grid, Slider } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Radius.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Header from "../Header/Header"
import { useHistory } from "react-router-dom";
import { consumerdata } from "../../App"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(4, 0, 4, 0),
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down(780)]: {
      justifyContent: "flex-start",
      flowDirection: "column",
    }
  },
  grid1: {

    display: "flex",
    justifyContent: "flex-end",

  },
  input: {
    width: "70%"
  },
  btn: {
    backgroundColor: '#B80707',
    margin: theme.spacing(5, 4, 0, 0),
    border: "none",

  },
  btn2: {
    backgroundColor: '#28A745',
    margin: theme.spacing(5, 0, 0, 0),
    border: "none",

  },
  btn1: {
    backgroundColor: '#B80707',
    [theme.breakpoints.down(780)]: {
      margin: theme.spacing(1, 0, 0, 0),
    },
    border: "none",

  },
  text: {
    fontSize: "1.2rem",
    color: "grey",
    fontWeight: "500",
    margin: theme.spacing(2, 0, 2, 0)
  },

}));
function Radius() {
  const history = useHistory();
  const [location, setlocation] = useState({});
  const nextpage = () => {
    history.push("/dashboard");
  }
  const marks = [
    {
      value: 1,
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

  
  const getloc=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
     alert("Geolocation is not supported by this browser.") ;
    }
  }

  
  function showPosition(position) {
   console.log(position.coords.latitude);
     console.log(position.coords.longitude);
setlocation(  {
    latitude:position.coords.latitude,
    longitude: position.coords.longitude,
     
    });
  }

  const classes = useStyles();
  const consumer = useContext(consumerdata);
  const submitdata = () => {
    console.log(radius);
    consumer.setdata({ type: "RADIUS", value: radius });
    consumer.setdata({ type: "LOCATION", value:location });
    history.push("/dashboard");

  }
  const [radius, setradius] = useState(0);
useEffect(() => {
  if (consumer.data.token == null) {
    history.push("/login")
  }
}, [])


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 13.0827,
  lng: 80.2707
};
const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: "AIzaSyBf2DbsdghCYjH5f9AgKQAHRQLeBgOrawE"
})

const [map, setMap] = React.useState(null)

const onLoad = React.useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds();
  map.fitBounds(bounds);
  setMap(map)
}, [])

const onUnmount = React.useCallback(function callback(map) {
  setMap(null)
}, [])
  return (
    <>
  < Header/>
      <Container className={classes.container} maxWidth="md">
        <Typography className={classes.text}>Radius</Typography>
        <Slider
          m={1}
          defaultValue={0}
          onChange={(val) => setradius(parseInt(val.target.innerText) * 1609.34)}
          aria-labelledby="discrete-slider-always"
          step={1}
          marks={marks}
          valueLabelDisplay="on"
        />
        <Grid container className={classes.grid} spacing={1}>
          <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }} size={"small"} className={classes.input} id="outlined-basic" label="Search eg.your live location" variant="outlined" />
          <Button className={classes.btn1} onClick={getloc} variant="contained" color="secondary">
            Use Current Location
            
</Button>
        </Grid>
        <Container className={style.map} maxWidth="md">
        {
  isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
     
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>


}  
        </Container>
        <Grid container className={classes.grid1} spacing={1}>
          <Button onClick={nextpage} className={classes.btn} variant="contained" color="secondary">
            cancel
</Button>
          <Button startIcon={<PersonAddOutlinedIcon />} onClick={submitdata} className={classes.btn2} variant="contained" color="secondary">
            Apply
</Button>
        </Grid>
      </Container>
    </>
  )
}

export default Radius
