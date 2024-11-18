"use client"

import React, { ChangeEvent, useState } from 'react'
import { GoEye, GoEyeClosed } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { ImSpinner9 } from 'react-icons/im';

const SignUp = () => {

  const router = useRouter()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [disable, setDisable] = useState<boolean>(false)

  function clickHandler() {
    setShowPassword((prev) => !prev)
  }

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  // async function signUpHandler(formData: FormData) {
  //   try {
  //     setDisable(true)

  //     const email = formData.get("email") as string
  //     const password = formData.get("password") as string
  //     const firstName = formData.get("firstName") as string
  //     const lastName = formData.get("lastName") as string
  //     const otp = formData.get("otp") as string


  //     const responce = await siginup({ email, password, otp, firstName, lastName })

  //     if(responce.status) {
  //       setDisable(false)
  //       setIsOtpSent(false)
  //       toast.success(responce.message)
  //       router.push('/dashboard')
  //     } else {
  //       toast.error(responce.message)
  //       setDisable(false)
  //       setIsOtpSent(false)
  //     }
  //   } catch (error) {
  //     setDisable(false)
  //     setIsOtpSent(false)
  //     console.log(error)
  //   }
  // }

  // async function sendOtpHandler() {
  //   try{

  //     if(email === "") {
  //       toast.error("Email field is required.")
  //     } else {
  //       // const responce = await sendotp({email})
  //       if(responce.status) {
  //         setIsOtpSent(true)
  //         toast.success(responce.message)
  //       } else {
  //         toast.error(responce.message)
  //       }
  //     }

  //   } catch(error) {
  //     console.log(error)
  //   }
  // }


  return (
    <div className='w-[98%] sm:w-[400px] tracking-widest text-lg space-y-8'>
      <h1 className='text-center font-medium text-3xl mb-10 cursor-pointer'>ℝ𝕙𝕪𝕥𝕙𝕞𝕔𝕙𝕒𝕥</h1>
      <form className='space-y-10'>
        <div className='space-y-3'>
          <div className='sm:flex-row flex flex-col gap-1'>
            <div className='w-full space-y-2'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' name='firstName' readOnly={disable} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
            </div>
            <div className='w-full space-y-2'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' name='lastName' readOnly={disable} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
            </div>
          </div>
          <div className='w-full space-y-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={email} onChange={changeHandler} readOnly={isOtpSent} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
          </div>
          <div className='w-full space-y-2 relative'>
            <label htmlFor='password'>Password</label>
            <input type={showPassword ? 'text' : 'password'} readOnly={disable} name='password' className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
            <span className='absolute right-3 bottom-3' onClick={clickHandler}>
              {
                showPassword ? <GoEyeClosed size={20} /> : <GoEye size={20} />
              }
            </span>
          </div>

          <div className='flex gap-1'>
            <div className='w-full'>
              <label htmlFor='otp'>OTP</label>
              <div className='flex gap-1'>
                <input type='text' name='otp' readOnly={disable} className='bg-softWhite dark:bg-softBlack w-full p-3 rounded-lg shadow-md outline-none dark:text-softWhite text-softBlack text-sm tracking-wider' required={true} />
                <div className='w-full p-3 flex gap-2 justify-center items-center'>
                  {
                    isOtpSent && <span className='text-[#00FF00]'><IoIosCheckmarkCircle size={25} /></span>
                  }
                  <button className='text-center text-sm cursor-pointer'
                    disabled={disable}
                  >
                    {
                      isOtpSent ? "Sent" : "Send Otp"
                    }
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button type='submit' disabled={disable} className='bg-richBlue w-full py-3 rounded-2xl shadow-sm flex gap-4 justify-center items-center'>
          <span>
            {
              disable && <ImSpinner9 size={20} className='animate-spin' />
            }
          </span>
          Register
        </button>
      </form>
      <div className='space-y-5'>
        <p className='text-center text-sm opacity-70'>Or Sign up with</p>
        <button
          disabled={disable}
          className='bg-softWhite dark:bg-softBlack w-full cursor-pointer rounded-2xl flex gap-4 justify-center items-center p-3'
        >
          <span><FcGoogle size={25} /></span> Sign up with Google
        </button>
        <p className='text-center text-sm opacity-70'>Already registerd? <Link href="/login" className='text-richBlue'>Log in</Link></p>
      </div>
    </div>
  )

}

export default SignUp