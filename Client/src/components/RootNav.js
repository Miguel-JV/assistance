// 'use client'

import { isStaticGenBailoutError } from "next/dist/client/components/static-generation-bailout";
import { isNotFoundError } from "next/dist/client/components/not-found";
import { isRedirectError } from "next/dist/client/components/redirect";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// icons
import {
  HiHome,
  HiUser
} from 'react-icons/hi2';


import { FaRegEye, FaUserCircle } from "react-icons/fa";

// componente
import SignOut from '../components/SignOut'

async function Navbar() {
  var session 
  try {
    session = await getServerSession(authOptions);
    // console.log(session);
  } catch (error) {
    if (isDynamicServerError(error)) {
      throw error;
    }
  }

  return (
    <>
    {/* Barra de Navegacion Condicional */}
    
      {!session?.user ? (
        <>
          <div className="flex items-center gap-x-5 text-lg">
            <ul className="flex gap-x-2"> 
              <li className="text-teal-50 hover:text-teal-500 transsition-all duration-300">
              <Link href="/"> <HiHome /></Link>
              </li>
              <li className="text-teal-50 hover:text-teal-500 transsition-all duration-300">
              <Link href="/auth/register"> <HiUser/> </Link>
              </li>
              <li className="text-teal-50 hover:text-teal-500 transsition-all duration-300">
              <Link href="/reconocimiento"> <FaRegEye /> </Link>
              </li>
            </ul>
          </div>
      </>
      )
      : (
      <>
        <div className="flex items-center gap-x-5 text-lg">
            <ul className="flex gap-x-2"> 
              <li className="text-teal-400 ">
                {session.user.name}
              </li>
              
              <li className="text-teal-400 mt-1.5">
                  <FaUserCircle />
              </li>
              
              <li className="text-teal-50 hover:text-teal-500 transsition-all duration-300">
                <SignOut />
              </li>
              
            </ul>
          </div>
      </>
      )}
    </>
  );
}

export default Navbar;
