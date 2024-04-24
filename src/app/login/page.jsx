"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'


export default function page() {
    const router = useRouter()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
  
  


    return (
        <div>
            {/* login page */}
            <div className='flex w-[1100px] h-[660px] mt-8  ml-40 bg-white shadow-lg'>
                <div className=' h-[200px] w-[690px] ml-12'>
                    <div className='w-[320px] h-[90px] flex'>
                        <div className=' ml-9 mt-3 '>
                            <Image src={"/assets/icons/logo.svg"} width={150} height={30} className="  pt-5 ml-2" />

                        </div>
                    </div>
                    <div className=' w-[580px] h-[480px]'>
                        <form action="" className='w-[750px] h-[600px] p-12 ml-[60px]'>
                            <h1 className='  ml-2 text-xl' >Login</h1>
                            <div className='flex p-3'>
                                <input type="email" name='email' id='email' placeholder='Email' className=' p-2 w-[350px] h-[40px] rounded-lg border' onChange = {(event)=> setEmail(event.target.value)} />
                            </div>
                            <div className='flex p-3'>
                                <input type="password" name='password' id='password' placeholder='Password' className=' p-2 w-[350px] h-[40px] rounded-lg border' onChange = {(event)=> setPassword(event.target.value)}/>
                            </div>
                            <button type="button" class="text-white  w-[350px] ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => router.push('/todo-list')}>Login</button>
                            <p className=' ml-5'>did not have any acoount yet?
                                <Link href="/register" className='text-blue-600 hover:underline'>Register</Link>
                            </p>
                            <div className='flex mt-12 ml-3 text-gray-400'>
                                <hr className='w-[120px] mt-3' />Continue With <hr className=' w-[120px] mt-3' />
                            </div>

                            <button className=' text-gray-400 border p-2 w-[370px] rounded-lg mt-12'> Google</button>
                        </form>
                    </div>
                    <div>
                        <p className='text-gray-400 mt-12 ml-3'>© 2021 Todo_List. All rights reserved.</p>
                    </div>
                </div>
                <div className=' h-[650px] w-[750px]'>
                    <Image src={"/assets/icons/login.svg"} width={350} height={150} className="  pt-28 ml-8" />
                </div>
            </div>
        </div>
    )
}
