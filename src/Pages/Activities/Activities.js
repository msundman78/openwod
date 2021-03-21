import React from 'react';
import {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import './Activities.css';
import CreateActivity from './CreateActivity';
import ShowActivityModal from './ShowActivityModal';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  content: {
    padding: 0,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 1px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const listActivities = [
  {time: "2021-03-15 10:30", name: "WOD", gym: "Grottan", booked: 3},
  {time: "2021-03-16 10:30", name: "WOD", gym: "Grottan", booked: 4},
  {time: "2021-03-17 10:30", name: "WOD", gym: "Utegymmet", booked: 5}  
];

const Activities = () => {
  const [actState, setActState] = useState(listActivities);
  const [showActivityOpen, setShowActivityOpen] = useState(false);
  const [showActivityData, setShowActivityData] = useState(false);

  const classes = useStyles();

  const handleShowActivity = (e) => {
    console.log(e.currentTarget.dataset.id)
    console.log(actState[e.currentTarget.dataset.id]);
    setShowActivityData(actState[e.currentTarget.dataset.id]);
    setShowActivityOpen(true);
  }

  const handleCloseShowActivity = () => {
        console.log('Close');
        setShowActivityOpen(false);
  }
  
  const addActivity = (data) => {
    console.log("Add Act");
    const NewList = [...actState, data
//      {time: "2021-03-18 10:30", name: "WOD", gym: "Hemma", booked: 5}
    ];
    setActState(NewList);
  }

  const act = actState.map((a, index) => (
    <tr key={index} data-id={index} onClick={handleShowActivity}>
      <td>{a.time}</td>
      <td>{a.name}</td>
      <td>{a.gym}</td>
      <td>{a.booked}</td>
    </tr>
  ));

  return (
    <div className="container">
      <Card className={classes.root}>
      <CardContent className={classes.content}>

      <table className="activities-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Name</th>
            <th>Gym</th>
            <th>Booked</th>
          </tr>
        </thead>
          <tbody>
            {act}
          </tbody>
        </table>
      </CardContent>
      </Card>
      <br />
        <ShowActivityModal open={showActivityOpen} data={showActivityData} handleClose={handleCloseShowActivity} />
        <CreateActivity addActivity={addActivity}/>
    </div>
  );
}

export default Activities;
