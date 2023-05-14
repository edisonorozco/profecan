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
                    <text x="50%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-size="40px" font-weight="bold">Nosotros</text>
                </svg>

                <div className='content'>
                    <div className='about'>
                        <p>
                            La corporación Profecan es una entidad sin ánimo de lucro que se constituyo en 2023
                        </p>
                    </div>

                    <div className='about_description'>
                        <p>
                            En la base del grupo de voluntarios (anteriormente ángel guardián canino y felino) del albergue municipal de La Ceja. La corporación se crea con la necesidad de dotar de personería jurídica al grupo de voluntarios y con ello lograr alianzas estratégicas con otras entidades que trabajen por el bienestar animal.

                            El voluntariado nació en el año 2010 por iniciativa de un grupo de jóvenes estudiantes que cada domingo asistían a asear los espacios de los animales, a brindarles un paseo y a estar pendiente de la alimentación; este grupo de voluntarios fue asumiendo además tareas de veeduría que fueron importantes para los desenlaces que se tienen hoy con el centro de bienestar animal.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}