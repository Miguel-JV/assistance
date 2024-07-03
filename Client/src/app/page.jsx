'use client'
// imagen de next
import Image from "next/image";

// Componentes
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// Movimiento de frames
import {easeInOut, motion} from 'framer-motion'


// variantes
import {fadeIn} from '../components/variants.js'
import Transition from "@/components/Transition";



export default function Home(){
  return (
    <div className="bg-primary/60 h-full">
      <Transition />

      {/* Texto */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* Titulo */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial = 'hidden'
            animate= 'show'
            exit='hidden'
            className="h1"
          >
            <span className="text-teal-500">ASSISTANCE</span>
          </motion.h1>
          {/* Sutitulos */}

          <motion.p 
            variants={fadeIn('down', 0.3)}
            initial = 'hidden'
            animate= 'show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Gestion y control de recursos humanos.
          </motion.p>

          {/* Boton */}
          <div className ="flex justify-center xl:hidden relative">
            <ProjectBtn />
          </div>

          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial = 'hidden'
            animate= 'show'
            exit='hidden'
            className=" hidden xl:flex"
          >
            <ProjectBtn />
          </motion.div>
        
        </div>
      </div>
      {/*imagen */}

      <div className=" w-[1100px] h-full absolute right-0 bottom-0">
        {/*imagen de fondo*/}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>  
          {/* Particulas */}
          <ParticlesContainer />

        {/* Logo */}
        <motion.div
        variants={fadeIn('up', 0.5)}
        initial = 'hidden'
        animate= 'show'
        exit='hidden'
        transition={{duration: 1, ease:easeInOut}}
        className="logo w-full h-full b- max-w-[400px] max-h-[400px] absolute -bottom-32 lg:-bottom-0 lg:right-[30%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

