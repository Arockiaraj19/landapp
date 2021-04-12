import React,{useEffect,useContext,useState} from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./History.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {host} from "../colors"
import axios from "axios"
import {consumerdata} from "../../App"
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
    


function Favour() {
  let consumer=useContext(consumerdata);
    const cards = [1, 2, 3,4,5,6,7];
    const classes = useStyles();

    const [fav,setfav]=useState([]);

    useEffect(async() => {
      const responce = await axios.get(`${host}api/userlist?id=${consumer.data.userid}`,{
        headers: {
          "authorization": consumer.data.token,
        }
      });
      console.log(responce.data.userList);
      responce.data.userList.map(async(e,index)=>{
        const returndata=await axios.get(`${host}api/property/find/${e.propertyId}`,{
          headers: {
            "authorization": consumer.data.token,
          }
        });
        setfav(fav=>[...fav,returndata.data.property])
      })
  
    }, []);

const getdata=()=>{
  console.log(fav);
}
    return (
        <>
               <Container onClick={getdata} className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {fav.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
               <div className={style.card}>
<section className={style.image}>

              <img className={style.img} alt="complex" src={card.coverImage} />
          
</section>
<section className={style.section}>
    <div className={style.text}>₹{card.price}</div>

    <div className={style.divtext}>{card.address}</div>
    <div className={style.iconflex} >
    <div className={style.text1}>status  :  </div>
   
    <div className={style.div}>{card.status}</div>
    </div>
 
</section>
                   </div>
              </Grid>
            ))}
          </Grid>
        </Container>
        </>
    )
}

export default Favour
