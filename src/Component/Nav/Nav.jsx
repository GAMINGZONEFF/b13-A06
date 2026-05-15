import React, { useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { TiThMenu } from 'react-icons/ti';


const Nav = ({buy}) => {
    const [menu ,setMenu ] =useState(false)
    return (
        <div className='border-b border-b-gray-500 p-2 sticky top-0 z-50 bg-white md:p-5'>
            <div className='w-11/12 mx-auto flex justify-between items-center '>
               <div className='flex gap-1 justify-center items-center'>
                <span className='md:hidden' onClick={()=>setMenu(!menu)}>
                    {
                        menu ? 
                         <ImCross></ImCross> :
                        
                        <TiThMenu></TiThMenu>
                    }
                     <ul className={`lg:hidden absolute duration-1000  ${menu? 'top-15' : '-top-50'} glass rounded-xs p-1 space-y-0.5 text-black ` }>
                              <li className='hover:bg-accent px-1'>Products</li>
                              <li className='hover:bg-accent px-1'>Features</li>
                              <li className='hover:bg-accent px-1'>Pricing</li>
                              <li className='hover:bg-accent px-1'>Testimonials</li>
                              <li className='hover:bg-accent px-1'>Faq</li>
                    </ul>
                    
                </span>
                   <h1 className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl sm:text-2xl font-bold'>
                         DigiTools
                  </h1>
              </div>
              <div>
                 <ul className='lg:flex gap-8 hidden'>
                      <li className='text-[#101727] font-semibold'>Products</li>
                      <li className='text-[#101727] font-semibold'>Features</li>
                      <li className='text-[#101727] font-semibold'>Pricing</li>
                      <li className='text-[#101727] font-semibold'>Testimonials</li>
                      <li className='text-[#101727] font-semibold'>faq</li>
                 </ul>
              </div>
              <div className='flex gap-5 justify-center items-center relative'>
                  <div className='-ml-1'><FaCartArrowDown></FaCartArrowDown></div>
                 {buy.length > 0 && (
                       <div className="absolute -top-1 -left-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg border-2 border-white animate-bounce">
                              {buy.length}
                     </div>
                  )}
                  <h1>Log in</h1>
                  <div className=' hidden md:block'>
                    <button className='btn bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl text-white '>Get Started</button>
                  </div>
                  

            </div>
            
        </div>
        </div>
    );
};

export default Nav;