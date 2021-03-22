import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {
  props.setIsLoggedIn(false);
  
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}

export default Logout;
