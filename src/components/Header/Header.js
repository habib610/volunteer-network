import { AppBar, Box, Button,  Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { UserContext } from '../../App';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";

const useStyles = makeStyles(({
    root: {
      flexGrow: 1,
    //   backgroundColor: 'white',
      '& .MuiTypography-root':{
          margin: '0px 10px',
          fontWeight: '500',
          color: '#00BE41',
          '&:hover':{
            textDecoration: 'none',
            color: 'black',
            cursor:'pointer'
        }
      },
      '& .MuiTypography-h6':{
        color: 'black'
      },
      boxShadow: 'none',
      '& .MuiButtonBase-root':{
          margin: '5px'
      }
  
    },

    title: {
      flexGrow: 1,
    },
    logo:{
        height: '60px',
        paddingTop: '10px'
    },
  
reg:{
    background: '#00BE41',
    color: 'white',
    '&:hover':{
        background: '#4C9A2A'
    }
},
admin:{
    background: '#005075',
    color: 'white',
    '&:hover':{
        background: '#042442'
    }
}
  }));



const Header = () => {
    const classes = useStyles();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();

    const handleRegister =()=>{
      console.log("clicked Register")
      history.push('/login')
    }
    const handleAdmin =()=>{
      console.log("clicked Admin")
      history.push('/admin')
    }


    return (
        <div>
       <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <Box variant="h6" className={classes.title}>
        <img className={classes.logo} src="https://iili.io/2Vf0fn.md.png" alt=""/>
          </Box>

          <Link to="/home"> <Typography variant="body1">  Home</Typography></Link>
          <Link to="/"> <Typography variant="body1">Donation</Typography></Link>
          <Link to="/"> <Typography variant="body1">Event</Typography></Link>
          <Link to="/"> <Typography variant="body1">Blog</Typography></Link>

{ loggedInUser.email ? <Typography variant="h6">{loggedInUser.name}</Typography> :  <Box>
<Button onClick={handleRegister} className={classes.reg}>Register</Button>
 <Button onClick={handleAdmin}  className={classes.admin}>Admin</Button>
</Box>}

        </Toolbar>
      </AppBar>
        </div>
    );
};

export default Header;