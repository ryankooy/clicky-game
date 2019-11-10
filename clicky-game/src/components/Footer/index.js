import React from 'react';

const stylings = {
  color: 'dark red',
  fontFamily: 'Playfair Display',
  textAlign: 'center',
  backgroundColor: 'black',
  height: '50px'
};

function Footer() {
  return (
    <div style={stylings}>
      <p>created by Ryan Kooy</p>
    </div>
  );
}

export default Footer;
