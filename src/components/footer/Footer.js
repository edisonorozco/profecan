import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Somos una corporación sin ánimo de lucro
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Conócenos</h2>
            <Link to='/about'>Nosotros</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/contact'>Contacto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nuestras redes sociales</h2>
            <Link to='https://www.instagram.com/profe_can/?igshid=MzRlODBiNWFlZA%3D%3D' target='blank_'>Instagram</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Profecan
              <i class='bx bxl-baidu'></i>
            </Link>
          </div>
          <small class='website-rights'>Profecan © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='bx bxl-facebook' ></i>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='bx bxl-instagram' ></i>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='bx bxl-youtube' ></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='bx bxl-twitter'></i>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='bx bxl-linkedin' ></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
