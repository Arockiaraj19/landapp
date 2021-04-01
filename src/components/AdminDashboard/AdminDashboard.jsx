import React from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./AdminDashboard.module.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';
import Accepted from "./Accepted"
import Bending from "./Bending"
import Header from "../Header/Header"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
  import {kblue,kblack,kgreen} from "../colors"
const useStyles = makeStyles((theme) => ({
    p:{
        fontSize:"1rem",
        fontWeight:"500",
      
    },
    grid:{
        margin:theme.spacing(4,0,4,0)
    },
    nav:{
        lineStyle:"none",
        color:kblack,
        textDecoration:"none",
        margin:theme.spacing(0,4,0,0),
        fontWeight:"500"
      },
      btn1:{
          backgroundColor:kblue,
      }
    }));




function AdminDashboard() {
    const history=useHistory();
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    const nextpage=(e)=>{
        history.push(e);
      }
    return (
        <>
         <Header/>
           <Container  maxWidth="md">
           <Grid    container
          className={classes.grid}
           display="flex"
  direction="row"
  justify="space-between"
  alignItems="center">
  <p className={classes.p}>Requests</p>
  <Button  size="small" onClick={()=>nextpage("/listproperty")}  className={classes.btn1} variant="contained" color="secondary">
 My listed properties
</Button>
      </Grid>
             
{/* second list items */}

<Grid    container

spacing={4}
              display="flex"
  direction="row"
  justify="flex-start"
  alignItems="center" className={classes.grid}>

<NavLink strict exact className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}`}>
Accepted properties
</NavLink>
<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}/bending`}>
Bending properties
</NavLink>






      </Grid>
<div>

    <Switch>
        <Route exact path={`${url}`}component={Accepted}/>

        <Route path={`${url}/bending`} component={Bending}/>

        
    </Switch>


</div>  
        </Container>   
        </>
    )
}

export default AdminDashboard
