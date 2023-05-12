import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>Corporación profecan</h1>
      <p>Te gustaria saber mas de nosotros <br />o ayudar?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Nosotros
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Adopciones
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
