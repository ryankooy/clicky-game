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
    score: 0,
    topScore: 0,
    umpire: 'Try not to click the same character twice!'
  }; 

  handleShuffle = () => {
    let tile = this.state.tiles;
    let i = tile.length - 1;

    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tile[i];
      tile[i] = tile[j];
      tile[j] = temp;
      i--;
    }

    this.setState({
      tiles: tile
    });
  }

  handleClick = id => {
    console.log('It clicked!');

    let thisTile = this.state.tiles;
    let thisClicked = thisTile.find(tile => tile.id === id);
    let allClicked = thisTile.filter(tile => thisTile.clicked === true);
    console.log(allClicked);
    let score = this.state.score + 1;

    console.log(thisId);

    if (!thisClicked.clicked) {
      thisClicked.clicked = true;

      this.setState({
        umpire: 'That is some damn good coffee!',
        score,
        tiles: thisTile
      });
    } else if (allClicked === 12) {
      this.setState({
        umpire: "You won! A slice of Norma's cherry pie, on the house!",
        score: 0,
        topScore: this.state.topScore
      });
    } else {
      this.startOver();
    }

    let topScore = (score > this.state.topScore) ? score - 1 : this.state.topScore;
    this.setState({ topScore });

    this.handleShuffle(thisTile);
  }

  startOver = () => {
    const resetData = this.state.tiles.map(item => ({ ...item, clicked: false }));

    this.setState({
      umpire: 'Go Fire Walk it off.',
      score: 0,
      tiles: resetData
    });

    return this.handleShuffle(resetData);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Navbar>
          <h1>Score: <strong>{this.state.score}</strong>  |  High Score: <strong>{this.state.topScore}</strong></h1>
          <p><i>{this.state.umpire}</i></p>
        </Navbar>
        <ImgGrid>
          <div className="container img-grid">
            {this.state.tiles.map((tile, i) => (
              <Tile
                id={tile.id}
                key={i}
                tiles={tile}
                image={tile.image}
                onClick={() => this.handleClick(tile.id)}
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
