import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import fakeData from '../../fakeData';






const Activity = (props) => {
    const {_id,event} = props.events;
 
    const date = new Date(props.events.date).toDateString("MM/dd/yyyy");

  const photUrl =   fakeData.find(pd => pd.name === event)


  const handleDelete = (e, id)=>{

    console.log(e.currentTarget.name)
    const uniqueKey = e.currentTarget.name;
    console.log(typeof uniqueKey)
    fetch(`https://rocky-crag-53831.herokuapp.com/delete/${uniqueKey}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
           },
      })
      .then(res => res.json()) 
      .then(res => console.log("deleted successfully"))





    const container = e.currentTarget.parentNode.parentNode;
    container.style.display= 'none'
  }
    return (
               <Grid container item sm={12} md={6}>
                   <Grid container spacing={3}>
                       <Grid item sm={4}>
                           <img src={photUrl.photo}  style={{ height: "200px" }} alt=""/>
                       </Grid>
                       <Grid item sm={8}>
                        <Typography variant="h5">
                            {event}
                        </Typography>
                        <Typography variant="h6">
                            {date}
                        </Typography>
                       <Button onClick={handleDelete} name= {`${_id}`} style={{marginLeft:"20vw"}} variant="contained" >Cancel</Button>
                       </Grid>
                   </Grid>
                    </Grid>
    );
};

export default Activity;