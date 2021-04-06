import React from 'react'
import {InputLabel,Checkbox,FormControlLabel,Container,Select,FormControl,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import style from "./Filters.module.css"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Header from "../Header/Header"
import { useHistory } from "react-router-dom";

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
        margin: theme.spacing(1),
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
        margin: theme.spacing(5,5,5,0),
    },
    btn3:{
      backgroundColor: '#28A745',
      margin: theme.spacing(5,5,5,0),
   
  },
  }));


function Filters() {
    const classes = useStyles();

const history=useHistory();
 
const nextpage=()=>{
  history.push("/dashboard");
}

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
        <>
             <Container className={classes.container} maxWidth="md">
                <div className={style.filter}>
                    Filters
                </div>
                <Grid container spacing={4}>
        
                <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Number Of Bedrooms</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Number Of Bathrooms</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
                    </Grid>
                    <Grid item  xs={12} sm={6} md={6}>
                    <Typography>Select Property Type</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
                    </Grid>
                    </Grid>
                    <Typography>Enter sq.ft range</Typography>
                    <Grid className={classes.grid} container spacing={2} >
                    <div className={style.divmin}>Min</div>
                    <TextField size={"small"} id="outlined-basic"  variant="outlined" />
                    <div className={style.divto}>to</div>
                    <TextField  size={"small"} id="outlined-basic"  variant="outlined" />
                    <div className={style.divmin}>Max</div>
                    </Grid>


                    <Typography>Enter Price range</Typography>
                    <Grid className={classes.grid} container spacing={2} >
                    <div className={style.divmin}>Min</div>
                    <TextField size={"small"} id="outlined-basic"  variant="outlined" />
                    <div className={style.divto}>to</div>
                    <TextField size={"small"}  id="outlined-basic"  variant="outlined" />
                    <div className={style.divmin}>Max</div>
                    </Grid>
                    <Typography>Ammentites</Typography>
                    <Grid container spacing={2}>
                    <Grid item  xs={12} sm={6} md={4}>
                        
                    <FormControlLabel
            control={<Checkbox  onChange={handleChange} name="gilad" />}
            label="Attic Fan"
          />
                        </Grid>

                        <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>

                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>

                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>

                             <Grid item  xs={12} sm={6} md={4}>
                        
                    <FormControlLabel
            control={<Checkbox  onChange={handleChange} name="gilad" />}
            label="Attic Fan"
          />
                        </Grid> <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>
                            <Grid item  xs={12} sm={6} md={4}>
                        
                        <FormControlLabel
                control={<Checkbox  onChange={handleChange} name="gilad" />}
                label="Attic Fan"
              />
                            </Grid>

                        </Grid>
                        <Grid container className={classes.button} spacing={2}>
                        <Button onClick={nextpage} className={classes.btn3} variant="contained" color="secondary">
cancel
</Button>
                        <Button startIcon={<PersonAddOutlinedIcon />} className={classes.btn1} variant="contained" color="secondary">
 Apply
</Button>
                            </Grid>
                 </Container> 
        </>
    )
}

export default Filters
