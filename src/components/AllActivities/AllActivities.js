import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';

const AllActivities = () => {
    return (
        <div>
            <Header></Header>

           <Container>
           <Grid container>
                    <Grid item sm={12} md={6}>
                    <h1>My All Activities</h1>
                    </Grid>
                    <Grid item sm={12} md={6}>
                    <h1>My All Activities</h1>
                    </Grid>
                </Grid>
           </Container>
                
   
        </div>
    );
};

export default AllActivities;