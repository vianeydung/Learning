import React from 'react';

const Home = (props) => {
  console.log(props.match.params.abc);
  
  return (
    <div>
      <h1> Home Page</h1>
    </div>
  );
};

export default Home;