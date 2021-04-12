import React, { useState, useEffect, useContext } from 'react'
import { Modal, Avatar, Container, TextField, Button, Typography, Grid, Card, CardContent, CardMedia, CardActions, ButtonBase } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Dashboard.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { kdartblue } from "../colors"
import { BrowserRouter, useHistory } from "react-router-dom";
import Header from "../Header/Header"
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';
import axios from "axios"
import { host } from "../colors"
import { consumerdata } from "../../App"
import { PostProperty, Filters, Detail, Radius, Listproperty, AdminDashboard, Mylist, History } from '../index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Pagination from '@material-ui/lab/Pagination';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 700,
    fontSize: "1.2rem",
    color: kdartblue,
    marginBottom: "5px"
  },
  paper1: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    height: 50,
    display: "flex",

  },
  container1: {
    width: "100%",
    height: "100px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"

  },
  input: {
    width: "73%"
  },
  btn: {
    backgroundColor: '#B80707',
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down(780)]: {
      fontSize: "0.6rem"
    }
  },
  btn1: {
    backgroundColor: '#B80707',
    [theme.breakpoints.down(390)]: {
      fontSize: "0.6rem"
    }
  },


  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    color: 'red',
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function Dashboard() {
  const classes = useStyles();
  let history = useHistory()
  let consumer = useContext(consumerdata)
  // useEffect(() => {
  //   if (consumer.data.token == null) {
  //     history.push("/")
  //   }
  // }, [])

  let { path, url } = useRouteMatch();

  return (
    <>
      <Header />
      <ChildDashboard />


    </>
  )
}

export default Dashboard



const ChildDashboard = () => {
  const consumer = useContext(consumerdata);
  const classes = useStyles();
  const history = useHistory();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [property, setproperty] = useState([]);

  const nextpage = async (e, id) => {
    history.push(e + `?id=${id}`);
    const responce = await axios.post(`${host}api/history`,
      {
        propertyId: id,
      },


      {
        headers: {
          "authorization": consumer.data.token,
        }
      });
    console.log(responce);

  }

  const addfav=async(sellerid,propertyid,index)=>{
    
    const responce = await axios.post(`${host}api/userlist`,
    {
      propertyId: propertyid,
      sellerId:sellerid,
      buyerId:consumer.data.userid,

    },


    {
      headers: {
        "authorization": consumer.data.token,
      }
    });
  console.log(responce);
console.log("ithu work aakuthaa");
  seticon(icon=>[...icon,icon[index]=!icon[index]]);

  }



  const nextpage1 = (e) => {
    history.push(e);
  }


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


  const [icon,seticon]=useState([]);
  useEffect(async () => {

    if (consumer.data.token == null) {
   history.push("/")
    } else {
      console.log("ithu filter data");
      console.log(Object.assign(consumer.data.filter, { radius: consumer.data.radius },consumer.data.location));


      const responce = await axios.get(`${host}api/property`,

        {
          data: {
            filter:Object.assign(consumer.data.filter, { radius: consumer.data.radius },consumer.data.location),
          },
          headers: {
            "authorization": consumer.data.token,
          }
        });


      console.log(responce);
      setproperty(responce.data.properties);
      console.log(responce.data.properties.length);

      responce.data.properties.map((data,index)=>(seticon(icon=>[...icon,true])));

    }

  }, []);

  const [page, setPage] =useState(1);
  const [count, setcount] =useState(10);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 41.3954,
        lng: 2.162
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];



  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  }
  let { path, url } = useRouteMatch();


const getloc=()=>{
  console.log(icon);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   alert("Geolocation is not supported by this browser.") ;
  }
}


function showPosition(position) {
 console.log(position.coords.latitude);
   console.log(position.coords.longitude);
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
    alert( "User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
    alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
    alert( "The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
   alert("An unknown error occurred.");
      break;
  }
}

const getlocation=(e)=>{
console.log(e);
}
  return (
    <>
      <Container className={classes.container} maxWidth="md">

        <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }} className={classes.input} id="outlined-basic" label="Search eg.type property location" variant="outlined" />
        <Button className={classes.btn} onClick={getloc} size="small" variant="contained" color="secondary">
          Use Current Location
          
</Button>
      </Container>
      <Container className={classes.container1} maxWidth="md">
        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">


          <Button onClick={() => nextpage1(`/radius`)} className={classes.btn1} size="small" variant="contained" color="secondary">
            Radius(Miles)
  <div className={style.box}>{consumer.data.radius/1609.34}</div>
          </Button>


          <Button onClick={() => nextpage1(`/filters`)} size="small" startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
            Filter
</Button>






          <Button onClick={() => nextpage1(`/favourite`)} size="small" startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
            Favourates
</Button>


        </Grid>
      </Container>

      <Container maxWidth="md">
        <Typography className={style.map} component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
          {
            isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(e)=>getlocation(e)}
              >
                { /* Child components, such as markers, info windows, etc. */}
                {
                  property.map(item => {
                    return (
                      <Marker key={item._id}
                        position={{lat:item. geoLocation.coordinates[0],lng:item. geoLocation.coordinates[1]}}
                      
                        onClick={() => onSelect(item)}
                      />
                    )
                  })
                }
                {
                  selected. geoLocation &&
                  (
                    <InfoWindow
                      position={{lat:selected. geoLocation.coordinates[0],lng:selected. geoLocation.coordinates[1]}}
                      clickable={true}
                      onCloseClick={()=>setSelected({})}
                    >
                      <div className={style.card}>
                <section className={style.image}>

                  <img onClick={() => nextpage(`/detail`, selected._id)} className={style.img} alt="complex" src={selected.coverImage} />

                </section>
                <section className={style.section}>
                  <div className={style.text}>₹{selected.price}</div>
                  <div className={style.div}>FOR SALE</div>
                  <div className={style.divtext}>{selected.address}</div>
                
                </section>
              </div>
                    </InfoWindow>
                  )
                }
                <Marker>

                </Marker>
                <></>
              </GoogleMap>
            ) : <></>


          }

        </Typography>
      </Container>

      <Container className={classes.cardGrid} maxWidth="md">
        <Typography className={classes.heading} >
          Properties around you
    </Typography>

        {/* End hero unit */}
        <Grid container spacing={4}>
          {property.map((card,index) => (
            <Grid  item key={card} xs={12} sm={6} md={6}>
              <div className={style.card}>
                <section className={style.image}>

                  <img onClick={() => nextpage(`/detail`, card._id)} className={style.img} alt="complex" src={card.coverImage} />

                </section>
                <section className={style.section}>
                  <div className={style.text}>₹{card.price}</div>
                  <div className={style.div}>FOR SALE</div>
                  <div className={style.divtext}>{card.address}</div>
                  <div onClick={()=>addfav(card.sellerId,card._id,index)} className={style.iconflex} >
                  {icon[index]===true ? <FavoriteBorderIcon   className={classes.icon} />:<FavoriteIcon  className={classes.icon} />}  
                    <div className={style.fav}>Saved to favourites</div>
                  </div>
                </section>
              </div>
            </Grid>
          ))}
        </Grid>
      <div style={{display:"flex",justifyContent:"center"}}>  <Pagination count={10} page={page} onChange={handleChange} color="secondary" /></div>
      </Container>
    </>
  )
}