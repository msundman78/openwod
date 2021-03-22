import React from 'react';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './Login.css';

const Login = (props) => {
  let history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const newFormData = {...formData, [e.target.id]: e.target.value};
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    props.handleLogIn(true);
    history.push('/activities');
  }

  return (
    <div className="Login">
      <form className="form">
        <TextField margin="dense" id="email" label="E-mail" value={formData.gym} 
          onChange={handleChange} fullWidth autoFocus
        />
        <TextField margin="dense" id="password" label="Password" value={formData.password} 
          onChange={handleChange} fullWidth type="password" 
        />
        <Button variant="contained" type="button" color="primary" 
          className="login-button" onClick={handleSubmit}
        >
          Log in
        </Button>
      </form>
    </div>
  );

}

export default Login;
