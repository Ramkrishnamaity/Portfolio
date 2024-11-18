
import { signIn } from "@/auth"
import React from 'react'
import { FcGoogle } from "react-icons/fc";


const Login = () => {

  async function SignIn() {
    "use server"
    await signIn("google")
  }

  return (
    <div className='w-[98%] sm:w-[400px] tracking-widest text-lg space-y-8'>
      <h1 className='text-center font-medium text-3xl mb-10 cursor-pointer'>Login</h1>
      <button
        className='bg-softWhite dark:bg-softBlack w-full rounded-2xl flex gap-4 justify-center items-center p-3'
        onClick={SignIn}
      >
        <span><FcGoogle size={25} /></span> Log in with Google
      </button>
    </div>
  )
}

export default Login