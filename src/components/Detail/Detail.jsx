import React,{useEffect,useState,useContext} from 'react'
import {Avatar,Container,TextField,Button,Typography,Grid,Paper} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Detail.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShowModal from "./Showmodal"
import {kred,kblack,kblue} from "../colors"
import ShowMore from 'react-show-more-button';
import Header from "../Header/Header"
import axios from "axios"
import {host} from "../colors"
import {consumerdata} from "../../App"
import { BrowserRouter, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    paper: {
 
      display: 'flex',
   marginTop:"5px",
    
    },
    paper1: {
 
        display: 'flex',
    flexDirection:"column"
      
      },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: theme.palette.secondary.main,
    },
    container: {
height:50,
display:"flex",

    },
    container1: {
        width:"100%",
      height:"100px",
      alignItems:"center",
    display:"flex",
    justifyContent:"center"
        
            },
 input: {
     width:"73%"
 },
 btn:{
    backgroundColor: '#B80707',
    margin: theme.spacing(0,1,0,1), 
   
 },
btn1:{
    backgroundColor: '#B80707',
    margin: theme.spacing(2,0,2,0), 
},
btn2:{
    backgroundColor: '#B80707',
    width:"100%", 
  
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
  icon:{
    color: 'red',
  },
  map:{
      backgroundColor:"blue",
    
  },
  footer:{
    alignItems:"center",
    display:"flex",
    justifyContent:"center",
    margin:theme.spacing(3,1,3,0)
  },
  footerbtn:{
backgroundColor:kblue,

  }
  }));
  








function Detail() {
  const history=useHistory();
  const [property, setproperty] = useState({});
  const consumer=useContext(consumerdata);
    const classes = useStyles();
    useEffect(async() => {
      if (consumer.data.token == null) {
        history.push("/")
      }
     var url=new URLSearchParams(window.location.search);
     const responce=await axios.get(`${host}api/property/find/${url.get("id")}`,  {
      headers:{
        "authorization":consumer.data.token,
      }});
    
    console.log(responce.data.property);
    setproperty(responce.data.property);
    consumer.setdata({type:"DETAIL",value:responce.data.property});
     
    }, [])





    return (
        <>
            < Header/>
            <Container  maxWidth="md">
            <Grid container className={classes.paper} spacing={2}>
            <Grid item  xs={4} sm={2} md={2}>
<Grid className={classes.paper1} container>
<div className={style.text}>₹{property.price}</div>
    <div className={style.div}>FOR SALE</div>
</Grid>

                </Grid>

                <Grid item  xs={4} sm={2} md={2}>
                <div className={style.divtext}>{property.address}</div>
                </Grid>

                <Grid item xs={4} sm={2} md={2}>
                <div className={style.divtext}>{property.address}</div>
                <div className={style.text}>Resistance</div>
                </Grid>
                <Grid item  xs={4} sm={2} md={2}>
                <div className={style.divtext}>{property.bathrooms},beds</div>
                <div className={style.divtext}>{property.bedrooms} baths</div>
                </Grid>

                <Grid item xs={4} sm={2} md={2}>
                <div className={style.divtext}>{property.area}</div>
                <div className={style.text}>Sq.ft</div>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
               <Grid container>
               <FavoriteIcon className={classes.icon} />
    <div className={style.fav}>Saved to favourites</div>
               </Grid>
                </Grid>
                </Grid>
         </Container> 
         <Images image={property.coverImage} address={property.address} images={property.pictures} data={property}/>
         <Paragraph data={property}/>
        </>
    )
}

export default Detail




function Images(props) {
    var items =props.images;
    const classes = useStyles();
    useEffect(()=>{
console.log("props kku correct varuthaa");
console.log(props.data);
    },[]);
    return (
        <>
       
          <Container  maxWidth="md">
          <Grid container className={classes.paper} spacing={2}>
          <Grid item  xs={12} sm={8} md={8}>
<section className={style.image}> 
<img className={style.img} alt="complex" src={props.image} />
</section>
<div className={style.blue}>Gallery</div>
<CarouselSlide data={props.data}/>
</Grid>

<Grid item  xs={12} sm={4} md={4}>
<ShowModal data={props.data}/>
<div className={style.card1}>
<section className={style.image1}>

              <img className={style.img1} alt="complex" src="https://source.unsplash.com/random" />
          
</section>
<section className={style.section}>
<div className={style.divtext}>{props.address}</div>

   
</section>
                   </div>
  

          <Grid container spacing={2} className={classes.paper}>
          <Grid item  xs={6} sm={6} md={6}>
          <Typography>First Name</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus
          />  
              </Grid>
              <Grid item  xs={6} sm={6} md={6}>
          <Typography>Last Name</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            autoFocus
          />  
              </Grid>
              </Grid>  

              <Typography>Phone Number</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneno"
            label="Phone Number"
            name="phoneno"
            autoComplete="phoneno"
            autoFocus
          />
              <Typography>Email ID</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email ID"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button  className={classes.btn2} variant="contained" color="secondary">
 Request Info
</Button>
</Grid>

</Grid>
          </Container>
        </>
    )
}





const CarouselSlide=({data})=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
  return (
    <Carousel 
    swipeable={true}
    draggable={true}
    showDots={true}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    // deviceType={this.props.deviceType}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px" responsive={responsive}>
      <div><img className={style.simg} alt="complex" src="https://source.unsplash.com/random" /></div>
      <div><img className={style.simg} alt="complex" src="https://source.unsplash.com/random" /></div>
      <div><img className={style.simg} alt="complex" src="https://source.unsplash.com/random" /></div>
      <div><img className={style.simg} alt="complex" src="https://source.unsplash.com/random" /></div>
    </Carousel>
  )
}




const Paragraph=({data})=>{
    const classes = useStyles();
let data1="A paragraph is a series of related A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumentA paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumentA paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumentA paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumentA paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument";

    const consumer=useContext(consumerdata);
const addfav=async(sellerid,propertyid)=>{
    
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
}
    return (
<>
<Container  maxWidth="md">
<div className={style.blue}>Description</div>
<div className={style.blue1}>{data.address}</div>
<ShowMore styleButton={{backgroundColor:"#B80707",fontSize:"1rem",border:"none"}} maxHeight={200}>
<div className={style.para}>
    {data.description}
</div>
</ShowMore>
<div className={style.blue1}>Property Details</div>
<Grid container className={classes.paper} spacing={3}>
<Grid item  xs={6} sm={6} md={6}>
<div className={style.para1}>
    Property Type
</div>
<div className={style.text}>{data.type}</div>
    </Grid>

    <Grid item  xs={6} sm={6} md={6}>
    <div className={style.para1}>Bedroom {data.bedrooms}</div>
    <div className={style.para1}>Bathroom {data.bathrooms}</div>
    </Grid>
    <Grid item  xs={6} sm={6} md={6}>
<div className={style.para1}>
   Squere feet
</div>
<div className={style.text}>{data.area} sq ft</div>
    </Grid>

    <Grid item  xs={6} sm={6} md={6}>
<div className={style.para1}>
  Year feet
</div>
<div className={style.text}>{data.yearBuilt}</div>
    </Grid>
    <Grid item  xs={6} sm={6} md={6}>
<div className={style.para1}>
  Subdivision
</div>
<div className={style.text}>{data.subdivision}</div>
    </Grid>
    <Grid item  xs={6} sm={6} md={6}>
<div className={style.para1}>
builder
</div>
<div className={style.text}>{data.builder}</div>
    </Grid>
</Grid>


<Container className={style.map} maxWidth="md">
   
    </Container>

    <Grid container className={classes.footer}>
    <div onClick={()=>addfav(data.sellerId,data._id)}  className={classes.footer}>
               <FavoriteIcon className={classes.icon} />
    <div className={style.fav}>Save for later</div>
    
    </div>
               <Button  variant="contained" className={classes.footerbtn} cla color="secondary">
 schedule/Request
</Button>
    </Grid>
    </Container>
</>
    )
}