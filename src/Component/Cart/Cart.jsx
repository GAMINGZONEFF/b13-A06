import React from 'react';
import { toast,Bounce } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import writing from '../../../B13-A6-DigiTools-Platform/assets/products/writing_2327400 1.png'
import design from '../../../B13-A6-DigiTools-Platform/assets/products/design-tool.png'
import operation from '../../../B13-A6-DigiTools-Platform/assets/products/operation.png'
import portfolio from '../../../B13-A6-DigiTools-Platform/assets/products/portfolio.png'
import social from '../../../B13-A6-DigiTools-Platform/assets/products/social-media.png'
const imgMap = {
    writing: writing,
    design : design,
    operation : operation,
    portfolio :portfolio ,
    social: social,

    
};


const Cart = ({buy,setBuy}) => {
    const handleCheck = () => {
        setBuy([]);
        toast('Congratulation! You have successfully Purchase the Product', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
    }
    const handleRemove = (pr,ind) =>{
        const updateCart =buy.filter((_,index)=>index !==ind);
        setBuy(updateCart)
        toast.warn(`${pr.title} is removed from the Cart!`, {
                   position: "top-left",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: false,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
                   transition: Bounce,
                   });

    }
    const totalPrice = buy.reduce((total, item) => {
      
        const numPrice = typeof item.price === 'string' 
            ? parseFloat(item.price.replace(/[^0-9.]/g, '')) 
            : item.price;
        return total + numPrice;
    }, 0);
    return (
        <div className='w-11/12 bg-white border  border-[#4E5660] rounded-2xl mx-auto p-5'>

            

            {
              buy.length ===0 ? (
                <div className='p-15    text-center space-y-10 text-purple-900'>
                    <h1 className='text-3xl font-bold'>Your Cart is Empty</h1>
                    <h1 className='text-2xl font-semibold'>Because, no Product is selected</h1>
                    <h1 className='text-xl font-semibold'>First select a Product  from the Product section to purchase</h1>
                </div>
              ) : (
                <div className=' space-y-5 '>
                    <h1 className='text-left text-2xl text-purple-600 font-semibold'>Your Cart</h1>
                    {buy.map((pr,ind)=>{
                    return <div key={ind} className=' bg-[#F9FAFC] rounded-2xl p-1 px-5 flex justify-between items-center'>

                        <div className='flex '>

                            <div className='flex gap-5 justify-center items-center'>
                                  <div className='w-15 h-15 rounded-full border border-gray-200 flex justify-center items-center  mt-5'>
                                        <img  src={imgMap[pr.imgSrc]} alt="" />

                                  </div>

                                  <div className='flex flex-col'>
                                    <h1 className='text-xl font-semibold'>{pr.title}</h1>
                                    <h1 className='mr-auto text-green-500'>{pr.price}</h1>

                                  </div>

                                 
                            </div>

                        </div>

                        <button 
                        onClick={() => handleRemove(pr,ind)}
                        
                        className='text-red-600'>Remove</button>
                        

                    </div>

                    
                }
                
              )
            }
            <div className='flex justify-between px-5 text-red-600'>
                <h1 className='font-semibold'>Total:</h1>
                <h1 className='font-semibold'>${totalPrice.toFixed(2)}</h1>
            </div>
            <button 
            onClick={()=>handleCheck()}
              className='btn  w-full rounded-full p-7 text-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white'>Proceed to CheckOut</button>
                </div>
                
            
          )
        }
           
            
        </div>
    );
};

export default Cart;