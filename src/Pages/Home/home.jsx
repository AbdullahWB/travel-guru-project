import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Home.css'
import photo1 from '../../assets/images/sundorbon.png'
import photo2 from '../../assets/images/Sreemongol.png'

const Home = () => {
    return (
        <div className='w-[80%] overflow-hidden grid grid-cols-2 gap-8'>
            <div>
                <h1>Cox's bazar</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button>book</button>
            </div>
            <div className=''>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;