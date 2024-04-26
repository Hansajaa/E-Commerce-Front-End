import React from 'react';
import itemImg from '../assets/Items/item_img.jpg'

function ItemCard() {
    return (
        <div>
            <div className="block rounded-lg p-3 shadow-sm shadow-indigo-100 mt-10 m-4 text-white">
                <img
                    alt=""
                    src={itemImg}
                    className="h-80 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <div className='flex flex-col'>
                        <p className='font-semibold text-xl'>Long Frock</p>
                        <p className='mt-2'>Rs.2500</p>
                        <p>Qty : 10</p>
                    </div>
                    <div className='flex flex-col my-3'>
                        <button className='bg-[#0e4047] px-6 py-1 rounded-lg hover:scale-105 duration-500 '>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;