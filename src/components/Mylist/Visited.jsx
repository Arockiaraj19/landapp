import React from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Mylist.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
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
      backgroundColor: '#B80707',
      margin: theme.spacing(1,0,1,0), 
      fontSize:"0.6rem",
      fontWeight:"600",
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
    }
    }));
    


function Visited() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles();
    return (
        <>
               <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
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
    <Button  size="small"  className={classes.btn1} variant="contained" color="secondary">
 Offer a price
</Button>
</section>
                   </div>
              </Grid>
            ))}
          </Grid>
        </Container>
        </>
    )
}

export default Visited
