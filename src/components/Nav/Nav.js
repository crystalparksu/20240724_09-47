/*
// import React, {useEffect, useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/rock_w_logo.svg";
import * as PropTypes from "prop-types";
import React,{useState,useEffect,useCallback,useMemo} from "react";
import SearchBar from "../Search/SearchBar";





function Nav()  {

    // =======================================================
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    // const [show, setShow] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isToggled, setIsToggled] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userToggled, setUserToggled] = useState(false);



    return (
        <Header isToggled={isToggled} userToggled={userToggled}>

            {/!* 햄버거 버튼(bar) *!/}
            <div className="toggle"
                onClick={() => {
                    setIsToggled(!isToggled);
                }}
            >
                <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
            </div>


            {/!* Apple 로고 *!/}
            <div className="logo">
                <img alt="logo" src={logo} onClick={() => (window.location.href = "/")} />
            </div>


            {/!* User 버튼 *!/}
            <div
                className="user"
                onClick={() => {
                    setUserToggled(!userToggled);
                }}
            >
                <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
            </div>


            {/!* 메뉴 리스트 *!/}
            <ul className="header__menulist">
                <li a href="/">HOME</li>
                <li a href="/">MOVIE</li>
                <li a href="/">NOTICE</li>
                <li a href="/">MYPAGE</li>
                <li a href="/">ADMIN</li>
                {/!*<li>Music</li>*!/}
                {/!*<li>고객지원</li>*!/}
            </ul>



            {/!* 검색창 *!/}
            {/!*<SerarchBar onClick={fetchMovie} onChange={searchItem}></SerarchBar>*!/}
            {/!*<SearchBar  />*!/}
            {/!*<SearchBar ss={ss} onUserInput={handelUserInput} />*!/}

            <SearchBar value={search} onChange={onChange}/>

            {/!* User 메뉴 리스트 *!/}
            <ul className="header__right">
                <li a href="/"><i class="fas fa-search"></i></li>
                <li a href="/"><i class="fas fa-shopping-bag"></i></li>
            </ul>

        </Header>


    );
}
export default Nav;




// style ----------------------------------
//헤더 전체
const Header = styled.div`
    //헤더 고정
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    overflow: hidden;
    cursor: pointer;

    //헤더 사이즈
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

    //헤더 배경 스타일
    background: rgba(225, 225, 255, 0.1);
    backdrop-filter: saturate(180%) blur(20px);
    //border-bottom: 3px solid #fff;
    //background: radial-gradient(circle at 20% 95%, #056877, #051828 96%);

    //폰트 스타일
  color: white;

    //로고 이미지
    img {
        display: flex;
        width: 120px;
    }
    //logo
.logo {
        margin: 0 1rem;
        font-size: 2rem;
        width: 110px;
        text-align: center;
        margin-top: 8px;
    }
    //헤더 메뉴 -메뉴 리스트
  .header__menulist {
    list-style: none;
    display: flex;
    margin-left: 20px;
  }

    //헤더 메뉴 - 스타일
    .header__menulist li{
        width: 100%;
        margin-right: 20px;
        //cursor: pointer;
    //호버
&:hover{
            width: 100%;
            cursor: pointer;
            font-weight: 600;
            color: #02d6e8;
            //display: block;
            //border-bottom: 2px solid #02d6e8;
        }
    }
    .header__left {
    display: flex;
  }

    //헤더 메뉴 - 로그인/회원가입
  .header__right {
    list-style: none;
    display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-right: 20px;
  }
    .header__right{
        display: flex;
        justify-content: right;
    }
  .header__right div {
    margin: 0 1rem;
      justify-content: right;
  }

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

//헤더 반응형 시 -
  @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-between;

    .header__right {
      display: ${(props) => (props.userToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
      ////컬러
      //  backdrop-filter: saturate(180%) blur(20px);
      //  background: radial-gradient(circle at 20% 95%, #056877, #051828 96%);
    }

    .header__menulist {
      display: ${(props) => (props.isToggled ? "flex" : "none")};
      flex-direction: column;
      width: 100%;
        //padding: 35px 20px;
    }

    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }
      //로고 이미지
      //img {
      //    width: 110px;
      //    text-align: center;
      //}

      .header__right{
          padding: 35px 20px;
      }
    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
  }
`;

*/
