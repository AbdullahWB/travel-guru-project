import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Slider.css'

const Slider = ({ categories }) => {
    const [focusedCategory, setFocusedCategory] = useState({});

    useEffect(() => {
        setFocusedCategory(categories[0])
    }, [categories])

    const handleSlideChange = (swiper) => {
        const { activeIndex } = swiper;
        setFocusedCategory(categories[activeIndex]);
    };
    return (
        <div className='overflow-hidden grid grid-cols-2 gap-8'>
            <div className=''>
                <h1>{focusedCategory?.place_name}</h1>
                <p>{focusedCategory?.place_description}</p>
                <button>Book</button>
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
                    onSlideChange={handleSlideChange}
                >
                    {categories.map(category => (
                        <SwiperSlide key={category.id}>
                            <div className='relative'>
                                <img className='w-full h-full' src={category.img_url} />
                                <div className="absolute inset-0 bg-[#000] bg-opacity-50 rounded-[10px] flex justify-center items-center">
                                    <h1 className='text-5xl font-bold text-white'>{category.place_name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;