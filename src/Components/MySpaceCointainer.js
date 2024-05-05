import React from 'react'

const Login = () => {
  return (
    <div className="login-container">
      <img src={'/images/my_space.png'} alt="My Space" className="login-image" />
      <h1 className="login-title">Login to Disney+ Hotstar</h1>
      <p className="login-subtitle">Start watching from where you left off, personalise for kids and more</p>
      <button className="login-button">Log In</button>
    </div>
  );
};

const MySpaceContainer = () => {
  return (
    <div className="myspace-container">
      <Login />
    </div>
  );
};

export default MySpaceContainer;