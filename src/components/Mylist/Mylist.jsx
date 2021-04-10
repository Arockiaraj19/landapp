import React,{useEffect,useContext} from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import style from "./Mylist.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Tobevisited from "./Tobevisited"
import Visited from "./Visited"
import Offer from "./Offer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,useRouteMatch,useHistory
  } from "react-router-dom";
  import {withRouter} from 'react-router';
  import {kblue,kblack,kgreen} from "../colors"
  import Header from "../Header/Header"
  import {consumerdata} from "../../App"
const useStyles = makeStyles((theme) => ({
  nav:{
    lineStyle:"none",
    color:kblack,
    textDecoration:"none",
    margin:theme.spacing(0,4,0,0),
    fontWeight:"500",
  },
  btn2:{
      backgroundColor:kblue,
  },
  btn1:{
      backgroundColor: '#B80707',
      margin: theme.spacing(0,2,0,2), 
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
function Mylist() {
  const consumer=useContext(consumerdata);
  useEffect(() => {
    if (consumer.data.token == null) {
      history.push("/")
    }
  }, [])
  let { path, url } = useRouteMatch();
    const classes=useStyles();
    const history=useHistory()

    const nextpage=(e)=>{
        history.push(e);
      }
   
    return (
        <>
            < Header/>
              <Container  maxWidth="md">

              <Grid    container className={classes.grid1}
              display="flex"
  direction="row"
  justify="space-between"
 >
   <h4>My List</h4>
       <Button  size="small" onClick={()=>nextpage("/listproperty")} className={classes.btn2} variant="contained" color="secondary">
  My listed property
</Button>

      </Grid>



 
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
  justify="flex-start"
  alignItems="center" className={classes.grid}>

<NavLink strict exact className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",

  }} to={`${url}`}>
To be visited
</NavLink>

<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",

  }} to={`${url}/visited`}>
Visited
</NavLink>


<NavLink  className={classes.nav} activeStyle={{
   
   color: kblue,
   borderBottom: "3px solid #007BFF",

  }} to={`${url}/offer`}>
Offer
</NavLink>










      </Grid>
<div>
<Switch>
    
        <Route exact path={`${url}`} component={Tobevisited}/>

        <Route exact path={`${url}/visited`} component={Visited}/>

        <Route exact path={`${url}/offer`} component={Offer}/>
</Switch>
   
   


</div>
              </Container>
        </>
    )
}

export default Mylist
