import {
    Box,
    Button,
    Container,
    Grid,

  } from "@material-ui/core";
  import React from "react";
  import { useState } from "react";
  import Header from "../Header/Header";
  import "./Home.css";
  import fakeData from "./../../fakeData";
  import Events from "../Events/Events";

const Home = () => {
    const [activities, setActivities] = useState(fakeData);
    return (
        <div className="Home">
              <Header></Header>
              <Container className="container">
        <Box>
          <h1>I Grow by helping people in need</h1>
          <input
            placeholder="Your Search"
            variant="outlined"
            color="secondary"
            type="text"
          ></input>
          <Button color="primary" variant="contained">
            Search
          </Button>
        </Box>
      </Container>

      <Container>
        <Grid container spacing={5}>
          {
              activities.map(activity => <Events key={activity.id} event={activity}></Events>)
          }
        </Grid>
      </Container>
        </div>
    );
};

export default Home;