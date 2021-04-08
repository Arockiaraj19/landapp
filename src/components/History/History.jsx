import React from 'react'
import {Modal,Avatar,Container,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./History.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Favour from "./Favour"
import History1 from "./History1"
import {kblue,kblack} from "../colors"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
 useHistory,
 BrowserRouter
  } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  nav:{
    lineStyle:"none",
    color:kblack,
    textDecoration:"none",
    fontWeight:"500",
  },
  btn1:{
      backgroundColor: '#B80707',
      margin: theme.spacing(0,2,0,2), 
  },
  btn2:{
    backgroundColor:kblue,
    margin: theme.spacing(2), 
},

  grid:{
    margin: theme.spacing(2,0,2,0), 
    display:"flex",
    alignItems:"center",
    justifyContent:"spaceBetween",
  
  },
  grid1:{
    margin: theme.spacing(2,0,2,0), 
  }
    }));








function History() {
    const classes=useStyles();
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const nextpage=(e)=>{
      history.push(e);
    }
    return (
        <>
         
              <Container  maxWidth="md">

              <Grid    container className={classes.grid1}
              display="flex"
  direction="row"
  justify="flex-end"
 >
       <Button  size="small" onClick={()=>nextpage(`/listproperty`)} className={classes.btn2} variant="contained" color="primary">
  My listed property
</Button>

      </Grid>



 
     <Grid    container
              display="flex"
  direction="row"
  justify="flex-end"
  alignItems="center">
       <Button onClick={()=>nextpage(`/postProperty`)}  size="small" startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
  Sell
</Button>
<Button  size="small" onClick={()=>nextpage(`/adminDashboard`)} startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
 Buy
</Button>


     </Grid>


{/* second list items */}

<Grid  xs={12} sm={4} md={4}   container
              display="flex"
  direction="row"
  justify="space-around"
  alignItems="center" className={classes.grid}>


<NavLink exact  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}`}>
Favourites
</NavLink>
<NavLink  className={classes.nav} activeStyle={{
      borderBottom: "3px solid #007BFF",
    color: kblue
  }} to={`${url}/history`}>
History
</NavLink>






      </Grid>
<div>

  
<Switch>
      <Route  exact path={`${url}`} component={Favour}/>

        <Route  path={`${url}/history`} component={History1}/>

        </Switch>

   



</div>
              </Container>
        </>
    )
}

export default History

