import React from 'react'
import {Container,Paper,TextField,Button,Typography,Grid,Card,CardContent,CardMedia,CardActions,ButtonBase,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    p:{
        fontSize:"1rem",
        fontWeight:"500",
    },
    table: {
        minWidth: 650,
        with:"auto",
  
      },
 img:{
     height:"50px",
     width:"50px",
     margin: theme.spacing(0.5), 
     borderRadius:"5px",
 },
 name:{
    fontSize:"0.8rem",
    fontWeight:"400",
 },
 div:{
     display:"flex",
     alignItems:"center",
     justifyContent:"flex-end",
 },
 btn2:{
  backgroundColor:"#28A745",
  [theme.breakpoints.down(800)]: {
   fontSize:"0.6rem"
    }
 }
 ,
 btn3:{
  backgroundColor:"#D03737",
  [theme.breakpoints.down(800)]: {
    fontSize:"0.6rem"
     }
 }
     }));
    //  function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];

      const rows=[
          {
              name:"buiyer",
              src:"https://source.unsplash.com/random",
              date:new Date()
          },
          {
            name:"buiyer",
            src:"https://source.unsplash.com/random",
            date:new Date()
        },
        {
            name:"buiyer",
            src:"https://source.unsplash.com/random",
            date:new Date()
        },
        {
            name:"buiyer",
            src:"https://source.unsplash.com/random",
            date:new Date()
        },
        {
            name:"buiyer",
            src:"https://source.unsplash.com/random",
            date:new Date()
        },

      ];
function Request() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">
            <p className={classes.p}>Requests</p>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >S.no</TableCell>
            <TableCell align="right">Buyer details</TableCell>
            <TableCell align="right">Date and Time</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={index}>
              <TableCell  >
                {index+1}
              </TableCell>
              <TableCell align="right"><div className={classes.div}>
            <img className={classes.img} src={row.src} alt="name"/>
            <div className={classes.name}>{row.name}</div>
                  </div></TableCell>
              <TableCell align="right">{row.date.toDateString()}</TableCell>
              <TableCell align="right">Views</TableCell>
              <TableCell align="right"><Button  size="small"  className={classes.btn2} variant="contained" color="secondary">
  Accept Request
</Button> <Button  size="small"  className={classes.btn3} variant="contained" color="secondary">
  Decline Request
</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Container>
        </>
    )
}

export default Request
