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
    tiles,
    count: 0,
    score: 0,
    topScore: 0
  };

  startOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }, () => {
        console.log(this.state.topScore);
      });
    }

    this.state.tiles.forEach(tile => {
      tile.count = 0;
    });

    this.setState({ score: 0 });
    return true;
  }

  handleClicks = () => {
    tiles.count = tiles.count + 1;
    this.setState({ score : this.state.score + 1 });
    this.state.tiles.sort(() => Math.random() - 0.5);
    return true; 
  }

  render() {
    return (
      <div className="app">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Navbar />
        <ImgGrid>
          <div className="container img-grid">
            {this.state.tiles.map(tile => (
              <Tile
                id={tile.id}
                key={tile.id}
                onClick={tile.handleIncrement}
                image={tile.image}
              />
            ))}
          </div>
        </ImgGrid>
        <Footer />
      </div>
    );
  }
}

export default App;
