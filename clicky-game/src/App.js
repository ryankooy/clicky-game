import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ImgGrid from './components/ImgGrid';
import Footer from './components/Footer';
import Tile from './components/Tile';
import tiles from './tiles.json';

class App extends Component {
  state = {
    tiles
  };

  // handleShuffle = e => {
  //   e.preventDefault();
  //   const order = this.state.tiles.map(tile => (
  //     Math.floor(Math.random() * 12)
  //   ))
  // };

  // state = {
  //   username: "",
  //   password: ""
  // }

  // handleInputChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit = event => {
  //   const { username, password } = this.state;
  //   event.preventDefault();
  //   alert(`username: ${username}, password: ${password}`);
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <ImgGrid>
          {this.state.tiles.map(tile => (
            <Tile
              id={tile.id}
              key={tile.id}
              onClick={tile.handleShuffle}
              image={tile.image}
            />
          ))}
        </ImgGrid>
        <Footer />
      </div>
    );
  }
}

export default App;
