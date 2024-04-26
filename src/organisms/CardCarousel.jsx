import React from 'react';
import itemImg from '../assets/Items/item_img.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemCard from '../molecules/ItemCard';

function CardCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (

        <div className='w-full p-9'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <ItemCard></ItemCard>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        name:`Long Frock`,
        img:"/Items/item_img.jpg",
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    },
    {
        name:`Long Frock`,
        img:`/Items/item_img.jpg`,
        price:`Rs.2500`,
        stock:10
    }
]

export default CardCarousel;