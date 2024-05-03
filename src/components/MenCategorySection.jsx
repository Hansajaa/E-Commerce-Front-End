import React from 'react';
import NavigationBar from '../common/NavigationBar'
import CardCarousel from '../organisms/CardCarousel';
import Footer from '../common/FooterSection'

function MenCategorySection(props) {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <CardCarousel></CardCarousel>
            <CardCarousel></CardCarousel>

            <div className='text-center'>
                <h1 className='text-white font-semibold  text-xl'>
                    Subscribe to our newsletter to <br/>get updates to our latest collection
                </h1>

                <div className='flex mt-10 items-center justify-center'>
                    <div className='flex flex-row'>
                        <div className='flex-col'>
                            <input type="email" className='rounded-lg mr-3 w-72'/>
                        </div>
                        <div className='flex-col text-white'>
                            <button className='bg-[#0e4047] py-2 px-6 rounded-md hover:scale-105 duration-500'>Subscribe</button>
                        </div>
                    </div>
                </div>
                
            </div>


            <Footer></Footer>
        </div>
    );
}

export default MenCategorySection;