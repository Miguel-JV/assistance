// Componente swiper de react
import { Swiper, SwiperSlide } from "swiper/react";

// Link de React 
import Link from "next/link";

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// modulos requeridos
import {FreeMode, Pagination} from 'swiper/modules';

// Iconos
import { RxArrowTopRight } from "react-icons/rx";  


export function TextSlider ({clases}) {
  
  return (
    <Swiper 
    breakpoints = {{
      320: {
        slidesPerView:1,
        spaceBetween:15
      },

      640: {
        slidesPerView:3,
        spaceBetween:15
      },
      }}
    
      freeMode = {true}
      pagination = {{
        clickable: true
      }}

      modules={[FreeMode, Pagination]}
      className ='h-[240px] sm:h-[340px]'  
    >
      {
        clases.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <Link href={'/asistencias'}>
                <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                  {/* icono */}
                  <div className="text-4xl text-teal-500 mb-4"> {item.icon} </div>
                  {/* titulo y descripcion */}
                  <div className="mb-8">
                    <div className="mb-2 text-lg">{item.title}</div>
                    <p className="max-w-[350px] leading-normal">
                      {item.description}
                    </p>
                  </div>
                  {/* flecha */}
                  <div className="text-xl">
                    <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-teal-500 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default TextSlider;
