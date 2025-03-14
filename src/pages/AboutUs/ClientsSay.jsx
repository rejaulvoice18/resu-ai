import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';



const ClientsSay = () => {
    const [reviews, setReviews] = useState([])
    console.log(reviews);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}  // **Slide transition speed (milliseconds)**
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                effect="fade"  // **Fade-in Fade-out effect**
            >

                {
                    reviews?.map(review => <SwiperSlide>
                        <div
                            className='text-white 
                          text-center mt-18'>
                            <ReviewCard review={review} />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default ClientsSay;