import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';


const Nav = ({buy}) => {
    return (
        <div className='border-b border-b-gray-500 p-5 sticky top-0 z-50 bg-white'>
            <div className='w-11/12 mx-auto flex justify-between items-center '>
               <div>
                   <h1 className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-2xl font-bold'>
                         DigiTools
                  </h1>
              </div>
              <div>
                 <ul className='flex gap-8'>
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
                  <button className='btn bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl text-white'>Get Started</button>

            </div>
            
        </div>
        </div>
    );
};

export default Nav;