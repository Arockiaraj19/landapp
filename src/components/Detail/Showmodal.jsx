import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal ,Button}from '@material-ui/core';
import Showingmodel from "../Listproperty/widgets/Openhouse"
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
  paper: {
    position: 'absolute',
    width: "60%",
  
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:"95%"
  },
  btn1:{
    backgroundColor: '#B80707',
    margin: theme.spacing(2,0,2,0), 
},
}));

 function ShowModal({datadata}) {
  const classes = useStyles();
 
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
     <Showingmodel data={datadata} close={handleClose}/>
    </div>
  );

  return (
    <div>
    <Button onClick={handleOpen} className={classes.btn1} variant="contained" color="secondary">
 schedule/Request
</Button>
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