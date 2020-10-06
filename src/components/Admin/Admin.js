import { Box, Button, Container, Grid, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AdminList from '../AdminList/AdminList';
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Admin = () => {

    const [admins, setAdmins] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adminList')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])
    console.log(admins)

    let history = useHistory();
    const home = useHistory();

    const handleAddEvent = () => {
        history.push("/eventPanel")
        console.log('clicked')
    }

    const goHome = () => {
        home.push("/")
    }
    return (
        <Container style={{ marginTop: '20px' }}>
            <Grid container spacing={2} >
                <Grid item sm={12} md={3} >
                    <Typography align="center">

                        <img onClick={goHome} style={{ height: '50px', marginBottom: "30px" }} src="https://iili.io/2Vf0fn.md.png" alt="" /></Typography>
                    <Typography variant="h6" color="primary">
                        <Button color="primary" disableRipple><PeopleAltIcon /> volunteer volume register list</Button>
                    </Typography>
                    <Button onClick={handleAddEvent}><AddIcon /> Add Event</Button>

                </Grid>
                <Grid item sm={12} md={9} container >
                    <Grid></Grid>
                    <Grid sm={12} md={12}>
                        <Typography variant="h5">Volunteer Register List</Typography>
                    </Grid>
                    <Grid container style={{ background: 'lightgray', borderRadius: '5px', padding: '10px 5px', fontWeight: '500' }}>
                        <Grid sm={2} md={2}>Name</Grid>
                        <Grid sm={2} md={3}>Email</Grid>
                        <Grid sm={2} md={2}>Registration Date</Grid>
                        <Grid sm={2} md={4}>Volunteer List</Grid>
                        <Grid sm={2} md={1}>
                        Action
                        </Grid>
                    </Grid>
                    <Grid container>
                        {
                            admins.map(pd => <AdminList details={pd}></AdminList>)
                        }

                    </Grid>



                </Grid>
            </Grid>
        </Container>
    );
};

export default Admin;