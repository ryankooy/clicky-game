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

  handleShuffle = data => {
    let i = data.length - 1;

    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
      console.log('i', i);
      console.log('data', data);
    }

    return data;
  }

  handleClick = event => {
    console.log('It clicked!');
    let thisId = event.target.id;
    let clicked = this.state.clicked;
    let score = this.state.score + 1;
    console.log(thisId);
    console.log(clicked);
    console.log(score);

    if (clicked.includes(thisId)) {
      this.setState({
        score: 0,
        clicked: false
      });
      this.startOver();
    } else {
      this.setState({
        score,
        clicked
      });
    }

    let topScore = score > this.state.topScore ? score : this.state.topScore;
    this.setState({ topScore });

    this.handleShuffle(this.state.tiles);
  }

  startOver = () => {
    const resetData = this.state.tiles.map(item => ({ ...item, clicked: false }));

    return this.handleShuffle(resetData);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Navbar>
          <h1>Score: <strong>{this.state.score}</strong>  |  High Score: <strong>{this.state.topScore}</strong></h1>
          <p>{this.state.umpire}</p>
        </Navbar>
        <ImgGrid>
          <div className="container img-grid">
            {this.state.tiles.map((tile, i) => (
              <Tile
                id={tile.id}
                key={i}
                image={tile.image}
                onClick={this.handleClick}
                // handleClick={this.handleClick}
                // handleIncrement={this.handleIncrement}
                // handleShuffle={this.handleShuffle}
                // startOver={this.startOver}
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
