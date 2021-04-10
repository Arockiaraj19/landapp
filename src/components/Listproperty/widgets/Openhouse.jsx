

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
import {host} from "../../colors"
import {consumerdata} from "../../../App"
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
   grid1:{
    display:"flex",
    alignItems:"center",
   justifyContent:"flex-end",
   margin: theme.spacing(4,0,2,0), 
},
   btn1:{
    backgroundColor: '#B80707',
    margin: theme.spacing(1), 
    [theme.breakpoints.down(780)]: {
      fontSize:"0.6rem"
       }
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











function Openhouse(props) {
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
     <p className={classes.p}>Schedule open house</p>

{/* first part */}

     <Grid container className={classes.grid} >
     <Grid item  xs={6} sm={4} md={4}>
     <p >Select type</p>

     </Grid>
     <Grid item  xs={6} sm={6} md={6}>
     <Grid container className={classes.grid}>
     <Grid item  xs={6} sm={6} md={6}>
    
     <Button  size="small"  onClick={()=>settype("inperson")} className={classes.btn3} variant="contained" color="secondary">
 InPerson
</Button>
<Button  size="small" onClick={()=>settype("virtual")} className={classes.btn1} variant="contained" color="secondary">
 Virtual
</Button>

         </Grid>

      
</Grid>
     </Grid>
     </Grid>

{/* second part */}
<div className={classes.div}>
<MuiPickersUtilsProvider utils={DateFnsUtils} >
<Grid container spacing={5} className={classes.grid} >
     <Grid item  xs={6} sm={6} md={6}>
     <Grid container className={classes.grid} >
     <Grid item  xs={6} sm={6} md={6}>
     <p >Select Date</p>
         </Grid>
         <Grid item  xs={6} sm={6} md={6}>
         <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label=""
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </Grid>
         </Grid>
     </Grid>

     <Grid item  xs={6} sm={6} md={6}>
     <Grid container  spacing={5} className={classes.grid} >
     <Grid item  xs={6} sm={6} md={6}>
     <p >Select Time</p>
         </Grid>
         <Grid item  xs={6} sm={6} md={6}>
         <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label=""
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
         </Grid>
         </Grid>
     </Grid>
     </Grid>
     </MuiPickersUtilsProvider>
</div>


{/* third part */}
<p className={classes.p}>Seller Details</p>

<Grid container spacing={2} className={classes.paper}>
          <Grid item  xs={6} sm={6} md={6}>
          <Typography>First Name</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label=""
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={(val)=>setfirstname(val.target.value)}
          />  
              </Grid>
              <Grid item  xs={6} sm={6} md={6}>
          <Typography>Last Name</Typography>
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
            onChange={(val)=>setlastname(val.target.value)}
          />  
              </Grid>
              </Grid>  

              <Grid container spacing={2} className={classes.paper}>
          <Grid item  xs={6} sm={6} md={6}>
          <Typography>Phone Number</Typography>
<TextField
size={"small"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label=""
            name="firstname"
            autoComplete="firstname"
            autoFocus
            onChange={(val)=>setnumber(val.target.value)}
          />  
              </Grid>
              <Grid item  xs={6} sm={6} md={6}>
          <Typography>Email Id</Typography>
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
              </Grid>
              </Grid>  
              <Typography>Enter address</Typography>
              <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
         className={classes.address}
          variant="outlined"
          onChange={(val)=>setaddress(val.target.value)}
        />

<Grid container  spacing={5} className={classes.grid1} >

<Button  size="small" onClick={submit} className={classes.btn2} variant="contained" color="secondary">
save
</Button>
<Button onClick={props.close} size="small"  className={classes.btn1} variant="contained" color="secondary">
cancel
</Button>
</Grid>
     </Container>
        </>
    )
}

export default Openhouse;
