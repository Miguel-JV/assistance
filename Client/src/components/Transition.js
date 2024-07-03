'use client';

// movimiento de frames
import { animate, motion } from "framer-motion"; 

// variantes
const variantesTransicion = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: ' 0%',
    width: '0%', 
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}


const Transition = () => {
  return (
    <>
      <motion.div 
      className='fixed top-0 right-full w-screen h-screen z-30 bg-[rgba(25,26,35,255)]' 
      variants={variantesTransicion}
      initial = 'initial'
      animate = 'animate'
      exit= 'exit'
      transition = {{ delay:0.1,
                      duration:0.3,
                    ease: 'easeInOut'}}
      ></motion.div>
      
      <motion.div 
      className='fixed top-0 right-full w-screen h-screen z-20 bg-[rgba(25,26,35,0.70)]' 
      variants={variantesTransicion}
      initial = 'initial'
      animate = 'animate'
      exit= 'exit'
      transition = {{ delay:0.2,
                      duration:0.3,
                    ease: 'easeInOut'}}
      ></motion.div>
      
      <motion.div 
      className='fixed top-0 right-full w-screen h-screen z-10 bg-[rgba(25,26,35,0.50)]' 
      variants={variantesTransicion}
      initial = 'initial'
      animate = 'animate'
      exit= 'exit'
      transition = {{ delay:0.3,
                      duration:0.3,
                    ease: 'easeInOut'}}
      ></motion.div>
    </>
  );
};

export default Transition;
