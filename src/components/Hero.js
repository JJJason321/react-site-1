import React from "react";

import Button from "./Button";
import '../App.css'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <Button
          className="btns"
          buttonStyles="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyles="btn--Primary"
          buttonSize="btn--large"
        >
          Watch TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
