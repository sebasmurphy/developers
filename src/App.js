import React, { Component } from "react";
import "./App.css";
import { Developers, Ballmer, images } from "./Ballmer";
import sounds from "./Sound";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballmers: []
    };
    this.ballmerKey = 0;
    this.sounds = sounds;
    this.imgCounter = 0;
    this.audioCounter = 0;
    this.ballmers = [];
    this.images = images;
    this.generateBallmer = this.generateBallmer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.footerClick = this.footerClick.bind(this);
  }
  footerClick(e) {
    e.stopPropagation();
  }
  handleClick(e) {
    let x;
    let y;
    e.stopPropagation();
    if (e.type === "touchstart") {
      x = e.originalEvent.touches[0].pageX;
      y = e.originalEvent.touches[0].pageY;
      this.generateBallmer(x, y);
      alert(x + "yes" + y);
    } else if (e.type === "click") {
      x = e.pageX;
      y = e.pageY;
      this.generateBallmer(x, y);
    }
  }
  generateBallmer(centerX, centerY) {
    centerX = centerX - 100;
    centerY = centerY - 100;
    this.sounds[this.audioCounter].play();
    if (this.audioCounter >= this.sounds.length - 1) {
      this.audioCounter = 0;
    } else {
      this.audioCounter++;
    }
    if (this.imgCounter >= this.images.length - 1) {
      this.imgCounter = 0;
    } else {
      this.imgCounter++;
    }
    const style = {
      position: "absolute",
      top: `${centerY}px`,
      left: `${centerX}px`
    };
    let { ballmers } = this.state;
    ballmers = [
      ...ballmers,
      <Ballmer
        key={this.ballmerKey++}
        image={images[this.imgCounter]}
        imgStyle={style}
      />
    ];
    this.setState({
      ballmers
    });
  }
  render() {
    return (
      <div
        className="App"
        onClick={this.handleClick}
        onTouchStart={this.handleClick}
      >
        <Developers ballmers={this.state.ballmers} />
        <Footer onClick={this.footerClick} onTouchStart={this.footerClick} />
      </div>
    );
  }
}

export default App;
