import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Que te gustaria saber!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/voluntariado.jpg'
              text='Participa en nuestra fundación'
              label='Voluntariado'
              path='/services'
            />
            <CardItem
              src='images/donaciones.jpg'
              text='Dona alimanetos, mediciona para los perritos'
              label='Donaciones'
              path='/products'
            />
            <CardItem
              src='images/acerca-de.jpg'
              text='Quieres saber mas sobre nuestra fundación'
              label='Historia'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
