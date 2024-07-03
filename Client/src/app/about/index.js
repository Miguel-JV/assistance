// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// componentes 
import Circles from '/components/Circles'

// iconos
import {BsArrowRight} from 'react-icons/bs'

// movimiento del frame
import {motion} from 'framer-motion'

// variantes
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* texto y forma */}
        <div className='flex flex-col w-full max-w-[700px] bg-gray-500/10'>
          {/* texto */}
          <h2 className='h2 text-center mb-12'>
            <span className='text-teal-500'>Ingresar</span>
          </h2>
          {/* formulario */}

          
          <form>
            {/* grupo */}
          </form>
        </div>

      </div>
    </div>
  )
};

export default Contact;
