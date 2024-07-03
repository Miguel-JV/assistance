"use client";
import { useForm } from "react-hook-form";
import { signIn, signOut } from "next-auth/react";

import {useRouter} from 'next/navigation'
import {useState, useEffect} from 'react'


// Componentes
import Transition from "@/components/Transition";
import ParticlesBackrgound from "../../../components/ParticlesBackrgound";


function LoginPage() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      nocontrol: data.nocontrol,
      contra: data.contra,
      redirect: false,
    });

    console.log(res)

    if (res.error) {
      setError(res.error)
    } else {
      router.push('/clases')
      router.refresh()
    }
  });

  return (

    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      
      <Transition />
      <ParticlesBackrgound >
      <form onSubmit={onSubmit} className="w-1/4 absolute">

        {error && (
          <p className="text-red-500 text-xs mb-2">{error}</p>
        )}

        <h1 className="text-slate-200 font-bold text-4xl mb-4">Ingresar</h1>

        <label htmlFor="nocontrol" className="text-slate-500 mb-2 block text-sm">
          Numero de Control:
        </label>
        <input
          type="text"
          {...register("nocontrol", {
            required: {
              value: true,
              message: "El numero de control es requerido.",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="201064080"
        />

        {errors.nocontrol && (
          <span className="text-red-500 text-xs">{errors.nocontrol.message}</span>
        )}

        <label htmlFor="contra" className="text-slate-500 mb-2 block text-sm">
          Contraseña:
        </label>
        <input
          type="password"
          {...register("contra", {
            required: {
              value: true,
              message: "Contraseña Requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        {errors.contra && (
          <span className="text-red-500 text-xs">
            {errors.contra.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Ingresar
        </button>
      </form>
      </ParticlesBackrgound>
      
    </div>
  );
}
export default LoginPage;
