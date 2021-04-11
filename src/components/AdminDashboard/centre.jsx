import React, { useState, useEffect, useContext } from 'react'
import { Modal, Avatar, Container, TextField, Button, Typography, Grid, Card, CardContent, CardMedia, CardActions, ButtonBase } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { kdartblue } from "../colors"
import { BrowserRouter, useHistory } from "react-router-dom";
import axios from "axios"
import { host } from "../colors"
import { consumerdata } from "../../App"

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

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import ShowModal from "./model"

const usestyles = makeStyles((theme) => ({
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
        width:"30%",
        margin: theme.spacing(1, 1, 1, 0),
        backgroundColor: '#B80707',
        [theme.breakpoints.down(390)]: {
            fontSize: "0.6rem"
        }
    },


    card: {
        width: "100%",
        display: "flex",
        height: "170px",
        flexDirection:"column",
    },

    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        width:"100%",
        maxHeight: '80%',
    },
    icon: {
        color: 'red',
    },
    flex: {
        width:"100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },


    btn3: {
        backgroundColor: '#28A745',
        margin: theme.spacing(0, 5, 5, 0),

    },
}));

function centre() {
    const classes = usestyles();
    const data=[0,1,2,3,4,5,6,7,8,9,10];
    return (
        <>

            <Container maxWidth="md">
                <Grid className={classes.flex}>

<ShowModal/>
                </Grid>
               
<Grid  container spacing={2}>
{
   data.map((value,index)=>(
<Grid  item key={index} xs={12} sm={6} md={4}>
    <Typography>Pdf title</Typography>
    <section className={classes.card}>
    <img className={classes.img} alt="complex" src="https://source.unsplash.com/random" />
    <Button startIcon={<CloseIcon />} className={classes.btn1} variant="contained" color="secondary">
                        Delete
</Button>
    </section>

    </Grid>
   ))
}

</Grid>


            </Container>
        </>
    )
}

export default centre
