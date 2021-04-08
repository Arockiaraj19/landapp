import React, { useState, useContext } from 'react'
import { Modal, Avatar, Container, TextField, Button, Typography, Grid, Card, CardContent, CardMedia, CardActions, ButtonBase } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./MyListproperty.module.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import { useHistory } from "react-router-dom";
import { consumerdata } from "../../../App"
import axios from "axios";
import { host } from "../../colors"
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

  },
  btn1: {
    backgroundColor: 'green',
    margin: theme.spacing(0, 8, 0, 8),
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
  icon1: {
    color: "#007BFF",
    margin: theme.spacing(0, 1, 0, 1),
  }
  ,
  p: {
    fontSize: "0.8rem"
  }
}));











function MyListproperty() {
  const consumer = useContext(consumerdata);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();
  var history = useHistory();
  const nextpage = (data) => {
    consumer.setdata({ type: "EDIT", value: data });
    history.push("/editproperty");
  }


const deletedata=async(data)=>{
const responce=await axios.delete(`${host}api/property/${data}`,  {
  headers: {
    "authorization": consumer.data.token,
  }});
  console.log(responce);
}

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={10}>
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
                </section>

              </div>
              <div  className={style.edit}>
                <Button onClick={() => nextpage("data")} size="small" className={classes.btn1} variant="contained" color="secondary">
                  Edit
</Button>
                <Button onClick={() => deletedata("delete")} size="small" className={classes.btn2} variant="contained" color="secondary">
                  Delete
</Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default MyListproperty
