import React from 'react';

const Box = () => {
  return (
    <div>
      My Home Box
    </div>
  );
}


const Home = () => {
  return (
    <div>
      My Home
      <Box />
    </div>
  );
}

export default Home;
