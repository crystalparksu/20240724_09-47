import React, { useRef } from 'react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import SwiperCard from './SwiperCard';
import useFetch from '../../../Hooks/useFetch';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App() {
    const [swiperData, loading, error] = useFetch('/data/SwiperMoviesData.json');

    SwiperCore.use([Navigation, Scrollbar]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const settings = {
        speed: 1500,
        slidesOffsetAfter: 300,
        spaceBetween: 0,
        navigation: {
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            clickable: true,
        },
        scrollbar: { draggable: true, el: null },
        slidesPerView: 4,
        onInit: swiper => {
            setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
            });
        },
    };

    return (
        <Container>
            <StyledButtonPrev ref={prevRef}>
                <ArrowImg
                    alt="arrow"
                    src="https://user-images.githubusercontent.com/118322531/222052387-84d080a9-2270-40b8-a9df-66f9c6f67834.png"
                />
            </StyledButtonPrev>



            {/*스와이퍼 - API  받기*/}
            <StyledRoot>
                <Swiper {...settings}>
                    {swiperData.map(movie => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <SwiperCard movie={movie} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </StyledRoot>


            {/*화살표*/}
            <StyledButtonNext ref={nextRef}>
                <ArrowImg
                    alt="arrow"
                    src="https://user-images.githubusercontent.com/118322531/222052382-9c95e3f5-243b-416b-a4de-1913d872492b.png"
                />
            </StyledButtonNext>
        </Container>
    );
}

// 2단.
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    margin-bottom: 2rem;
`;

const StyledRoot = styled.div`
  .swiper {
    width: 1280px;
    

    &-wrapper {
      width: 100%;
      margin: 0;
      gap: 60px;
    }
    &-container {
      width: 2000px;
      margin: 0;
    }

    &-slide {
      text-align: center;
      font-size: 18px;
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &-slide img {
      display: block;
      width: 300px;
      object-fit: cover;
      //border-radius: 10px;
      -webkit-box-shadow: 10px 12px 25px 5px rgba(0, 0, 0, 0.19);
      box-shadow: 10px 12px 25px 5px rgba(0, 0, 0, 0.19);
    }
  }
`;

const StyledButtonPrev = styled.button`
  width: 100px;
  height: 100px;
  background: transparent;
  border: 0px;
`;

const StyledButtonNext = styled.button`
  width: 100px;
  height: 100px;
  background: transparent;
  border: 0px;
`;


// 화살표
const ArrowImg = styled.img`
  //width: 30px;
    width: 40px;
    margin-left: 20px;
    margin-right: 20px;
`;
