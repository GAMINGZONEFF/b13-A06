import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { toast,Bounce } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

// Image imports
import writing from '../../../B13-A6-DigiTools-Platform/assets/products/writing_2327400 1.png'
import design from '../../../B13-A6-DigiTools-Platform/assets/products/design-tool.png'
import operation from '../../../B13-A6-DigiTools-Platform/assets/products/operation.png'
import portfolio from '../../../B13-A6-DigiTools-Platform/assets/products/portfolio.png'
import social from '../../../B13-A6-DigiTools-Platform/assets/products/social-media.png'

const imgMap = {
    writing: writing,
    design : design,
    operation : operation,
    portfolio : portfolio ,
    social: social,
};

const badgeColor = {
    Popular: "bg-pink-100 text-pink-800 border-pink-300",
    Trending: "bg-purple-100 text-purple-800 border-purple-300",
    New: "bg-sky-100 text-sky-800 border-sky-300"
};

const Cards = ({ cardInfo, buy, setBuy }) => {
    const { title, description, price, badge, imgSrc, features } = cardInfo;
     
    const isAlreadySelected = buy.some(item => item.id === cardInfo.id);

    const handleClicked = () => {
        if (!isAlreadySelected) {
            setBuy([...buy, cardInfo]);
           
            toast.success(`${title} is added to the Cart!`, {
                          position: "top-left",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                          transition: Bounce,
                          });
        }
    };

    return (
        <div className='p-2 border border-gray-200 rounded-2xl pl-6 space-y-4 pb-5 flex flex-col bg-white'>
            <div className='flex justify-between'>
                <div className='w-15 h-15 rounded-full border border-gray-200 flex justify-center items-center mt-5'>
                    <img src={imgMap[imgSrc]} alt="" />
                </div>
                <div className={`rounded-3xl p-1 w-23.75 text-center h-8 ${badgeColor[badge]}`}>
                    {badge}
                </div>
            </div>

            <div className='text-left space-y-3'>

            <h1 className='text-2xl text-[#101727] font-bold'>{title}</h1>
            <p className='text-[#627382]'>{description}</p>

            <h1>
                <span className='text-2xl font-bold'>{price}</span>
                <span className='text-[#627382]'>/Mo</span> 
            </h1>
            </div>


            <div className='space-y-1 flex-1'>
                {features.map((ft, index) => (
                    <p key={index} className='flex gap-1 items-center'> 
                        <AiOutlineCaretRight className='text-green-500' />
                        {ft}
                    </p>
                ))}
            </div>

            <button 
                onClick={handleClicked}
                disabled={isAlreadySelected}
                className={`btn w-20/21 rounded-3xl p-6 font-bold ${
                    isAlreadySelected 
                        ? "bg-green-400 text-gray-600" 
                        : "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                }`}
            >
                {isAlreadySelected ? "Added to cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default Cards;