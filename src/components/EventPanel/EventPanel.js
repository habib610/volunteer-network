import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AdminList from "../AdminList/AdminList";
import { useHistory } from "react-router-dom";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const EventPanel = () => {
  const classes = useStyles();
  let history = useHistory();
  let home = useHistory();

  const handleClick = () => {
    history.push("/admin");
  };

  const goHome = () => {
    home.push("/");
  };
  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Typography align="center">
            <img
              onClick={goHome}
              style={{ height: "50px", marginBottom: "30px" }}
              src="https://iili.io/2Vf0fn.md.png"
              alt=""
            />
          </Typography>
          <Typography variant="h6">
            <Button onClick={handleClick} disableRipple>
              <PeopleAltIcon /> volunteer volume register list
            </Button>
          </Typography>
          <Button color="primary">
            <AddIcon /> Add Event
          </Button>
        </Grid>
        <Grid item sm={12} md={9} container spacing={3}>
          <h1>hello haboasidfasadfasdkfsadkfasdkfasdfasdfasdfk</h1>

          <Grid item container sm={12} md={12}>
            <form
              style={{
                display: "flex",
                width: "60vw",
                padding: "10px",
                background: "#f5f5f5",
              }}
            >
              <Grid item sm={6} md={6} style={{ margin: "10px" }}>
                <Typography variant="subtitle2">Event Tittle</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Event Tittle"
                ></TextField>
                <Typography variant="subtitle2">Description</Typography>
                <TextField
                  fullWidth
                  rows={5}
                  multiline
                  variant="outlined"
                  placeholder="Event Tittle"
                ></TextField>
              </Grid>
              <Grid item sm={6} md={6} style={{ margin: "10px" }}>
                <Typography variant="subtitle2">Event Date</Typography>
                <TextField
                  variant="outlined"
                  type="date"
                  fullWidth
                  placeholder="Event Tittle"
                ></TextField>

                <div className={classes.root}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                      Upload Image
                    </IconButton>
                  </label>
                </div>
                <Button
                  variant="contained"
                  style={{ margin: "80px 0px 0px 20vw" }}
                  color="primary"
                  type="Submit"
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventPanel;
