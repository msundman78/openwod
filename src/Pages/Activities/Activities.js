import './Activities.css';
import React from 'react';
import {useState, useEffect} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import CreateActivity from './CreateActivity';
import ShowActivityModal from './ShowActivityModal';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  content: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0
    }
  },
});

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showActivityOpen, setShowActivityOpen] = useState(false);
  const [showActivityData, setShowActivityData] = useState(false);
  const classes = useStyles();

  const fetchActivities = () => {
    fetch("https://openwod-api.azurewebsites.net/activities")
    .then(res => res.json())
    .then(
      (result) => {
        setActivities(result);
      }
    )
  }
  
  useEffect(() => {
    fetchActivities();
  }, [])

  const handleShowActivity = (e) => {
    setShowActivityData(activities[e.currentTarget.dataset.id]);
    setShowActivityOpen(true);
  }

  const handleCloseShowActivity = () => {
        setShowActivityOpen(false);
  }

  const act = activities.map((a, index) => (
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
        <CreateActivity addActivity={fetchActivities}/>
    </div>
  );
}

export default Activities;
