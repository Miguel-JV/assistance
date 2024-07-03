'use client';

//Componentes
import TextSlider from '../../components/TextSlider'
import Circles from '../../components/Circles'
import Nav from '../../components/Nav'
import Transition from '@/components/Transition'

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


// Datos de clase
const clasesUsuario = [
  {
    icon: <RxCrop />,
    title: 'Gest. de Proy. de Software',
    description: 'DEL VALLE NUÑEZ JOSE LUIS',
  },
  {
    icon: <RxPencil2 />,
    title: 'Prog. Lógica y Funcional',
    description: 'Sin Asignar',
  },
  {
    icon: <RxDesktop />,
    title: 'Inteligencia Artificial',
    description: 'NUÑEZ RAMIREZ ANGEL',
  },
  {
    icon: <RxReader />,
    title: 'Admon. de Redes',
    description: 'DEL VALLE NUÑEZ JOSE LUIS',
  },
  {
    icon: <RxRocket />,
    title: 'Tópicos Selectos de Desarrollo',
    description: 'TACUBEÑO CRUZ HORACIO JESUS',
  },
  {
    icon: <RxRocket />,
    title: 'Desarrollo BackEnd',
    description: 'PINEDA MORALES SERGIO ARMANDO',
  },
  {
    icon: <RxRocket />,
    title: 'Taller de Investigación II',
    description: 'TAPIA DE LA ROSA ERIKA',
  },
];

const Clases = () => {
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
              className="h2 xl:mt-8">
                Mis clases <span className="text-teal-500">.</span>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial = 'hidden'
            animate= 'show'
            exit='hidden' 
          className='w-full xl:max-w-[65%]'>

            {/* slider */}
            <TextSlider clases={clasesUsuario} />
          </motion.div>
        </div>
      </div>
      <Circles />
    </div>
  )
};

export default Clases;
