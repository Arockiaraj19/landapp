import React,{useEffect,useContext,useState} from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./History.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {host} from "../colors"
import axios from "axios"
import { consumerdata } from "../../App"
import ClearIcon from '@material-ui/icons/Clear';
import { CardTravel } from '@material-ui/icons';
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
    ,
    space:{
      height:"10px"
    },
    clean:{
    width:"100%",
 display:"flex",
 justifyContent:"flexend"
    }
    }));
    


function History1() {
    const cards = [1, 2];
    const classes = useStyles();
    const [history,sethistory]=useState([]);
const consumer=useContext(consumerdata);
useEffect(async() => {
  const responce=await axios.get(`${host}api/history`,{
    data:{

    },
    headers:{
      "authorization":consumer.data.token,
    }
  });
  console.log(responce);
  sethistory(responce.data.history);
}, [])


const clearhistory=async()=>{
  const responce=await axios.delete(`${host}api/history`,{
    headers:{
      "authorization":consumer.data.token,
    }
  });
  console.log(responce);
  sethistory([]);
}

const deletei=async(e)=>{
  console.log("deleted");
  const responce=await axios.delete(`${host}api/history/${e}`,{
    headers:{
      "authorization":consumer.data.token,
    }
  });
sethistory(history.filter(x => x._id !== e));
}


const nextpage = async (e, id) => {
  history.push(e + `?id=${id}`);
}


    return (
        <>
               <Container className={classes.cardGrid} maxWidth="md">
               <Button onClick={clearhistory} className={classes.btn} size="small"  variant="contained" color="secondary">
 Clear History
</Button>
<div className={classes.space}></div>

          {/* End hero unit */}
          <Grid container spacing={4}>
            {history.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <ClearIcon onClick={()=>deletei(card._id)} className={classes.clean}/>
               <div className={style.card}>
<section className={style.image}>

              <img className={style.img} onClick={() => nextpage(`/detail`, card.propertyId._id)} alt="complex" src={card.propertyId.coverImage} />
          
</section>
<section className={style.section}>
    <div className={style.text}>???{card.propertyId.price}</div>

    <div className={style.divtext}>{card.propertyId.address}</div>
    <div className={style.iconflex} >
    <div className={style.text1}>status  :  </div>
   
    <div className={style.div}>{card.propertyId.status}</div>
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

export default History1
