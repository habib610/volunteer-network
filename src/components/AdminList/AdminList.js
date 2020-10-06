import { Button, Grid } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const AdminList = (props) => {
  const { name, username, date, event, _id } = props.details;

  const newDate = new Date(date).toDateString("dd/MM/yyyy");

  const handleDelete = (e, id) => {
    const uniqueKey = e.currentTarget.name;
    console.log(typeof uniqueKey);
    fetch(`http://localhost:5000/delete/${uniqueKey}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log("deleted successfully"));

    const container = e.currentTarget.parentNode.parentNode;
    container.style.display = "none";
    console.log(container);
  };

  return (
    <Grid
      container
      style={{
        padding: "10px 5px",
        background: "#e9e6e6",
        borderRadius: "5px",
        margin: "5px 0",
      }}
      alignItems="center"
    >
      <Grid sm={2} md={2}>
        {name}
      </Grid>
      <Grid sm={2} md={3}>
        {username}
      </Grid>
      <Grid sm={2} md={2}>
        {newDate}
      </Grid>
      <Grid sm={2} md={4}>
        {event}
      </Grid>
      <Grid sm={2} md={1}>
        <Button onClick={handleDelete} name={`${_id}`}>
          <DeleteIcon color="secondary"></DeleteIcon>
        </Button>
      </Grid>
    </Grid>
  );
};

export default AdminList;
