import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { BrowserRouter as  useHistory, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiTypography-h6": {
      // lineHeight: '0',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});



const Events = ({event}) => {
    const name = event.name;
     
  const classes = useStyles();
  const colors = ["#ffbd3e", "#ff7044", "#3f90fc", "#421fcf"];

  let bgColor;
  if (event.id % 4 === 0) {
    bgColor = colors[0];
  }
  if (event.id % 4 === 1) {
    bgColor = colors[1];
  }
  if (event.id % 4 === 2) {
    bgColor = colors[2];
  }
  if (event.id % 4 === 3) {
    bgColor = colors[3];
  }
//   const history = useHistory();

//  const handleClick=()=>{
// //    history.push(`/register/${name}`)
//    history.push("/register")
//  }
    return (
        <Grid item className={classes.root} sm={6} md={4} lg={3} align="center">
        <img src={event.photo} style={{ width: "100%" }} alt="" />
         
         <Link to={"/register/"+ name}>
         <Typography 
            variant="h6"
            style={{
              backgroundColor: `${bgColor}`,
              color: "white",
              height: "11vh",
              marginTop: "-5px",
              cursor: "pointer"
            }}
          >
            {event.name}
          </Typography>
         </Link>
          
      </Grid>
    );
};

export default Events;