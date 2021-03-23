import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Activities from "./Pages/Activities/Activities"
import Gyms from "./Pages/Gyms/Gyms";
import Members from "./Pages/Members/Members";
import Login from "./Pages/Login/Login";
import BottomNav from "./BottomNav";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  function PrivateRoute ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return isLoggedIn === true
          ? children
          : <Redirect to='/login' />
      }} />
    )
  }

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              OpenWOD
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <PrivateRoute path="/activities"><Activities /></PrivateRoute>
          <PrivateRoute path="/gyms"><Gyms /></PrivateRoute>
          <PrivateRoute path="/members"><Members /></PrivateRoute>
          <Route path="/login" ><Login setIsLoggedIn={setIsLoggedIn}/></Route>
          <Route path="/"><Redirect to="/login" /></Route>
        </Switch>
        {isLoggedIn && <BottomNav setIsLoggedIn={setIsLoggedIn}/>}
      </Router>
    </div>
  );
}

export default App;
