"use client";

import Navigation from '../common/NavigationBar'
import {Carousel} from 'flowbite-react'
import bannerImg1 from '../assets/home_page_asserts/banner1.webp'
import bannerImg2 from '../assets/home_page_asserts/banner2.webp'
import verifyImg from '../assets/home_page_asserts/verify.png'
import satisfiedImg from '../assets/home_page_asserts/satified.png'
import newArrivalImg from '../assets/home_page_asserts/new arrival.png'
import shippingImg from '../assets/home_page_asserts/shipping.png'
import ItemCard from '../molecules/ItemCard';
import CardCarousel from '../organisms/CardCarousel';

function HomePage() {
    return (
        <>
            <Navigation></Navigation>

            <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-10 m-3">

                <Carousel>
                    <div className="flex h-full items-center justify-center">
                        <img src={bannerImg1} alt="" srcset="" />
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img  src={bannerImg2} alt="" srcset="" /> 2
                    </div>
                </Carousel>


                <div className='text-white mt-20 flex'>
                    <div className='flex-col sm:block hidden'>
                        <pre className='md:text-xl sm:text-lg ml-10 font-bold'>
                            We provide best Customer <br />Experience</pre>
                    </div>

                    <div className='flex-col w-96 sm:block hidden'>

                    </div>
                    <div className='flex-col w-96 sm:block hidden'>

                    </div>

                    <div className='flex-col sm:block hidden'>
                        <pre>We ensure our customers have <br />best shopping experience</pre>
                    </div>
                </div>

                <div className='flex ml-6'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-[rgb(217,192,132)] rounded-xl md:w-20 md:h-20 w-14 h-14 flex items-center justify-center mt-16'>
                            <img className='md:w-16 w-10' src={verifyImg} alt="" />
                        </div>
                        <p className='text-white mt-3'>Original Products</p>
                    </div>
                    
                    <div className='felx flex-col w-60'>

                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-[rgb(217,192,132)] rounded-xl md:w-20 md:h-20 w-14 h-14 flex items-center justify-center mt-16'>
                            <img className='md:w-16 w-10' src={satisfiedImg} alt="" />
                        </div>
                        <p className='text-white mt-3'>Satisfaction Guarantee</p>
                    </div>

                    <div className='felx flex-col w-60'>

                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-[rgb(217,192,132)] rounded-xl md:w-20 md:h-20 w-14 h-14 flex items-center justify-center md:mt-16 mt-20'>
                            <img className='md:w-16 w-10' src={newArrivalImg} alt="" />
                        </div>
                        <p className='text-white mt-3'>New Arrival Everyday</p>
                    </div>

                    <div className='felx flex-col w-60'>

                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div className='bg-[rgb(217,192,132)] rounded-xl md:w-20 md:h-20 w-14 h-14 flex items-center justify-center md:mt-16 mt-20'>
                            <img className='md:w-16 w-10' src={shippingImg} alt="" />
                        </div>
                        <p className='text-white mt-3'>Fast & Free Shipping</p>
                    </div>
                </div>


                {/* Item cards */}
                {/* <div className='flex'>
                    
                    <div className='flex-col'>
                        <ItemCard></ItemCard>
                    </div>
                    
                    <div className='flex-col'>
                        <ItemCard></ItemCard>
                    </div>

                    <div className='flex-col'>
                        <ItemCard></ItemCard>
                    </div>

                    <div className='flex-col'>
                        <ItemCard></ItemCard>
                    </div>

                </div> */}

                <CardCarousel></CardCarousel>

                
                

            </div>
        </>
        
    );
}

export default HomePage;


