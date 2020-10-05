import { Box,  Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireBase.Config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




const useStyles = makeStyles({
    root:{ 
        background: '#f5f5f5',
        height: '100vh'
    },
    login:{
        display: 'flex',
        justifyContent: 'space-evenly',
        border: '1px solid gray',
        padding: '10px 30px',
        borderRadius: ' 50px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '30px 0px 10px',
        alignItems: 'center',
        height: '30px'
    },
    loginContainer:{
        border: '1px solid gray',
        background: 'white',
        borderRadius: ' 5px',
        height: "150px",
        padding: "80px 30px",
        marginTop: "10vh"
    }
});


const Login = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    let history = useHistory();
    let location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    // google signIn 
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider).then(res=> {
            const {displayName, email} = res.user;
            // ...
            const signInUser = {name: displayName, email: email};
            setLoggedInUser(signInUser)
            history.replace(from);
          }).catch(error=> {
            console.log(error.code, error.message);
          });
    }



    return (
        <div  className={classes.root}>
             <Typography style={{textAlign: 'center'}}>
                    <img style={{height: '50px',marginTop: '20px'}} src="https://iili.io/2Vf0fn.md.png" alt=""/> </Typography>
            <Grid container justify="center" >
    
                <Grid item lg={4} >
                <Box className={classes.loginContainer} textAlign="center">
                    <Typography variant="h4" component="h1"> 
                        Login With
                    </Typography>
                        <Box className={classes.login} onClick={handleGoogleSignIn}>
                            <img src="https://iili.io/2xnMx9.png" style={{height: '30px'}} alt=""/>
                            <Typography variant="body1">Login with Google</Typography>
                        </Box>
                        <Typography variant="body1" >
                        Don't Have Account? <span><Link variant="body1">Create Account</Link> </span>
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;