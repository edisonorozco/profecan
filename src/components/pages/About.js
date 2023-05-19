import React from 'react';
import '../../App.css';
import Footer from '../footer/Footer';

export default function About() {
    return (
        <>
            <div className='my-container'>

                <svg xmlns="http://www.w3.org/2000/svg" className='wave'
                    viewBox="0 0 1440 320">
                    <path fill="#1c1b1b"
                        fill-opacity="1" d="M0,320L60,288C120,256,240,192,360,160C480,128,600,128,720,154.7C840,181,960,235,1080,224C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                    <text x="50%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="40px" font-weight="bold">Sobre nosotros</text>
                </svg>

                <div className='content'>
                    <div className='about'>
                        <p>
                            La corporación PROFECAN es una entidad sin ánimo de lucro que tiene como misión promover el bienestar animal, la tenencia responsable y la proteeción del medio ambiente a través de asesoría, divulgación, rescate de fauna, estelirización masiva, promoción de normatividad y defensa de los derechos animales, en colaboración con diversas organizaciones y sectores.
                        </p>
                    </div>

                    <div className='about_description'>
                        <p>
                            
                            <br /> SERVICIOS 
                            <br />  • Hogar de paso o refugio para animales en situación de vulnerabilidad. 
                            <br />  • Jornadas de vacunación y esterilización masivas.  <br /> • Jornadas de adopción de mascotas.  <br /> • Educación y sensibilización sobre tenencia responsable de mascotas.  <br /> • Atención y rescate de fauna silvestre. 
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}