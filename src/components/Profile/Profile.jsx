import React, { useEffect, useState, useContext } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { kred, kblack, kblue, host } from "../colors"
import axios from "axios"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { consumerdata } from "../../App"
import { useHistory } from "react-router-dom"
import Header from "../Header/Header"
import Modelcon from "./model"

const useStyles = makeStyles((theme) => ({
    paper1: {

        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'flex-start',
    },
    paper: {
        margin: theme.spacing(2, 0, 0, 0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 3, 0),
    },
    submit1: {
        margin: theme.spacing(1, 0, 1, 0),
        fontSize: "0.7rem",
        fontWeight: "500",
    },
    gridbtn: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    forgetcontainer: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    btn2: {
        margin: theme.spacing(2, 0, 2, 3),
        backgroundColor: kred,
    },
    btn3: {

        backgroundColor:"grey",
    },
    btn1: {

        backgroundColor: kblue,
    }
    ,
    img:{
        width:"140px",
        height:"140px",
        borderRadius:"50%",
        margin: theme.spacing(2, 0, 2, 0),
    }
}));



function Profile() {



    const consumer = useContext(consumerdata);
    const classes = useStyles();
    const history = useHistory()


    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [dob, setdob] = useState(new Date());
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [rpassword, setrpassword] = useState("");
    const [profilePic, setprofile] = useState("");
    const [licensePic, setlicence] = useState("");


    const uploadprofile = async (event) => {
        console.log("upload profile");
        const data = new FormData();
        console.log(event.target.files[0]);
        data.append('image', event.target.files[0]);
        const responce = await axios.post(`${host}api/upload/profile`, {
            image: data
        });
        setprofile(responce.data);
        console.log(responce);
    }



    const uploadlicence = async (event) => {
        console.log("upload licence");
        const data = new FormData();
        data.append('image', event.target.files[0]);

        const responce = await axios.post(`${host}api/upload/license`, {
            image: data
        });

        setlicence(responce.data);
        console.log(responce);
    }




    const submit = async (e) => {

        e.preventDefault();
        console.log(password.length);
        const responce = await axios.post(`${host}api/auth/register`, {
            firstname, lastname, email, dob, password, profilePic: "https://source.unsplash.com/random", licensePic: "https://source.unsplash.com/random"
        });
        if (responce.status == 200) {
            console.log(responce);
            alert("you registered successfully");
            history.push("/");
        } else {
            alert("something wrong");
        }
    }


    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== password) {
                return false;
            }
            return true;
        });
        return () => {
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }, [password])







    return (
        <>
            <Header />
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.paper}>
                    <section className={classes.gridbtn} style={{ width: "100%" }}>
                        <Typography component="h1" variant="h5">
                            My Profile
        </Typography>
                        <Typography style={{ color: "grey" }} component="h1" variant="h5">
                            Edit
        </Typography>
                    </section>
                    <div className={classes.gribtn}  style={{ width: "100%" }}>
                    <img className={classes.img} alt="complex" src="https://source.unsplash.com/random" />

                    </div>
                  
                    <ValidatorForm
                        onSubmit={submit}
                        className={classes.form}

                        // onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <Grid container spacing={2} className={classes.paper1}>
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography>First Name</Typography>
                                <TextValidator
                                    size={"small"}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    name="firstname"
                                    autoComplete="firstname"
                                    autoFocus
                                    value={firstname}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    onChange={(val) => setfirstname(val.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography>Last Name</Typography>
                                <TextValidator
                                    size={"small"}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    autoComplete="lastname"
                                    autoFocus
                                    value={lastname}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    onChange={(val) => setlastname(val.target.value)}
                                />
                            </Grid>



                        </Grid>

                        {/* second aprt */}

                        <div className={classes.paper}></div>

                        <Typography>Date of birth</Typography>
                        <TextValidator
                            id="date"
                            label=""
                            type="date"
                            varient="outlined"
                            defaultValue="2017-05-24"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dob}
                            onChange={(val) => setdob(val.target.value)}
                        />


                        <div className={classes.paper}></div>
                        <Typography>Emai id</Typography>

                        <TextValidator
                            size={"small"}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            label="Email"
                            onChange={(val) => setemail(val.target.value)}
                            name="email"
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />






                        {/* third part */}


                        {/* fourth part */}

                        <Grid container spacing={2} className={classes.paper1}>
                            <Grid item xs={6} sm={6} md={6}>

                                <Grid container className={classes.paper1}>
                                    <Typography>Upload Your Driving Licence Picture</Typography>
                                    <label htmlFor="upload-licence">
                                        <input
                                            style={{ display: 'none' }}
                                            id="upload-licence"
                                            name="upload-licence"
                                            onChange={uploadlicence}
                                            type="file"
                                        />

                                        <Button color="primary" variant="contained" className={classes.btn1} component="span">
                                            Upload
  </Button>

                                    </label>
                                </Grid>
                               
                            </Grid>

                        </Grid>
                      <Modelcon/>
                        <Grid container  spacing={5} className={classes.gridbtn} >
                        <Grid item xs={12} sm={8} md={8}>


<Button  size="small"  className={classes.btn3} variant="contained" color="secondary">
cancel
</Button>
<Button  size="small" onClick={submit} className={classes.btn2} variant="contained" color="secondary">
save
</Button>
</Grid>
</Grid>


                    </ValidatorForm>
                </div>

            </Container>
        </>
    )
}

export default Profile
