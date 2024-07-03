// Imagen de Next
import Image from "next/image";

// Link de Next
import Link from "next/link";

// Iconos
import { HiArrowRight } from "react-icons/hi2"; 

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link 
      href={'/dashboard'} 
      // bg-circleStar 
      className="relative w-[185px] h-[185px] flex justify-center items-center  bg-cover bg-no-repeat group">
        <Image
          src = {'/btn.png'}
          width={141}
          height={141}
          alt= "Boton rotatorio"
          priority={true}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[141px]" 
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
    </div>
  )
};

export default ProjectsBtn;
