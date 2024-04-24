// "use client";
import React from 'react'
import Image from 'next/image'

export default function page() {

  //     const router = useRouter();
  // const{
  //     handleSubmit,
  //     formState :{error},
  //     register

  // }=useForm();

  return (
    <div>



      <div className=' bg-white shadow-lg w-[1150px] h-[480px] mt-20 ml-[130px]'>

        {/* logo */}

        <div>
          <Image src={"/assets/icons/logo.svg"} width={150} height={30} className="  pt-5 ml-5" />
        </div>


        <div className='flex'>



          <div className='w-[700px] h-[360px] '>
            <form action="" className=' mt-12 ml-12  flex p-8'>


              <div>
                <div>

                  <label htmlFor="">First Name</label><br />

                  <input type="email" name='email' id='email' placeholder='Enter Your Name' className=' p-2 w-[270px] h-[40px] rounded-lg border' />



                </div><br />


                <div>
                  <label htmlFor="">Email</label><br />

                  <input type="email" name='email' id='email' placeholder='Email' className=' p-2 w-[270px] h-[40px] rounded-lg border' />
                </div><br />

                <div>
                  <label htmlFor="">Password</label><br />

                  <input type="password" name='password' id='password' placeholder='Password' className=' p-2 w-[270px] h-[40px] rounded-lg border' />
                </div>

              </div>





              <div className=' pl-12'>

                <div>

                  <label htmlFor="">Last Name</label><br />

                  <input type="email" name='email' id='email' placeholder='Enter Your Name' className=' p-2 w-[270px] h-[40px] rounded-lg border' />



                </div><br />


                <div>
                  <label htmlFor="">Gender</label><br />

                  <select id="gender" name="gender" className='w-[270px] h-[40px] rounded-lg border'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select> </div><br />

                <div>
                  <label htmlFor=""> Confirm Password</label><br />

                  <input type="password" name='password' id='password' placeholder=' Confirm Password' className=' p-2 w-[270px] h-[40px] rounded-lg border' />
                </div>
              </div>


            </form>


            <button type="button" class="text-white  w-[120px] ml-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
          </div>



          <div>
            <Image src={"/assets/icons/sign-up.svg"} width={350} height={140} className="  pt-5 ml-20" />
          </div>

        </div>



      </div>

    </div>
  )
}
