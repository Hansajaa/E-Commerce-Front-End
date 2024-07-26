import React, { useState } from "react";
import itemImg from "../assets/Items/item_img.webp";
import addCart from '../assets/Items/add-cart.png'
import ProductRatings from "../atoms/ProductRatings";
import notFavourite from '../assets/Items/favourite1.png'
import favourite from '../assets/Items/favourite2.png'

function ItemCard({ imageUrl, name, price, quantity, description }) {

  const [isFavourite, setFavourite] = useState(false);

  return (
    <div>
      <div className="block rounded-lg p-3 shadow-sm shadow-indigo-100 mt-10 m-4 text-white">
        {/* <img
                    alt=""
                    src={imageUrl}
                    className="h-96 w-full rounded-md object-cover"
                /> */}
        <iframe
          src={imageUrl}
          className="h-96 w-full rounded-md object-cover"
          allow="autoplay"
        ></iframe>

        <div className="mt-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-xl">Rs.{price}</p>
              <p className="mt-2">{name}</p>
              {
                  quantity > 0 ? <p className="mt-2 text-green-400">In Stock</p> :
                                <p className="mt-2 text-red-600">Out Of Stock</p>
              }
              <ProductRatings/>
              {/* <p className="text-sm">{description}</p> */}
            </div>

            {/* <div className="flex flex-col items-end text-right -mt-2">
              <p>Qty : {quantity}</p>
            </div> */}
          </div>
          <div className="flex justify-end my-3 gap-2">
            <button className="w-8" onClick={()=>{setFavourite(!isFavourite)}}>
                {!isFavourite ? <img src={notFavourite} alt="isFavourite" />:
                                <img src={favourite} alt="isFavourite" />}
                
            </button>
            <button className="w-8">
                <img src={addCart} alt="add to cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
