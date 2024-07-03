// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'Principal', path: '/', icon: <HiHome /> },
  // { name: 'Usuario', path: '/about', icon: <HiUser /> },
  { name: 'Clases', path: '/clases', icon: <HiRectangleGroup /> },
  { name: 'Asistencias', path: '/asistencias', icon: <HiViewColumns /> }
];

// Imagen de Next
import Image from "next/image";

// Link de Next
import Link from "next/link";

// Componentes
import RootNav from './RootNav';


const Header = () => {
  return( 
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[80px]">
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}

          <Link href={'/'} className="flex ">
            <Image 
              src={'/avatar.svg'} 
              width={50} 
              height={50}
              alt='Logo'
              priority={true}
            />
            <h1 className="h3 mt-5">
              <span className="text-teal-500">SSISTANCE</span>
            </h1>
          </Link>

          <RootNav />

        </div>

      </div>
      
      </header>
)
};

export default Header;
