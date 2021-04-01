import React from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./AdminDashboard.module.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {kblue,kblack,kgreen} from "../colors"
const useStyles = makeStyles((theme) => ({
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
      backgroundColor: kgreen,
      margin: theme.spacing(0,1,0,1), 
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
    icon1:{
        color: 'blue',
        margin: theme.spacing(0,1,0,1), 
      }
      ,
      p:{
          fontSize:"0.8rem"
      },
      grid:{
          display:"flex",
          alignItems:"center",
          margin: theme.spacing(2,0,2,0), 
      }
    }));




function Bending() {
    const cards = [1, 2];
    const classes = useStyles();
    return (
        <>
            
            {cards.map((card) => (
                 <Grid container className={classes.grid}>
              <Grid item key={card} xs={12} sm={6} md={6}>
               <div className={style.card}>
<section className={style.image}>

              <img className={style.img} alt="complex" src="https://source.unsplash.com/random" />
          
</section>
<section className={style.section}>
    <div className={style.text}>$200,00</div>
   
    <div className={style.divtext}>9578-Farvaric-point,Lane Eastern,MD-2640510054111</div>
    <div className={style.iconflex} >
    <div className={style.text1}>status  :  </div>
   
    <div className={style.div}>Available</div>
    </div>
</section>  </div> 
<div className={style.edit}>
<Button  size="small"  className={classes.btn1} variant="contained" color="secondary">
  Accept
</Button>
<Button  size="small"  className={classes.btn2} variant="contained" color="secondary">
  Decline
</Button>
</div>

              </Grid>
              <Grid item xs={12} sm={6} md={6}>
              <CarouselSlide/>

                  </Grid>
              </Grid> 
            ))}
        
        </>
    )
}

export default Bending



const CarouselSlide=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
     <img className={style.simg} alt="complex" src="https://source.unsplash.com/random" />
      <img className={style.simg} alt="complex" src="https://source.unsplash.com/random" />
      <img className={style.simg} alt="complex" src="https://source.unsplash.com/random" />
      <img className={style.simg} alt="complex" src="https://source.unsplash.com/random" />
    </Carousel>
  )
}
