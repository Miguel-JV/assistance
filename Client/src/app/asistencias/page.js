'use client';
//Componentes
import ImgSlider from '../../components/ImgSlider'
import Nav from '../../components/Nav'
import Transition from '@/components/Transition'
import Bulb from '../../components/Bulb'


// Movimiento del frame
import {motion} from 'framer-motion'
import { fadeIn } from '../../components/variants'

// Iconos
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket
} from "react-icons/rx";  

// Datos de Asistencia
const asistenciasUsuario = {
  turnos: [
    {
      grupos: [
        {
          turno: 'Matutino',
          grupo: '8S1',
          path: '/img/D-1.jpg',
        },
        {
          turno: 'Matutino',
          grupo: '8S1',
          path: '/img/D-1.jpg',
        },
        {
          turno: 'Matutino',
          grupo: '8S1',
          path: '/img/D-1.jpg',
        },
        {
          turno: 'Matutino',
          grupo: '8S1',
          path: '/img/D-1.jpg',
        },
      ],
    },
    {
      grupos: [
        {
          turno: 'Vespetino',
          grupo: '8S3',
          path: '/img/N-1.jpg',
        },
        {
          turno: 'Vespetino',
          grupo: '8S3',
          path: '/img/N-1.jpg',
        },
        {
          turno: 'Vespetino',
          grupo: '8S3',
          path: '/img/N-1.jpg',
        },
      ],
    },
  ],
};

const Asistencias = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Nav />
      <Transition />
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial = 'hidden'
              animate= 'show'
              exit='hidden'
              className="h2 xl:mt-12">
                Mis Asistencias <span className="text-teal-500">.</span>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial = 'hidden'
            animate= 'show'
            exit='hidden' 
          className='w-full xl:max-w-[65%]'>

            {/* slider */ }
            <ImgSlider asistencias = {asistenciasUsuario} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Asistencias;
