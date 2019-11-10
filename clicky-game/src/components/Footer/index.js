import React from 'react';

const stylings = {
  color: 'crimson',
  fontFamily: 'Playfair Display',
  textAlign: 'center',
  backgroundColor: 'black',
  zIndex: '2',
  borderTop: '2px solid white'
};

function Footer() {
  return (
    <div style={stylings}>
      <p>&copy; Ryan Kooy</p>
    </div>
  );
}

export default Footer;
