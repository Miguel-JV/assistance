'use client'
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";


const ParticlesBackrgound = ({ children }) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);

        // LOAD ANY ONE 
        // await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
      <>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}

          options={{
              fullScreen : {
                enable: true,
                // zIndex: -1
              },
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
                    duration: 0.2,
                  },
                },
              },
              particles: {
                color: {
                  value:'#ecf2f0',
                },
                links:{
                  color: '#7bd2e3',
                  distance: 100,
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
        {children}
      </>
    )
}

export default ParticlesBackrgound