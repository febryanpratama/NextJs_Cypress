"use client"
import AuthRepository from '@/core/repositories/Auth/AuthRepository'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { SyntheticEvent, useState } from 'react'

type Props = {}

export interface DataLogin {
    username: string
    password: string
}

function page({}: Props) {

    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function submitForm(e: SyntheticEvent){

        e.preventDefault()

        let data: DataLogin = {
            username: username,
            password: password
        }

        // console.log(data)
        let fetch = await AuthRepository.register(data)

        if(fetch){
            router.push('/dashboard')
        }else{
            alert('Register failed')
        }

    }

  return (
    <div className='w-full h-screen bg-red-100 flex items-center justify-center'>
        <div className='w-1/3 h-auto bg-blue-300 text-black rounded-2xl p-4'>
            <div className='text-center text-3xl font-bold tracking-widest'>
                REGISTER
            </div>
            <div className='text-center text-xl text-gray-500 font-bold tracking-widest'>
                Enter your username and password
            </div>
            <hr className='my-4' />

            {/* input  */}

            <form onSubmit={submitForm}>
                <div className='flex flex-col mt-4'>
                    <label htmlFor='username' className='text-lg px-1 font-semibold text-gray-500'>Username</label>
                    <input 
                    type='text' 
                    id='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-2 mt-1 bg-white rounded-lg border-2 border-gray-100' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor='password' className='text-lg px-1 font-semibold text-gray-500'>Password</label>
                    <input 
                        type='password' 
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='p-2 mt-1 bg-white rounded-lg border-2 border-gray-100' />
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <input type='checkbox' id='remember' className='mr-2' />
                        <label htmlFor='remember' className='text-sm font-semibold text-gray-500'>Remember me</label>
                    </div>
                    <Link href='/login' className='text-sm font-semibold text-blue-500'>have account ? Login</Link>
                </div>
                <button type='submit' className='w-full bg-blue-500 text-white rounded-lg p-2 mt-4'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default page