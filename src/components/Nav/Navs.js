import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';


import logo from "./images/rock_w_logo.svg";
import searchIcon from './images/icon_search.png';
import loginIcon from './images/icon_login.png';
import mypageIcon from './images/icon_mypage.png';
import useFetch from '../../Hooks/useFetch';
import search from './images/search.png';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";




function Navs() {
    const [searchInput, setSearchInput] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    const [recommendData, loading, error] = useFetch('/data/searchResult.json');

    const navigate = useNavigate();

    const goToPage = path => {
        navigate(path);
    };


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    }, []);

    const handleSearchInput = e => setSearchInput(e.target.value);

    useEffect(() => {
        window.addEventListener('click', function (e) {
            if (e.target.contains !== searchWrapper) {
                setSearchInput('');
            }
        });
    }, []);

    const searchWrapper = useRef();

    if (loading) return null;
    if (error) return window.alert('통신에 실패하였습니다');

    const filteredRecommendData = recommendData.movies.filter(item =>
        item.name.replace(' ', '').includes(searchInput)
    );



    //HTML
    return (
            <NavWrapper scrollposition={scrollPosition}>


            <MenuWrapper>
                <LogoImg
                    alt="logo"
                    src={logo}
                    scrollposition={scrollPosition}
                    onClick={() => {
                        navigate(`/`);
                    }}
                />

                 <MenuName
                    onClick={() => {
                        goToPage('/');
                    }}
                    scrollposition={scrollPosition}
                >
                    HOME
                </MenuName>


                <MenuName
                    onClick={() => {
                        goToPage('/movie');
                    }}
                    scrollposition={scrollPosition}
                >
                    MOVIE
                </MenuName>

                <MenuName
                    onClick={() => {
                        goToPage('user/notice');
                    }}
                    scrollposition={scrollPosition}
                >
                    NOTICE
                </MenuName>


                <MenuName
                    onClick={() => {
                        goToPage('/mypage');
                    }}
                    scrollposition={scrollPosition}
                >
                    MYPAGE
                </MenuName>


                <MenuName
                    onClick={() => {
                        goToPage('/admin');
                    }}
                    scrollposition={scrollPosition}
                >
                    ADMIN
                </MenuName>


                <MenuName
                    onClick={() => {
                        goToPage('/chart');
                    }}
                    scrollposition={scrollPosition}
                >
                    CHART
                </MenuName>
            </MenuWrapper>



                {/*  검색창 */}
                <SearchWrapper ref={searchWrapper}>
                    {searchInput && (
                        <RecommendSearch>
                            {filteredRecommendData.map(item => {
                                return (
                                    <SearchedLink
                                        onClick={() => {
                                            navigate(`/movieDetail/${item.id}`);
                                        }}
                                        key={item.id}
                                    >
                                        {item.name}
                                    </SearchedLink>
                                );
                            })}
                        </RecommendSearch>
                    )}
                    <SearchInput
                        placeholder="영화 이름 입력"
                        onChange={handleSearchInput}
                        value={searchInput}
                        scrollposition={scrollPosition}
                    />

                    <SearchIcon alt="serachIcon" src={search} />

                </SearchWrapper>


                <IconWrapper>
                <IconImg
                    onClick={() => goToPage('/login')}
                    alt="loginIcon"
                    src={loginIcon}
                    scrollposition={scrollPosition}
                />
                <IconImg
                    onClick={() => goToPage('/SignUp')}
                    alt="mypageIcon"
                    src={mypageIcon}
                    scrollposition={scrollPosition}
                />
            </IconWrapper>
            </NavWrapper>
    );
}




const NavWrapper = styled.div`
  display: flex;
  position: sticky;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100vw;
  height: 80px;
    //
    background: rgba(225, 225, 255, 0.1);
    backdrop-filter: saturate(180%) blur(20px);
    //background-color: rgba(11, 11, 13,0.5);
    
    
  //스크롤 시 
    background: ${props => (props.scrollposition > 100 ? '#fff' : 'rgba(225, 225, 255, 0.1)')};
  transition: 0.2s ease-out;
  z-index: 100;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  gap: 30px;
`;

const LogoImg = styled.img`
  //width: 200px;
    width: 130px;
  cursor: pointer;
    
  filter: ${props =>
    props.scrollposition > 100 ? 'invert(100%)' : 'invert(0%)'};
`;


// 폰트 스타일
const MenuName = styled.span`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    font-family: "Montserrat", sans-serif;
    
    display: block;
    font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  margin-top: 5px;

  //스크롤시   
    color: ${props => (props.scrollposition > 100 ? 'black' : 'white')};

    
  &:hover {
    color: ${props => (props.scrollposition > 100 ? 'black' : '#02d6e8;')};
    transition: 0.3s;
      font-weight: 600;
  }
`;

const downFadeAnimation = keyframes`
from {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 0 0;
}
to {
  opacity: 1;
  transform: scaleY(1);
  transform-origin: 0 0;
}`;

// 검색창 스타일
const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
    margin-inline-start: auto;
    margin-right: 30px;
`;


// 검색창 아래 하단
const RecommendSearch = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
    
    padding: 20px;
  top: 40px;
  width: 600px;
    height: auto;

    background: rgba(11, 11, 13, 0.1);
  //border-bottom-radius: 20px;
  //  background: rgba(225, 225, 255, 0.2);
  //  backdrop-filter: blur(20px);
  filter: drop-shadow(10px 10px 4px rgba(11, 11, 13, 0.1));
  animation: ${downFadeAnimation} 0.4s ease-out;

    background: ${props =>
            props.scrollPosition > 100 ? 'rgba(11, 11, 13, 0.1)' : '#fff'};
`;


const SearchedLink = styled(Link)`
  margin-top: 20px;
  font-size: 15px;
  text-decoration: none;
  color: gray;
`;

const SearchInput = styled.input`
  width: ${props => (props.scrollposition > 100 ? '600px' : '300px')};
  height: 40px;
  border: 0px;
  border-radius: 30px;
  margin-right: 20px;
  padding-left: 20px;
  background: #e4e4e4;
  outline: none;
  transition: 0.3s ease-out;
  transition-delay: 0.1s;

    
  //  검색창 클릭했을 떄
  &:focus {
    width: 600px;
      font-size: 14px;
      font-weight: 500;
    color: ${props => (props.scrollposition > 100 ? '#000' : 'white')};
    
      background: ${props =>
    props.scrollPosition > 100 ? '#fff' : 'rgba(249, 249, 249, 0.1)'};
    transition: 0.3s ease-out;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 40px;
  width: 20px;
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 25px;
  cursor: pointer;
  filter: ${props =>
    props.scrollposition > 100 ? 'invert(0%)' : 'invert(100%)'};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
  gap: 30px;
`;
export default Navs;