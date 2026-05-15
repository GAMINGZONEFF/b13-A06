import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-20 pb-5'>

            <div className='grid grid-cols-2 md:grid-cols-6 gap-10 w-11/12 mx-auto'>
                  <div className='space-y-4 col-span-2'>

                <h1 className='text-white font-semibold text-2xl'>DigiTools</h1>
                <p className='leading-6 text-[#FFFFFF80]'> 
                    Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.

                </p>
            </div>

            <div className='text-[#FFFFFF80] space-y-3'>
               <h1 className='text-[#FFFFFF] font-medium text-[20px]'> Product</h1>
               <p>Features</p>
               <p>Pricing</p>
               <p>Templates</p>
               <p>Integrations</p>
            </div>

            <div className='text-[#FFFFFF80] space-y-3'>
               <h1 className='text-[#FFFFFF] font-medium text-[20px]'> Company</h1>
               <p>About</p>
               <p>Blog</p>
               <p>Careers</p>
               <p>Press</p>
            </div>

            <div className='text-[#FFFFFF80] space-y-3'>
               <h1 className='text-[#FFFFFF] font-medium text-[20px]'> Resources</h1>
               <p>Documentation</p>
               <p>Help Center</p>
               <p>Community</p>
               <p>Contact</p>
            </div>

            <div className='space-y-3'>
                <h1 className='text-white font-semibold text-[20px]'>Social Links</h1>

                <div className='flex gap-2'>

                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                       <FaFacebook />
                    </div>
                    <div className='bg-white w-10 h-10 rounded-full flex justify-center items-center'>
                          <FaXTwitter/>
                    </div>

                    
                   
                  
               

                </div>
            </div>
            </div>

            <div className='border-b border-gray-400 mx-auto w-11/12 my-10'>

            </div>
            <div className=' mx-auto w-11/12 text-[#FAFAFA50] flex justify-between text-[12px]'>

            
                <h1>© 2026 Digitools. All rights reserved.</h1>

                <div className='flex gap-10'>
                    <h1>Privacy</h1>
                    <h1>  Terms of Service   </h1>
                    <h1>Cookies</h1>
                </div>
            

            </div>

            
        

          
            
        </div>
    );
};

export default Footer;