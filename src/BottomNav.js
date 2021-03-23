import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const BottomNav = (props) => {
  const [currentNavID, setCurrentNavID] = useState(0);
  
  const useStyles = makeStyles({
    root: {
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
        value={currentNavID}
        onChange={(event, newValue) => {
          setCurrentNavID(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
          component={Link} 
          to="/activities" 
          label="Activities" 
          icon={<ListIcon />}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/gyms" 
          label="Gyms" 
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/members" 
          label="Members" 
          icon={<PeopleIcon />} 
        />
        <BottomNavigationAction 
          onClick={() => props.setIsLoggedIn(false)}
          label="Log Out" 
          icon={<ExitToAppIcon />} 
        />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav;
