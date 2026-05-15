import React  from 'react';
import Cards from '../Cards/Cards';


const ProductSection = ({CardData, buy ,setBuy}) => {
   
   

    

   
    return (

        <>
            
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 my-10 gap-5'>

            {
            CardData.map(cardInfo =>
                <Cards
                 key={cardInfo.id}
                 cardInfo ={cardInfo}
                 buy={buy}
                 setBuy={setBuy}
                 ></Cards>
            )
            }

            
        </div>


        </>

        
        
    );
};

export default ProductSection;