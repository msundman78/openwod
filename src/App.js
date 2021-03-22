import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import {useState} from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import BottomNav from "./BottomNav";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout";
import Gyms from "./Pages/Gyms";
import Activities from "./Pages/Activities/Activities"



function App() {
  const [name, setName] = useState("Start");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    history.push('/login');
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
          <Route path="/gyms"><Gyms name={name} updateName={setName}/></Route>
          <Route path="/activities"><Activities /></Route>
          <Route path="/login" ><Login handleLogIn={setIsLoggedIn}/></Route>
          <Route path="/logout" ><Logout setIsLoggedIn={setIsLoggedIn}/></Route>
          <Route path="/"><Redirect to="/login" /></Route>
        </Switch>
        {isLoggedIn && <BottomNav handleLogOut={handleLogOut}/>}
      </Router>
    </div>
  );
}

export default App;
