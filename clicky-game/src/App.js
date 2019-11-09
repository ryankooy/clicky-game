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
    clicked: []
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 })
    
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }

  handleShuffle = data => {
    let i = data.length - 1;

    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }

    return data;
  }

  handleClick = id => {
    if (!this.state.clicked) {
      this.handleIncrement();
      this.handleShuffle(id);
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.startOver();
    }
  }

  startOver = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });

    const resetData = this.state.tiles.map(item => ({ ...item, clicked: false }));

    return this.handleShuffle(resetData);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Navbar>
          Score: {this.state.score}  |  High Score: {this.state.topScore}
        </Navbar>
        <ImgGrid>
          <div className="container img-grid">
            {this.state.tiles.map(tile => (
              <Tile
                id={tile.id}
                key={tile.id}
                image={tile.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleShuffle={this.handleShuffle}
                startOver={this.startOver}
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
