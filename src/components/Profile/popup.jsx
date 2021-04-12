

import React,{useState,useContext} from 'react'
import {Modal,Avatar,Container,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import axios from "axios"
import {host,kblue} from "../colors"
import {consumerdata} from "../../App"
const useStyles = makeStyles((theme) => ({
   p:{
       fontSize:"1rem",
       fontWeight:"500",
   }
   ,
   grid:{
       display:"flex",
       alignItems:"center",
      
   },
   grid4:{
    display:"flex",
  flexDirection:"column",
   
},
   grid1:{
    display:"flex",
    alignItems:"center",
   justifyContent:"flex-end",
   margin: theme.spacing(4,0,2,0), 
},

    btn1:{
        margin:theme.spacing(0,0,0,2),
        backgroundColor:kblue,
  
},
btn3:{
  backgroundColor: '#B80707',
  margin: theme.spacing(1), 
  [theme.breakpoints.down(780)]: {
    fontSize:"0.6rem"
     }
},
btn2:{
  backgroundColor: "#28A745",
  margin: theme.spacing(1), 
},
div:{
    margin: theme.spacing(2,0,2,0), 
}
,address:{
    width:"100%"
}

    }));











function Popup(props) {
  const consumer=useContext(consumerdata);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [type,settype]=useState("");

    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [email,setemail]=useState("");
    const [number,setnumber]=useState("");
    const [address,setaddress]=useState("");
  
    const submit=async(e)=>{
      e.preventDefault();
      console.log(consumer.data.detail);
      console.log(selectedDate);
    
      const responce=await axios.post(`${host}api/schedule`,{
        sellerId:consumer.data.detail.sellerId,
        propertyId:consumer.data.detail._id,
        firstname,
        lastname,
        email,
        phone:number,
        address,
        type,
        time:selectedDate,
      },{
        headers:{
          "authorization":consumer.data.token,
        }
      });
      console.log(responce);
    }


    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const classes = useStyles();
    return (
        <>
             <Container className={classes.cardGrid} maxWidth="md">

             <Typography>Enter Current Password</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label=""
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={(val)=>setemail(val.target.value)}
          /> 

<Typography>Enter New Password</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label=""
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={(val)=>setemail(val.target.value)}
          /> 
          <Typography>Re-enter Password</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label=""
            name="lastname"
            autoComplete="lastname"
            autoFocus
            onChange={(val)=>setemail(val.target.value)}
          /> 
              <Grid container  spacing={5} className={classes.grid1} >
<Button  size="small" onClick={submit} className={classes.btn2} variant="contained" color="secondary">
save
</Button>
<Button onClick={props.close} size="small"   variant="contained" color="secondary">
cancel
</Button>
</Grid>
     </Container>
        </>
    )
}

export default Popup;
