import React from 'react'
import style from "./Header.module.css"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { AppBar } from '@material-ui/core';

import img from "../logo.png"
import {useRouteMatch} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  
    flex:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
  
  
    }));



function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
let {url,path}=useRouteMatch();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const history=useHistory();
 
const nextpage=()=>{
  history.push("/dashboard");
}
const nextpage1=()=>{
  history.push(`/mylist`);
}
const nextpage2=()=>{
  history.push(`/profile`);
}
    return (
        <>
        <AppBar elevation={0}  position="fixed" style={{height:"12%",backgroundColor:"#EAEAEA"}}>

<header className={style.header}>
    {/* <div  ></div> */}
    <img onClick={nextpage} className={style.avatar1} src={img} alt="logoimage"/>
    <div className={classes.flex}>
    <div  className={style.avatar2}></div>
    <div>
      <Button  startIcon={<ArrowDropDownIcon/>} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={nextpage1}>My account</MenuItem>
        <MenuItem onClick={nextpage2}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    </div>
      
    </header>
    </AppBar>
<div className={style.space}>

</div>

        </>
    )
}

export default Header
