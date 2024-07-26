"use client";

import Navigation from '../common/NavigationBar'
import {Carousel} from 'flowbite-react'
import bannerImg1 from '../assets/home_page_asserts/banner1.webp'
import bannerImg2 from '../assets/home_page_asserts/banner2.webp'
import verifyImg from '../assets/home_page_asserts/verify.png'
import satisfiedImg from '../assets/home_page_asserts/satified.png'
import newArrivalImg from '../assets/home_page_asserts/new arrival.png'
import shippingImg from '../assets/home_page_asserts/shipping.png'
import CardCarousel from '../organisms/CardCarousel';
import Footer from '../common/FooterSection';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function HomePage() {

    const menProductApiUrl = "http://localhost:8081/api/v1/product/getProducts/men";

    const [dropdownState, setDropdownState] = useState(false);
    const [products, setProducts] = useState([]);

    const handleClick = () => {
        setDropdownState(!dropdownState);
    }

    const inputRef = useRef();

    const handleSubscribeButton = () => {
        if(inputRef.current.value == ""){
            inputRef.current.focus();
        }
    }

    useEffect(()=>{
        axios.get(`${menProductApiUrl}`)
        .then((res)=>{
            setProducts(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    return (
        <div>
            <Navigation dropdownState={dropdownState}></Navigation>

            <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-10 m-3" onClick={handleClick}>

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

                <CardCarousel products={products}></CardCarousel>

                <div className='text-center'>
                    <h1 className='text-white font-semibold  text-xl'>
                        Subscribe to our newsletter to <br/>get updates to our latest collection
                    </h1>

                    <div className='flex mt-10 items-center justify-center'>
                        <div className='flex flex-row'>
                            <div className='flex-col'>
                                <input type="email" className='rounded-lg mr-3 w-72' ref={inputRef}/>
                            </div>
                            <div className='flex-col text-white'>
                                <button className='bg-[#0e4047] py-2 px-6 rounded-md hover:scale-105 duration-500' onClick={handleSubscribeButton}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    
                </div>


                <Footer></Footer>
                
                

            </div>
        </div>
        
    );
}

export default HomePage;


