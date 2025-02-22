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
  // { name: 'Principal', path: '/', icon: <HiHome /> },
  // { name: 'Usuario', path: '/about', icon: <HiUser /> },
  { name: 'Clases', path: '/clases', icon: <HiRectangleGroup /> },
  { name: 'Asistencias', path: '/asistencias', icon: <HiViewColumns /> }
];
// Link de next
import Link from 'next/link';

// router de next
import { usePathname, useRouter } from 'next/navigation';


const Nav = () => {
  const router = usePathname();
  const pathname = router
  return (
    <nav
    className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16  xl:max-w-md xl:h-screen'
    >
      {/* inner */}
      <div
      className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40  xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'
      >
        {navData.map((link, index) => {
          return (
          <Link
            className= {`${
              link.path === pathname && 'text-teal-500'
            } relative flex items-center group hover:text-teal-500 transsition-all duration-300 `}
            href = {link.path}
            key = {index}
          > {/* herramientas*/ } 
          <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
              
              <div className='text-[12px] leading-none font-semibold capitalize'>
              {link.name}
              </div>
              {/* triangulo */}

              <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'>
              </div>
            </div>
          </div>
          {/* icono */}
          
          <div> {link.icon} </div>
          </Link>
        
        )
        })}

      </div>

    </nav>
  )};

export default Nav;
