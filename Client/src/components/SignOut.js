'use client'
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";

export default function signOutButton(){

    return(
        <button onClick={() => signOut()} className="mt-1.5">
            <IoMdLogOut />
        </button>
    )
}