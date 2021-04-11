import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal ,Button,Typography}from '@material-ui/core';
import Showingmodel from "../Listproperty/widgets/Openhouse"
import Popup from "./popup"
import AddIcon from '@material-ui/icons/Add';
function rand() {
  return Math.round(Math.random() * 2) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
     btn3: {
        backgroundColor: '#28A745',
        margin: theme.spacing(0, 5, 5, 0),

    },
  paper: {
    position: 'absolute',
    width: "50%",
  
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:"50%"
  },
  btn1:{
    backgroundColor: '#B80707',
    margin: theme.spacing(2,0,2,0), 
},
}));

 function ShowModal() {
  const classes = useStyles();
 
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.log("hello");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
     <Popup close={handleClose}/>
    </div>
  );

  return (
    <div onClick={handleOpen}>
    
<Typography style={{textDecoration:"underline"}}  component="h1" variant="h5">
                        Change Password
        </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ShowModal