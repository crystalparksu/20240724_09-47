
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swiper from './Swiper/Swiper';
import VideoSwiper from './VideoSwiper/VideoSwiper';
import MainTop4 from './MainTop4';
import Navs from "../../components/Nav/Navs";


function Main() {
    // const navigate = useNavigate();

    return (
        <MainContainer>
            <VideoSwiper />
            <SectionANav>
                회원님을 위한,&nbsp;<span className="SectionANav">추천 콘텐츠</span>
            </SectionANav>

            <SectionA>
                <Swiper />
                <MainTop4 />
            </SectionA>
        </MainContainer>
    );
}



// 메인 문구- 부모 박스
const SectionANav = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    font-family: "Nanum Gothic", sans-serif;
    font-size: 1.2rem;
    color: rgba(255,255,255,1);
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.5;
    padding: 0 0 1rem;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    margin-left: 3rem;
    z-index: 1;
    padding-top: 5rem;
    
    .SectionANav{
        font-size: 1.2rem;
        color: rgb(254,107,12,1);
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: -0.5px;
    }
`;


const MainContainer = styled.div`
    width: 100%;
    background-color: rgb(11, 11, 13) !important;

`;

// 2단 배너 + 문구 사이
const SectionA = styled.div`
  width: 100vw;
  //padding: 20px;
  display: flex;
    //flex-flow:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    margin-top: 2rem;
    //margin-left: 15rem;
`;

const SectionTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-left: 100px;
  margin-top: 20px;
`;
const SectionTopTitleColored = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
`;

const SectionTopTitle = styled.h3`
  margin-left: 15px;
  font-weight: 400;
  color: gray;
  font-size: 25px;
`;

const SectionTopMore = styled.button`
  position: absolute;
  right: 200px;
  color: #fff;
  padding: 8px 15px;
  border: 2px solid #fff;
  border-radius: 30px;
  background: transparent;
  font-weight: 700;
  font-size: 15px;
  transition: 0.3s;

  &:hover {
    color: white;
    background: #fff;
    transition: 0.3s;
  }
`;

export default Main;


