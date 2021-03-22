import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const BottomNav = (props) => {
  const [value, setValue] = useState(0);
  
  const useStyles = makeStyles({
    root: {
      /* width: 500, */
      width: '100%',
      position: 'fixed',
      bottom: 0,
      backgroundColor: '#f2f2f2',
    },
  });
  
  const classes = useStyles();

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
          component={Link} 
          to="/activities" 
          label="Activities" 
          icon={<ListIcon />} />
        <BottomNavigationAction 
          component={Link} 
          to="/gyms" 
          label="Gyms" 
          icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Members" icon={<PeopleIcon />} />
        <BottomNavigationAction 
          component={Link} 
          to="/logout" 
          label="Log Out" 
          icon={<ExitToAppIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
