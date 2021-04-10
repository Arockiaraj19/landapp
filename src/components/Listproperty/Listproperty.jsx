import React,{useEffect,useContext} from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Listproperty.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import MyListproperty from "./widgets/MyListproperty"
import Openhouse from "./widgets/Openhouse"
import Request from "./widgets/Request"
import Upcomingvisits from "./widgets/Upcomingvisits"
import Offers from "./widgets/Offers"
import {kblue,kblack} from "../colors"
import { useHistory,   useRouteMatch } from "react-router-dom";
import Header from "../Header/Header"
import {consumerdata} from "../../App"
const useStyles = makeStyles((theme) => ({
  nav:{
    lineStyle:"none",
    color:kblack,
    textDecoration:"none",
    fontWeight:"500"
  },
  btn1:{
      backgroundColor: '#B80707',
      margin: theme.spacing(0,2,0,2), 
  },
  
  grid:{
    margin: theme.spacing(4,0,4,0), 
  }
    }));
function Listproperty() {
  const consumer=useContext(consumerdata);
useEffect(() => {
  if (consumer.data.token == null) {
    history.push("/login")
  }
}, [])
    const classes=useStyles();
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const nextpage=(e)=>{
      history.push(e);
    }
    return (
        <>
         < Header/>
              <Container className={classes.container} maxWidth="md">
              <Grid    container
              display="flex"
  direction="row"
  justify="flex-end"
  alignItems="center">
       <Button  size="small" onClick={()=>nextpage("/PostProperty")}  startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
  Sell
</Button>
<Button  size="small" onClick={()=>nextpage("/adminDashboard")} startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
 Buy
</Button>
      </Grid>


{/* second list items */}

<Grid    container
              display="flex"
  direction="row"
  justify="space-around"
  alignItems="center" className={classes.grid}>

<NavLink strict exact className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}`}>
My Listed Property
</NavLink>
<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF"
  }} to={`${url}/house`}>
schedule Open house
</NavLink>
<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}/request`}>
Request
</NavLink>
<NavLink strict exact className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}/upcoming_visits`}>
Upcoming visits
</NavLink>

<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",
  }} to={`${url}/offers`}>
Offers
</NavLink>





      </Grid>
<div>

    <Switch>
        <Route exact path={`${url}`} component={MyListproperty}/>

        <Route  path={`${url}/house`} component={Openhouse}/>

        <Route  path={`${url}/request`} component={Request}/>

        <Route  path={`${url}/upcoming_visits`} component={Upcomingvisits}/>
        <Route  path={`${url}/offers`} component={Offers}/>
    </Switch>


</div>
              </Container>
        </>
    )
}

export default Listproperty
