import React from 'react';
import BackgroundImage from './wil-headshot.jpg';

function ThankYou() {

  const divStyle = {
    color: 'White',
    backgroundImage:  `url(${BackgroundImage})` ,
    backgroundSize: 'cover',
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    opacity: '0.65'
  };

  const container = {
    backgroundColor: '#111',
    textAlign: 'center',
    fontWeight: '400',
    paddingTop: '20px',
    paddingBottom: '20px'
  };

  const span = {
    fontFamily: 'LATO',
    fontSize: '65px',
    fontWeight: '400',

  };

  return (
    
    <div style={divStyle}>
      <div style={container}>
      <span style={span}>Thank You and Get Ready to Become Art...</span>
      </div>
    </div>
  );
}

export default ThankYou;