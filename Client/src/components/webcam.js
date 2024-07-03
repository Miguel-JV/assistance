import React, {useState} from "react";
import axios from "axios";
import Webcam from "react-webcam";

import { signIn, signOut } from "next-auth/react";
import {useRouter} from 'next/navigation'

// Componentes
import Transition from "@/components/Transition";
import ParticlesBackrgound from "@/components/ParticlesBackrgound";

const WebcamCapture = () =>{
    const webcamRef =React.useRef(null);
    const videoConstraints = {
        with:200,
        height:200,
        facingMode:'user'
    }//,
    const[name,setName] = useState('---')
    const router = useRouter()


    const capture =React.useCallback(
        async()=>{
            const imgSrc=webcamRef.current.getScreenshot();
            // Datos de Reconocimiento de Imagen
            // console.log(`imageSrc= ${imgSrc}`)
            const res = await axios.post('http://127.0.0.1:5000/api', {data:imgSrc})

                // Respuesta Tipo Objeto
                console.log(`Datos Recibidos: ${res.data}`)
                setName(res.data[0])
                
                if (res.data[3]) {
                    const respuesta = await signIn("credentials", {
                        nocontrol: res.data[1],
                        contra: res.data[2],
                        redirect: false,
                    });

                    if (respuesta.error) {
                        setError(respuesta.error)
                    } else {
                        router.push('/clases')
                        router.refresh()
                    }
                }

        },
        [webcamRef]
    );
    
    return(
        <div>
            <Transition />
            <ParticlesBackrgound >
            <div className="absolute inset-0 flex items-center justify-center  text-center flex-col">
                <Webcam
                    audio={false}
                    height={700}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={700}
                    videoConstraints={videoConstraints}
                    className="rounded-3xl shadow-2xl"
                    />
                <button onClick={capture} className="text-teal-500">RECONOCER</button>
                <h2 className="text-teal-500 ">{name}</h2>
            </div>
            </ParticlesBackrgound>
        </div>
    );
};
export default WebcamCapture