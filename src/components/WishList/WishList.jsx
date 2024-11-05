import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";

const WishList = ({ product }) => {
    const { product_id, product_image, product_title, description, price } = product;
    return (
        <div className='m-10 rounded-xl px-5 border border-gray-200  flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <img className='rounded-2xl h-[300px] w-[300px]' src={product_image} alt="" />
                <div className='flex flex-col '>
                    <h3 className='font-bold'>{product_title}</h3>
                    <p>{description}</p>
                    <h4 className='font-bold'>Price: ${price}</h4>

                    <button className='bg-primary mt-3 text-white border w-1/3 border-primary rounded-[32px] px-3 py-2 '>Add to Cart</button>

                </div>
            </div>
            <button>
            <TiDeleteOutline className='text-red-400 text-5xl' />

            </button>
     

        </div>
    );
};

export default WishList;

