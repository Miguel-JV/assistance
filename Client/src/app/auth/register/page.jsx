"use client";
import Link from 'next/link';

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Componentes
import Transition from "@/components/Transition";
import ParticlesBackrgound from "../../../components/ParticlesBackrgound";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState('')


  const onSubmit = handleSubmit(async (data) => {
    
/* */

  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      nocontrol: data.nocontrol,
      contra: data.contra,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resJSON = await res.json()
  setError(resJSON.mensaje)


  if (res.ok) {
    router.push("/auth/login");
  }
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center ">
      <Transition />
      <ParticlesBackrgound>
        <form onSubmit={onSubmit} className="w-1/4 absolute">
          {/* Mensaje de error */}
          <span className="text-red-500 text-xs ">
              {error}
          </span>

          <h1 className="text-slate-200 font-bold text-4xl mb-4">Registro</h1>
          

          <label htmlFor="nocontrol" className="text-slate-500 mb-2 block text-sm">
            Numero de Control:
          </label>
          <input
            type="text"
            {...register("nocontrol", {
              required: {
                value: true,
                message: "Numero de Control es Requerido",
              },
            })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="201064080"
          />

          {errors.nocontrol && (
            <span className="text-red-500 text-xs">
              {errors.nocontrol.message}
            </span>
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
            placeholder="********"
          />
          {errors.contra && (
            <span className="text-red-500 text-sm">
              {errors.contra.message}
            </span>
          )}

          <span className="text-sky-400 text-xs">
          <Link href="/auth/login"> ¿Ya tienes una cuenta? </Link>
          </span>

          <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
            Registar
          </button>
        </form>
      </ParticlesBackrgound>
    </div>
  );
}
export default RegisterPage;
