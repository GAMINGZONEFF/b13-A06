import React from 'react';



const Transform = () => {
    return (
        <div className=' bg-linear-to-r from-indigo-600 to-purple-600 p-20 text-white text-center space-y-5'>

            <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>

            <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

            <div>
                <button className='btn rounded-3xl bg-white   shadow-none' >
                    
                    <span className='bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent '>
                        Explore More
                     </span> </button>
                <button className='ml-5 btn rounded-3xl bg-transparent text-white shadow-none '>View Pricing </button>
            </div>

            <p>14-day free trial • No credit card required • Cancel anytime</p>

           
            
            
        </div>
    );
};

export default Transform;