import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';

const Simple = () => {
    return (
        
              <div className=' my-5 md:my-20 md:py-20 space-y-10'>
            
                        <div className='text-center space-y-5 px-5 md:px-0'>
                            <h1 className='text-5xl text-[#101727] font-extrabold'>Simple, Transparent Pricing</h1>
                            <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            
                        </div>
            
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12 mx-auto '>

                        <div className='bg-[#F9FAFC] p-5 rounded-2xl space-y-5 border-gray-200 border flex flex-col'>
            
                           <div>
                            <h1 className='text-2xl text-[#101727] font-bold'>Starter</h1>
                           
                                       <p className='text[#627382]'>Perfect for getting started</p>
                           </div>
                           
                                       <h1>
                                           <span className='text-2xl font-bold'>0$</span>
                                           <span className='text[#627382]'>/Month</span> 
                                       </h1>
                           
                                       

                                        <div className='space-y-2 flex-1'>
                                       
                                            <p className='flex gap-1 items-center '> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           Access to 10 free tools
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           Basic templates
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           Community support
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           1 project per month
                                           
                                       </p>

                                       
                                       
                                       </div>
                           
                                      
                           
                                       <button className='btn text-white w-20/21 rounded-3xl p-6 font-bold bg-linear-to-r from-indigo-600 to-purple-600  '>Get Started Free</button>
                           
                            
            
                        </div>
                        
                        <div className='bg-linear-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-2xl space-y-5 border-gray-200 border flex flex-col relative'>

                            <div className='bg-[#FEF3C6] text-[#BB4D00] rounded-3xl p-1 w-30 text-center h-8 absolute -top-4 left-1/2 -translate-x-1/2'>
                               Most Popular

                            </div>
                              
            
                           <div>
                            <h1 className='text-2xl  font-bold'>Pro</h1>
                           
                                       <p className='text[#62738280] '>Best for professionals</p>
                           </div>
                           
                                       <h1>
                                           <span className='text-2xl font-bold'>$29</span>
                                           <span className='text[#627382] '>/Month</span> 
                                       </h1>
                           
                                       <div className='space-y-2 flex-1'>
                                            <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Access to all premium tools
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Unlimited templates
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Priority support
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Unlimited projects
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                         Cloud sync
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                         Advanced analytics
                                           
                                       </p>
                                       </div>
                           
                                      
                           
                                       <button className='btn bg-white w-20/21 rounded-3xl p-6 font-bold   shadow-none'> 
                                            <span className='bg-linear-to-r from-indigo-600 to-purple-600   bg-clip-text text-transparent'>
                                                Get Started Free
                                            </span>
                                        </button>
                           
                            
            
                        </div>
                        
                        <div className='bg-[#F9FAFC] p-5 rounded-2xl space-y-5 border-gray-200 border'>
            
                           <div>
                            <h1 className='text-2xl text-[#101727] font-bold'>Enterprise</h1>
                           
                                       <p className='text[#627382]'>For teams and businesses</p>
                           </div>
                           
                                       <h1>
                                           <span className='text-2xl font-bold'>99$</span>
                                           <span className='text[#627382]'>/Month</span> 
                                       </h1>
                           
                                       <div className='space-y-2'>
                                            <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Everything in Pro
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           Team collaboration
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                           Custom integrations
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          Dedicated support
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                          SLA guarantee
                                           
                                       </p>
                                       <p className='flex gap-1 items-center'> 
                                           <AiOutlineCaretRight className='text-green-500'></AiOutlineCaretRight>
                                         Custom branding
                                           
                                       </p>
                                       </div>
                           
                                      
                           
                                       <button className='btn text-white w-20/21 rounded-3xl p-6 font-bold bg-linear-to-r from-indigo-600 to-purple-600 '>Get Started Free</button>
                           
                            
            
                        </div>
                        
                     </div>
            
        </div>
    );
};

export default Simple;