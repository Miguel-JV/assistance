'use client'
import {Particles} from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react';
import { loadSlim } from 'tsparticles-slim';

const ParticlesContainer = () => {
  // Inicio
  const particulasIniciales = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particulasCargadas = useCallback(async () => {}, []);
  return (
    <Particles 
      id='tsparticles' 
      init = { particulasIniciales} 
      loaded = {particulasCargadas}
      className='w-full h-full absolute translate-z-0'

      options={{
        fullScreen : {enable:false},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit:120,
        interactivity: {
          events:{
            onClick:{
              enable: false,
              mode: 'push',
            },
            onHover:{
              enable:true,
              mode:'repulse',
            },
            resize:true, 
          },
          modes:{
            push:{
              quantity:90
            },
            repulse: {
              distance: 100,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value:'#ecf2f0',
          },
          links:{
            color: '#7bd2e3',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable:true,
          },
          move:{
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              // mas area mejor ram
              area: 800
            },
            value:80,
          },
          opacity:{
            value: 0.5,
          },
          shape: {
            type:'circle',
          },
          size: {
            value: { min: 1, max: 5},
          },
        },
        detectRetina: true,
      }}
    />
  );
};


export default ParticlesContainer;
