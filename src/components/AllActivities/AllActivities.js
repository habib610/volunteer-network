import { Container, Grid } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../App";
import Activity from "../Acitvity/Activity";
import Header from "../Header/Header";

const AllActivities = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/activity?username=${loggedInUser.email}`)
      .then((res) => res.json())
      .then((data) => setActivity(data));
  }, []);

  console.log(loggedInUser.email);

  return (
    <div>
      <Header></Header>

      <Container>
        <Grid container spacing={3}>
          {activity.map((part) => (
            <Activity key={part._id} events={part}></Activity>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllActivities;
