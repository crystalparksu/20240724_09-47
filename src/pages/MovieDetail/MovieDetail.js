import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import CharmingGraph from './CharmingGraph';
import MovieReview from './MovieReview';
import DetailImg from './MovieDetailVideoImage/DetailImg';



const MovieDetail = () => {
    const [movieData, setMovieData] = useState({});
    const [scrollPosition, setScrollPosition] = useState(0);
    const [toggleBtn, setToggleBtn] = useState(true);

    const params = useParams();
    const navigate = useNavigate();


    //영화 리스트를 데이터로 받기
    const {
        movieThumbNailImg,
        movieName,
        movieNameInEnligh,
        director,
        movieActors,
        country,
        movieAgeRating,
        movieRunningTime,
        movieGenre,
        movieOpeningDate,
        movieDetailDescription,
        movieStillCut,
        // movieTrailer,
    } = movieData;

    //영화 리스트를 스틸 컷으로 보여주기
    const stillCutList = movieData.movieStillCut;

    //스크롤
    const handleScroll = () => {
        const { scrollY } = window;
        scrollY > 200 && setToggleBtn(!toggleBtn);
    };
    //위치 이동
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setToggleBtn(false);
    };
    //수정 스크롤
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    //비동기(★데이터를 리스트로 받기)
    useEffect(() => {
        //추후에 백엔드 서버
        // fetch(`http://43.200.63.91:3000/movies/detail?movieId=${params.id}`, {
        fetch(`http://43.200.63.91:3000/movies/detail?movieId=${params.id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        })
            .then(response => response.json())
            .then(data => {
                setMovieData(data.getMovieDetail[0]);
            });

        window.addEventListener('scroll', updateScroll);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //HTML
    return (
        <div>
            {movieData && (
                <div>
                    <WholeContainer>
                        <MovieBox>
                            <MovieAndDetail>
                                <MoviePoster src={movieData.movieThumbNailImg} alt="포스터" />
                                <AsidePoster>
                                    <MovieTitle>{movieData.movieName}</MovieTitle>
                                    <EnglishTitle>{movieData.movieNameInEnligh}</EnglishTitle>
                                    <DetailBox>
                                        <ul>
                                            {Detail_LIST.map(category => {
                                                return (
                                                    <DetailTitle key={category.id}>
                                                        {category.title}
                                                    </DetailTitle>
                                                );
                                            })}
                                        </ul>

                                        <ul>
                                            <DetailContext>{director}</DetailContext>
                                            <DetailContext>{movieActors?.join(' ')}</DetailContext>
                                            <DetailContext>{country}</DetailContext>
                                            <DetailContext>{movieAgeRating}세 관람가</DetailContext>
                                            <DetailContext>{movieRunningTime}분</DetailContext>
                                            <DetailContext>{movieGenre?.join(' ')}</DetailContext>
                                            <DetailContext>{movieOpeningDate}</DetailContext>
                                        </ul>
                                    </DetailBox>
                                    <BookingButton
                                        onClick={() => {
                                            navigate(`/booking`);
                                        }}
                                    >
                                        예매하기🎬
                                    </BookingButton>
                                </AsidePoster>
                            </MovieAndDetail>
                            <DesBox className="description">
                                <Destitle>줄거리</Destitle>
                                <br />
                                <DesContent>
                                    <span>{movieDetailDescription}</span>
                                </DesContent>
                                <DetailImg stillCutList={stillCutList} />
                            </DesBox>
                            <CharmingGraph />
                            <MovieReview />
                        </MovieBox>
                        <div className="logoplace" />
                    </WholeContainer>
                    <ButtonBox>
                        <ScrollBtn
                            right={scrollPosition > 100 ? '0px' : '-30px'}
                            width="136px"
                            scrollPosition={scrollPosition}
                            onClick={() => {
                                navigate(`/booking`);
                            }}
                        >
                            예매하기
                        </ScrollBtn>

                        <ScrollBtn
                            right={scrollPosition > 100 ? '-50px' : '-100px'}
                            width="50px"
                            scrollPosition={scrollPosition}
                            onClick={goToTop}
                        >
                            Up
                        </ScrollBtn>
                    </ButtonBox>
                </div>
            )}
        </div>
    );
};



// 영화 상세 리스트
const Detail_LIST = [
    { id: 1, title: '감독' },
    { id: 2, title: '출연' },
    { id: 3, title: '국가' },
    { id: 4, title: '등급' },
    { id: 5, title: '상영시간' },
    { id: 6, title: '장르' },
    { id: 7, title: '개봉일' },
];

//style

const ButtonBox = styled.div`
  right: 50%;
  margin-right: -548px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 80px;
  min-height: 50px;
  text-align: center;
  z-index: 7;
`;

const ScrollBtn = styled.button`
  opacity: 1;
  pointer-events: auto;
  position: absolute;
  left: auto;
  right: ${props => props.right};
  opacity: ${props => (props.scrollPosition > 100 ? '1' : '0')};
  width: ${props => props.width};
  padding: 12px 0 14px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background-image: linear-gradient(to left, navy, #9971ff);
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 30%);
  border-radius: 25px;
  transition: right 0.5s;
  cursor: pointer;
  border: 1px solid white;

  &:disabled {
    cursor: default;
  }
`;

const DesBox = styled.div`
  padding: 70px 30px 50px 60px;
`;

const Destitle = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const DesContent = styled.div`
  font-size: 18px;
  color: #817f7f;
  margin-top: 50px;
  width: 89%;
  line-height: 40px;
  margin-bottom: 100px;
`;

const BookingButton = styled.button`
  border-radius: 5em;
  background: #f9f9f9;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0 0 5px;
  color: gray;
  width: 100%;
  height: 80px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #7063ff;
    border-color: #7063ff;
  }
`;

const DetailTitle = styled.li`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
  border-left: 4px solid #7063ff;
  padding-left: 6px;
`;

const DetailContext = styled.li`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 300;
  padding-top: 2px;
  text-overflow: hidden;
`;

const DetailBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 5px;
`;
const EnglishTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  padding: 40px 0;
  text-align: center;
`;

const MovieTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  padding: 30px 0px;
  text-overflow: ellipsis;
  word-break: break-all;
  border-bottom: 1px solid #f1f1f3;
  padding-bottom: 20px;
  text-align: center;
`;
const AsidePoster = styled.div`
  width: 40%;
  margin-left: 60px;
  padding-top: 50px;
`;

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const MovieBox = styled.div`
  width: 80%;
  // border: 5px solid #f1f1f3;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  word-break: break-all;
`;

const MovieAndDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const MoviePoster = styled.img`
  width: 580px;
  height: auto;
  border-radius: 10px;
  -webkit-box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
  box-shadow: 17px 23px 25px 5px rgba(0, 0, 0, 0.19);
`;

export default MovieDetail;