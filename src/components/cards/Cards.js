import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¿Qué te gustaría hacer?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/VOLUNTARIADO2.jpeg'
              text='Sé voluntario en PROFECAN'
              label='Voluntariado'
              path='/services'
            />
            <CardItem
              src='images/DONACIONES2.jpeg'
              text='Haz tus donaciones'
              label='Donaciones'
              path='/products'
            />
            <CardItem
              src='images/SERVICIOS2.jpeg'
              text='Conoce nuestros servicios'
              label='Servicios'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
