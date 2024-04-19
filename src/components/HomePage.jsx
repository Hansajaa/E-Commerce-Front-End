"use client";

import {Carousel} from 'flowbite-react'
import bannerImg1 from '../assets/home_page_asserts/banner1.webp'
import bannerImg2 from '../assets/home_page_asserts/banner2.webp'

function HomePage() {
    return (
        <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-10 m-3">
            <Carousel>
                <div className="flex h-full items-center justify-center">
                    <img src={bannerImg1} alt="" srcset="" />
                </div>
                <div className="flex h-full items-center justify-center">
                    <img  src={bannerImg2} alt="" srcset="" /> 2
                </div>
            </Carousel>
        </div>
    );
}

export default HomePage;


