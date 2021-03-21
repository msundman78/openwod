import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Name from "./Pages/Name";
import Activities from "./Pages/Activities/Activities"

const useStyles = makeStyles({
  root: {
    /* width: 500, */
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#f2f2f2',
  },
});

function App() {
  const [name, setName] = useState("Start");
  const classes = useStyles();
  const [value, setValue] = useState(0);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/name"><Name name={name} updateName={setName}/></Route>
          <Route path="/activities"><Activities /></Route>
          <Route path="/"><Redirect to="/activities" /></Route>
        </Switch>
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
            to="/name" 
            label="Gyms" 
            icon={<FitnessCenterIcon />} />
          <BottomNavigationAction label="Members" icon={<PeopleIcon />} />
          <BottomNavigationAction label="Log Out" icon={<ExitToAppIcon />} />
      </BottomNavigation>
      </Router>
    </div>
  );
}

export default App;
