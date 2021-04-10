
import React,{useState,useContext,useEffect} from 'react'
import {InputLabel,Checkbox,FormControlLabel,Container,Select,FormControl,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./PostProperty.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import { useHistory } from "react-router-dom";
import Header from "../Header/Header"
import axios from "axios"
import {host} from "../colors"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {consumerdata} from "../../App"
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1,0,1,0),
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    grid:{
        display:"flex",
      justifyContent:"space-between",
        alignItems:"center",
    },
    button:{
        height:"50",

        display:"flex",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    btn1:{
        backgroundColor: '#B80707',
        margin: theme.spacing(2),
    },
    btn3:{
      backgroundColor: '#28A745',
      margin: theme.spacing(2),
  },
    btn0:{
      backgroundColor: '#B80707',
      marginTop:"30px",
      [theme.breakpoints.down(780)]: {
        marginTop:"0",
        }
  },
    udiv:{
      display:"flex",
      height:"auto",
      width:"100%",
      justifyContent:"flex-start",
      flexWrap:"wrap",
      margin:theme.spacing(3),
      alignItems:"center",
    },
  section:{
      height:"130px",
      width:"250px",
      margin:theme.spacing(3,3,3,3),
  },
  uimg:{
    height:"85%",
    width:"100%",
   
},
imagebottom:{
display:"flex",
alignContent:"center",
justifyContent:"space-between",
},
  text:{
    marginRight:"20px",
  },
  text1:{
    marginRight:"90px",
  },
  imgbtn:{
    fontSize:"0.8rem",
  height:"30px"
  },
  main:{
    margin:theme.spacing(8,0,8,0)
  }
  }));


function Editproperty({data}) {
    const classes = useStyles();
   const consumer=useContext(consumerdata);
    

      const [imagedata,setimage]=useState([])
      const [imagedata1,setimage1]=useState([])
      const [imagepath,setimagepath]=useState([])
      const [istrue,setistrue]=useState(false)



      const addImage = async(event)=>{
        console.log("upload profile");
        const data = new FormData();
        data.append('file', event.target.files[0]);
    
       const responce=await axios.post(`${host}api/upload/property`, data);
       setimagepath(imagepath=>[...imagepath,responce.data]);
        setimage(imagedata=>[...imagedata,URL.createObjectURL(event.target.files[0])]);
console.log(event);
console.log(imagedata);
      }


      const addImage1 = (event)=>{
     

      }



     

      const history=useHistory();
 
      const nextpage=()=>{
        history.push("/dashboard");
      }



      const containerStyle = {
        width: '100%',
        height: '100%'
      };
      
      const center = {
        lat: 13.0827,
        lng: 80.2707
      };
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBf2DbsdghCYjH5f9AgKQAHRQLeBgOrawE"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    

const showmap=()=>{
  setistrue(!istrue);
}

useEffect(() => {
  if (consumer.data.token == null) {
    history.push("/")
  }
   setemail(consumer.data.edit.name);
   setbathroom(consumer.data.edit.bathrooms);
   setbedroom(consumer.data.edit.bedrooms);
   setpropertytype(consumer.data.edit.type);
setfeet(consumer.data.edit.area);
setprice(consumer.data.edit.price);
setafan(consumer.data.edit.atticFan);
setcfan(consumer.data.edit.ceilingFan);
sethpump(consumer.data.edit.heatPump);
setimage(consumer.data.edit.coverImage);
setimages(consumer.data.edit.coverImage);
setadd(consumer.data.edit.address);
setdes(consumer.data.edit.description);
setstatus(consumer.data.edit.status);
setbuilder(consumer.data.edit.builder);
   setyear(consumer.data.edit.yearBuilt);
   setsubdiv(consumer.data.edit.subdivision);
   setloc(consumer.data.edit.geoLocation);
}, [])


const [images,setimages]=useState([]);
const [email,setemail]=useState('');
const [bathroom, setbathroom] = useState("");
const [bedroom, setbedroom] = useState("");
const [propertytype, setpropertytype] = useState("");
const [feet, setfeet] = useState("");
const [price, setprice] = useState("");
const [afan, setafan] = useState(false);
const [cfan, setcfan] = useState(false);
const [hpump, sethpump] = useState(false);
const [add, setadd] = useState("");
const [des, setdes] = useState("");
const [builder, setbuilder] = useState("");
const [status, setstatus] = useState("");
const [year, setyear] = useState("");
const [subdiv, setsubdiv] = useState("");
const [loc, setloc] = useState({});
const submit=async(e)=>{
  e.preventDefault();
      
  const responce=await axios.put(`${host}api/property/${data._id}`,{
   name:email,
   sellerId:consumer.data.userid,
   bedrooms:bedroom,
   bathrooms:bathroom,
   type:propertytype,
   area:feet,
   price:price,
   atticFan:afan,
   ceilingFan:cfan,
   heatPump:hpump,
   coverImage:"https://source.unsplash.com/random",
   pictures:["https://source.unsplash.com/random","https://source.unsplash.com/random"],
   address:add,
   description:des,
   status:"available",
   builder:builder,
   yearBuilt:"2015",
   subdivision:"Sk",
   geoLocation:{
     type:"Point",
     coordinates:[-73.856077, 40.848447]
   }
   
  },{
    headers:{
      "authorization":consumer.data.token,
    }});
  if(responce.status==200){
alert("you posted  successfully");
history.push("/dashboard");
  }else{
    alert("something wrong");
  }
}


const checkbox=(e)=>{
  console.log(e);
}


const getlocation=(e)=>{
  console.log(e.latLng);
}

    return (
        <>
           < Header/>
             <Container className={classes.container} maxWidth="md">
                <div className={style.filter}>
                    List your property
                </div>
                <ValidatorForm
      
      onSubmit={submit}
              
                
                onError={errors => console.log(errors)}
            >
                <Grid  container className={classes.grid} spacing={4} >
                <Grid item  xs={12} sm={6} md={6}>
                <Typography>Name of the property</Typography>
         <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            validators={['required']}
            errorMessages={['this field is required']}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(val)=>setemail(val.target.value)}
          />

                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Button  className={classes.btn0} onClick={showmap} variant="contained" color="secondary">
Choose on map
</Button>
                    
</Grid>
                    </Grid>
{/* map part sir */}
{
  istrue ? <Container  maxWidth="md">
  <Typography className={style.map} component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
{
  isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={getlocation}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>


}   

 </Typography>
  </Container> :<div></div>
}
{/* second part */}
                <Grid container spacing={4}>
        
                <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Number Of Bedrooms</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
        <Select
          native
          value={bathroom}
          onChange={(val)=>setbathroom(val.target.value)}
          label="0"
          inputProps={{
            name: '0',
            id: 'outlined-age-native-simple',
          }}
        >
          
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={3}>4</option>
          <option value={3}>5</option>
          <option value={3}>6</option>
        </Select>
      </FormControl>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Number Of Bathrooms</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
        <Select
          native
          value={bedroom}
          onChange={(val)=>setbedroom(val.target.value)}
          label="0"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
        >
          
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={3}>4</option>
          <option value={3}>5</option>
          <option value={3}>6</option>
        </Select>
      </FormControl>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Property Type</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
        <Select
          native
          value={propertytype}
          onChange={(val)=>setpropertytype(val.target.value)}
          label="0"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={3}>4</option>
          <option value={3}>5</option>
          <option value={3}>6</option>
        </Select>
      </FormControl>
                    </Grid>
                    </Grid>
{/*               
third part */}

<Grid container spacing={2}>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Area of the property (sq.ft)</Typography>
                   <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={feet}
         onChange={(val)=>setfeet(val.target.value)}
            label="Enter sq.ft area of the property"
            name="area"
            validators={['required']}
            autoComplete="email"
            errorMessages={['this field is required']}
            autoFocus
          />
                        </Grid>
                        <Grid item  xs={12} sm={6} md={6}>
                        <Typography>Price of the property</Typography>
                   <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={price}
            onChange={(val)=>setprice(val.target.value)}
            label="Enter price of the propery"
            name="price"
            validators={['required']}
            autoComplete="email"
            errorMessages={['this field is required']}
            autoFocus
          />

</Grid>
                        </Grid>


                    <Typography>Ammentites</Typography>
                    <Grid container spacing={2}>
                    <Grid item  xs={12} sm={6} md={4}>
                        
                    <FormControlLabel
            control={<Checkbox  onChange={(e)=>setafan(e.target.checked)} name="gilad" />}
            label="Attic Fan"
          />
                        </Grid>

                      
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox onChange={(e)=>setcfan(e.target.checked)}  name="ceiling" />}
                label="Ceiling Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox onChange={(e)=>sethpump(e.target.checked)}  name="heat" />}
                label="Heat pump"
              />
                            </Grid>
                        
                        
                
                   

                          

                        </Grid>

                        <Typography>Address</Typography>
         <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            validators={['required']}
            errorMessages={['this field is required']}
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
            value={add}
            onChange={(val)=>setadd(val.target.value)}
          />
           <Typography>Description</Typography>
         <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            validators={['required']}
            errorMessages={['this field is required']}
            label="Description"
            name="description"
            autoComplete="email"
            autoFocus
            value={des}
            onChange={(val)=>setdes(val.target.value)}
          />
           <Typography>Builders</Typography>
         <TextValidator
            variant="outlined"
            margin="normal"
            required
            fullWidth
            validators={['required']}
            errorMessages={['this field is required']}
            label="Builders"
            name="builder"
            autoComplete="builder"
            autoFocus
            value={builder}
            onChange={(val)=>setbuilder(val.target.value)}
          />
    <main className={classes.main}>
    <Grid container className={classes.udiv}>
                      <Typography className={classes.text1}>Upload property picture           </Typography>

                      <label htmlFor="upload-photo">
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    onChange={addImage}
    type="file"
  />

  <Button color="primary" variant="contained" component="span">
  Upload a new pic
  </Button>

</label>
                      </Grid>

<div className={classes.udiv}>
{
 imagedata.map((file,index)=>(<section className={classes.section}>
<img className={classes.uimg} src={file} alt={index}/>
<div className={classes.imagebottom}>
<FormControlLabel
                control={<Checkbox   name="gilad" style={{fontSize:"0.6rem"}}/>}
                label="Set as cover pic"
              />
               <Button size="small" className={classes.imgbtn} variant="outlined" color="secondary">
        Remove
      </Button>
</div>

 </section>))
}

</div>
    </main>



{/* final part */}
<main className={classes.main}>
<Grid container className={classes.udiv}>
                      <Typography className={classes.text}>Upload your driving licence picture</Typography>

                      <label htmlFor="upload-photo">
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    onChange={addImage1}
    type="file"
  />

  <Button color="primary" variant="contained" component="span">
    Upload a new pic
  </Button>

</label>
                      </Grid>

<div className={classes.udiv}>
{
 imagedata1.map((file,index)=>(<section className={classes.section}>
<img className={classes.uimg} src={file} alt={index}/>
<div className={classes.imagebottom}>
<FormControlLabel
                control={<Checkbox   name="gilad" />}
                label="Set as cover pic"
              />
               <Button size="small" className={classes.imgbtn} variant="outlined" color="secondary">
        Remove
      </Button>
</div>

 </section>))
}

</div>
</main>

<Grid container style={{display:"flex",justifyContent:"flex-end"}}>
<Button onClick={nextpage} className={classes.btn3} variant="contained" color="secondary">
cancel
</Button>
<Button  size="small" startIcon={<PersonAddOutlinedIcon />} type="submit" className={classes.btn1} variant="contained" color="secondary">
Post
</Button>
</Grid>
</ValidatorForm>

                 </Container> 
        </>
    )
}

export default Editproperty
