import './globals.css';

// fuentes
import { Sora } from '@next/font/google'

// configuracion de fuentes
const sora  = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

// componentes
import Header from '../components/Header'
import Transition from '../components/Transition'



export default function RootLayout ({children}){
  return(
    <html lang="es">
      <body >
        <Header />
        <Transition />
        
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
          {children}
        </div>

      </body>
    </html>
  ); 
};


