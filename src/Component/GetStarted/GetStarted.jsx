import React from 'react';
import Img01 from '../../../B13-A6-DigiTools-Platform/assets/user.png'
import Img02 from '../../../B13-A6-DigiTools-Platform/assets/package.png'
import Img03 from '../../../B13-A6-DigiTools-Platform/assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] my-20 py-20 space-y-10'>

            <div className='text-center space-y-5'>
                <h1 className='text-5xl text-[#101727] font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto '>

                <div className='rounded-2xl  border-2 border-gray-400 p-3'>
                      <div className='rounded-full w-10 h-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white flex justify-center items-center ml-auto'>
                          <h1>01</h1>
                     </div>

                     <div className='flex flex-col gap-5 items-center p-5'>

                        <div className='w-25 h-25 bg-purple-200 rounded-full flex items-center justify-center'>
                            <img src={Img01} alt="" />
                        </div>
                        

                        <h1 className='text-2xl font-bold text-[#101727]'>Create Account</h1>
                        <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>

                     </div>

                
            </div>
                <div className='rounded-2xl  border-2 border-gray-400 p-3'>
                      <div className='rounded-full w-10 h-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white flex justify-center items-center ml-auto'>
                          <h1>02</h1>
                     </div>

                     <div className='flex flex-col gap-5 items-center p-5'>

                        <div className='w-25 h-25 bg-purple-200 rounded-full flex items-center justify-center'>
                            <img src={Img02} alt="" />
                        </div>
                        

                        <h1 className='text-2xl font-bold text-[#101727]'>Choose Products</h1>
                        <p className='text-[#627382] text-center'>Browse our catalog and select the tools that fit your needs.</p>

                     </div>

                
            </div>
                <div className='rounded-2xl  border-2 border-gray-400 p-3 pb-5'>
                      <div className='rounded-full w-10 h-10 bg-linear-to-r from-indigo-600 to-purple-600 text-white flex justify-center items-center ml-auto'>
                          <h1>03</h1>
                     </div>

                     <div className='flex flex-col gap-5 items-center p-7'>

                        <div className='w-25 h-25 bg-purple-200 rounded-full flex items-center justify-center'>
                            <img src={Img03} alt="" />
                        </div>
                        

                        <h1 className='text-2xl font-bold text-[#101727]'>Start Creating</h1>
                        <p className='text-[#627382] text-center'>Download and start using your premium  tools immediately.</p>

                     </div>

                
            </div>

            </div>
            
        </div>
    );
};

export default GetStarted;