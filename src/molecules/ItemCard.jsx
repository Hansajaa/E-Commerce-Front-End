import React from "react";
import itemImg from "../assets/Items/item_img.webp";

function ItemCard({imageUrl, name, price, quantity, description}) {

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
          <div className="flex flex-col">
            <p className="font-semibold text-xl">{name}</p>
            <p className="text-sm">{description}</p>
            <p className="mt-2">Rs.{price}</p>
            <p>Qty : {quantity}</p>
          </div>
          <div className="flex flex-col my-3">
            <button className="bg-[#0e4047] px-6 py-1 rounded-lg hover:scale-105 duration-500 ">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
