import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
// import * as S from './style';
import Router from "../../Router";
import styled from "styled-components";
import profile from "./images/profile.svg";
import MemberInfo from "./MemberInfo";


const SideBar = () => {

    const pathName = useLocation().pathname;

    const activeStyle = {
        color: '#1351f9', fontWeight: 700,
    };

    return (
            <MenuWrap>
                <Side>
                    <div className="side">
                        <p className="side_span">MY PAGE</p>
                        마이페이지
                    </div>
                </Side>

                <SideWrap>
                    <Profile src={profile}></Profile>

                    <Menu>
                        <NavLink className="a" style={({isActive}) => (isActive ? activeStyle : {})} to='/user/mypage'>
                            마이페이지
                        </NavLink>
                    </Menu>

                    <Menu>
                        <NavLink className="a" style={({isActive}) => (isActive ? activeStyle : {})} to='/user/BookMark'>
                            내가 찜한 리스트
                        </NavLink>
                    </Menu>

                    <Menu>
                        <NavLink className="a" style={({isActive}) => (isActive ? activeStyle : {})} to='/user/MyReview'>
                            내가 작성한 리뷰
                        </NavLink>
                    </Menu>

                    <Menu>
                        <Link className="a" to='/user/MemberInfo'>개인 정보 수정</Link>
                    </Menu>

                    <Menu>
                        <Link className="a" to='/logout'>로그아웃</Link>
                    </Menu>
                </SideWrap>
            </MenuWrap>
    );
};
export default SideBar;




//전체 박스
const MenuWrap = styled.div`
    float: right;
    width: 240px;
    height: 100vh;
    //position: fixed;
    //margin-top: 180px;
    z-index: 999999999;
`;


// 마이페이지- 헤더
const Side = styled.div`
    width: 240px;
    height: 90px;
    //border-top-left-radius: 20px;
    //border-top-right-radius: 20px;
    position: absolute;
    //margin-top: 40px;
    //margin-left: 40px;
    background-color: #1351f9;
    padding: 20px 0px;
    z-index: 999999;

    .side_span {
        color: #fff;
        font-family: 'SUIT-Regular' !important;
        text-align: left;
        font-weight: 500;
        font-size: 12px;
    }

    .side {
        margin: 0;
        font-family: 'SUIT-Regular' !important;
        font-size: 26px;
        font-weight: 300;
        //border-bottom: 3px solid #333;
        padding: 0 25px;
        font-weight: 300;
        color: #fff;
        text-align: left;
    }
`;


// 마이페이지- 바디
const SideWrap = styled.div`
    width: 240px;
    height: 100vh;
    padding-top: 120px;
    padding-bottom: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: rgb(11, 11, 13);


    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8em;
    //margin-left: 40px;
    z-index: 999999999;

`;


// 마이페이지- 프로필(사진)
const Profile = styled.img`
    width: 50%;
    opacity: 0.8;
    margin-bottom: 20px;
    margin-top: 40px;
    padding: 40px 0px;
`;


// 마이페이지- 바디(메뉴)
const Menu = styled.a`
    margin-top: 30px;
    width: 150px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;


   
    
    
    .a{
        width: 150px;
        color: #fff;
        font-family: 'SUIT-Regular' !important;
        font-weight: 500;
        font-size: 18px;
        line-height: 50px;
        cursor: pointer;
        text-align: left;
    }
    
    .a:hover{
        color: #1351f9;
        border-bottom: 2px solid #1351f9;
    }
`;





