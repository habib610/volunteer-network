import {
  Button,
  Container,
  Grid,
  Input,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import { UserContext } from "../../App";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-root": {
      marginBottom: "8px ",
      padding: "10px",
    },
    marginTop: "30px",
  },
});

const Register = () => {
  const classes = useStyles();
  const { event } = useParams();

  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({
    name: loggedInUser.name,
    username: loggedInUser.email,
    description: "",
    date: new Date(),
    event: event,
  });

  const handleBlur = (event) => {
    const newUserInfo = { ...userInfo };
    newUserInfo.description = event.target.value;
    setUserInfo(newUserInfo);
  };
  const handleDateChange = (date) => {
    const newUserInfo = { ...userInfo };
    newUserInfo.date = date;
    setUserInfo(newUserInfo);
  };


  const registrationClick = () => {
    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    history.push("/dashboard");
  };

  return (
    <div>
      <Container className={classes.root} style={{ textAlign: "left" }}>
        <Grid container justify="center">
          <Grid item md={4} text="center">
            <Typography style={{ textAlign: "center" }}>
              <img
                style={{ height: "50px" }}
                src="https://iili.io/2Vf0fn.md.png"
                alt=""
              />
            </Typography>
            <form
              action=""
              style={{
                padding: "20px",
                border: "2px solid lightgrey",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h4">Register as a volunteer</Typography>

              <Input
                required
                fullWidth
                name="name"
                value={loggedInUser.name}
                type="text"
                color="secondary"
                placeholder="name"
              ></Input>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    fullWidth
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={userInfo.date}
                    name="date"
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <Input
                fullWidth
                name="username"
                type="text"
                value={loggedInUser.email}
                color="secondary"
                required
                placeholder="User Name or Email"
              ></Input>

              <Input
                fullWidth
                type="text"
                label="Multiline"
                multiline
                rows={2}
                name="description"
                color="secondary"
                required
                placeholder="Description"
                onBlur={handleBlur}
              ></Input>

              <Input
                fullWidth
                type="text"
                name="event"
                color="secondary"
                placeholder="Dynamic Value"
                value={event}
              ></Input>
              <Button
                onClick={registrationClick}
                type="Submit"
                color="primary"
                fullWidth
                variant="contained"
              >
                Registration
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
