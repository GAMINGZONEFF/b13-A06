import React from 'react';
import { TbTriangleInverted } from 'react-icons/tb';
import ImgBanner from '../../../B13-A6-DigiTools-Platform/assets/banner.png'

const Hero = () => {
    return (
        <div className='w-11/12 mx-auto flex gap-15 my-21 '>
            <div className='space-y-10 mt-20'>
                <div className='bg-indigo-100 rounded-3xl px-2 w-1/2 flex justify-center items-center '>
                    <div className="w-4 h-4 rounded-full bg-radial from-indigo-600 via-indigo-600/40 to-transparent"></div>

                    <h1 className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent p-2'>New: AI-Powered Tools Available</h1>   
                </div>

                <h1 className='text-7xl  font-extrabold'>Supercharge Your <br />Digital Workflow</h1>

                <p className='text-[18px] text-[#627382]'>
                    Access premium AI tools, design assets,       templates, and productivity <br/>
                    software—all in one place. Start creating faster today. <br />

                    Explore Products
                </p>

                <div className='flex gap-2'>
                     <button className='btn bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-6'>Explore Product</button>

                    <button className='flex items-center gap-2 border-2 border-indigo-400 px-2 py-2 rounded-3xl font-semibold'>
    
                      
                      <TbTriangleInverted className="text-indigo-600 " /> 
    
                      
                      <span className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                              Watch Demo
                     </span>

                    </button>

               </div>

            </div>

            <div>
                <img src={ImgBanner} alt="" />
            </div>
            

           
            
        </div>
    );
};

export default Hero;