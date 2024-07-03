// Componente swiper de react
import { Swiper, SwiperSlide } from "swiper/react";

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// modulos requeridos
import { Pagination} from 'swiper/modules';

// Imagen de next
import Image from "next/image";

// Iconos
import { RxArrowTopRight } from "react-icons/rx";  
import { BsArrowRight } from "react-icons/bs";  
import Link from "next/link";


export function ImgSlider ({asistencias}) {
  
  return (
    <Swiper 
      spaceBetween={10}
      pagination = {{
        clickable: true
      }}

      modules={ [Pagination] }
      className ='h-[280px] sm:h-[480px]'  
    >
      {asistencias.turnos.map((turnos, index) => {
          return(
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-row-2 gap-4 cursor-pointer">
                { turnos.grupos.map((grupos, index)=>{
                  return(
                    <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group"> 
                      <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* imagen */}
                      <Image src={grupos.path} width={400} height={200} alt="imagen de la materia"/>
                        {/* gradiente */}

                        <div className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#f36ef7] to-[#6260fd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* titulo */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:-xl-translate-y-20 transition-all duration-300">
                          <div className="flex ite gap-x-2 text-[13px] tracking-[0.2em]"> 
                            {/* titulo parte 1 */}
                            <div className="delay-100"  style={{ textTransform: 'uppercase'}}>
                              {grupos.turno}
                            </div>
                            {/* titulo parte 2*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            {grupos.grupo}
                            </div>
                            {/* icono */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                  }) 
                } 
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ImgSlider;
