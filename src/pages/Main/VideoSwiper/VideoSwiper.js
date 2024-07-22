import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import Videos from './Videos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './VideoSwiper.css';

// import required modules
import { EffectFade, Pagination, Navigation } from 'swiper';



//App
export default function App() {
    const [movieData, setMovieData] = useState({});
    return (
        <StyledSwiper
            slidesPerView={1}
            spaceBetween={100}
            loop={true}
            pagination={{
                clickable: true,
            }}
            // navigation={true}
            modules={[EffectFade, Pagination]}
            effect="fade"
            className="mySwiper"
        >
            {/* <SwiperSlide>
        <Videos movieData={movieData} />
      </SwiperSlide> */}

            {VIDEO_DATA.map(item => (
                <SwiperSlide key={item.id}>
                    <Videos item={item} />
                </SwiperSlide>
            ))}
        </StyledSwiper>
    );
}


//StyledSwiper
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 650px;
  background-color: rgb(11, 11, 13);

  .swiper-pagination .swiper-pagination-bullet {
    opacity: 1;
    border: 1px solid white;
    background-color: #fff;
    margin-bottom: 25px;
      
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 10px;
    background-color: white;
    transition: 0.2s ease-out;
  }
`;


//VIDEO_DATA
const VIDEO_DATA = [
    {
        id: 13,
        title: '민환의 초상',
        video_url:
            '',
        description:
            '명성과 부를 쌓으면서 민환은 성공에는 대가가 따른다는 사실을 깨닫고 진정한 행복과 성취감을 찾기 위해 과거의 악마와 맞서야 한다. ',
    },
];
