import React from 'react';

const State = () => {
    return (
        <div className='bg-linear-to-r from-indigo-600 to-purple-600 p-6 md:p-15'>

            <div className='grid grid-rows-1 gap-5 md:grid-cols-3 mx-auto w-11/12 justify-items-center text-center '>

              <div className='space-y-3'>
                <h1 className='ext-2xl md:text-6xl text-white font-bold md:font-extrabold'>50K+</h1>
                <p className='text-white text-left'>Active Users</p>
              </div>

              <div className='space-y-3 relative '>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8/12 bg-slate-300 -ml-10"></div>

                 
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8/12 bg-slate-300 -mr-10"></div>

                <h1 className='ext-2xl md:text-6xl text-white font-bold md:font-extrabold'>200+</h1>
                <p className='text-white text-left'>Premium Tools</p>
              </div>

              <div className='space-y-3'>
                <h1 className='text-2xl md:text-6xl text-white font-bold md:font-extrabold'>4.9</h1>
                <p className='text-white text-left'>Rating</p>
              </div>

            </div>
            
        </div>
    );
};

export default State;