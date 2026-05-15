import React, { use } from 'react';
import { useState } from 'react'
import ProductSection from '../ProductSection/ProductSection';
import Cart from '../Cart/Cart';

const CardHeading = ({CardPromise,buy,setBuy }) => {
    const CardData = use(CardPromise)
    const [purple,setPurple] = useState("yes");
  
    return (
        <div className='mx-auto w-11/12 mt-20 text-center space-y-5 mb-10'>

            <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
            <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p> 

             <div className='bg-[#62738220] p-1 w-52 rounded-3xl mx-auto space-x-2  '>

                <button onClick={()=>setPurple("yes")}
                 className={` rounded-3xl p-2 px-4 ${purple ==="yes" ? " bg-linear-to-r from-indigo-600 to-purple-600 text-white "   : "rounded-r-none border-r-0"} `}>Products</button>
                <button 
                 onClick={()=>setPurple("no")}
                 className={` rounded-3xl p-2 px-4 ${purple ==="no" ? " bg-linear-to-r from-indigo-600 to-purple-600 text-white "  : "rounded-l-none border-l-0"} `} >Carts({buy.length})</button>
            </div>
            { purple === "yes" ? (<ProductSection CardData ={CardData} buy={buy} setBuy= {setBuy}></ProductSection>) : (<Cart buy={buy} setBuy={setBuy}></Cart>)}

           
        </div>
    );
};

export default CardHeading;