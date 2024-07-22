import React from "react";
import styled from "styled-components";




//====================================
function Footer() {
  return (
    <FooterTag>
      <FullW>
        <NavLinks>
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">회사소개</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">이용약관</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">개인정보처리방침</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">고객센터</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">법적고지</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">이벤트</MShow>
          {/*<span>|</span>*/}
          <MShow a href="https://www.universalpictureskr.com/" target="_blank">고객센터</MShow>
        </NavLinks>


        <Fl>
          <FooterStrong>희로애락 픽처스 스튜디오 코리아</FooterStrong>
          
          <FooterUl>
            <FooterLi>대표이사 : Green Academy | [12345] 서울특별시 강남구 테헤란로 427
              사업자 등록번호 : 402-494-3930 | 통신판매업신고 : 2017-서울강남-0222
              클라우드 호스팅: Amazon Web Services  | Inc개인정보보호 책임자: Green Academy
              전자우편주소 : korea@rock.studio.com | 개인정보보호 책임자: Green Academy
            </FooterLi>

            <Copyright>ⓒ Rock Corp.ALL RIGHTS RESERVED.</Copyright>

            <FooterIcons>
              <i class="fa-brands fa-youtube" href="https://www.youtube.com/channel/UCLKYLWsKF4waqDx8T_43hBw" />
              <i class="fa-brands fa-instagram-square" />
              <i class="fa-brands fa-facebook" />
              <i class="fa-brands fa-twitter" />
            </FooterIcons>

          </FooterUl>
        </Fl>

      </FullW>
    </FooterTag>
  );
}



//=======================================================
//푸터 SNS -DKDLZHS
const FooterIcons = styled.div`
  margin-top: 30px;
  text-align: center;

  i {
    padding: 0px 5px;
    font-size: 25px;
    border-radius: 70%;
    color: ${props => (props.detectLocation ? 'white' : 'white')} 
    cursor: pointer;
  }

  @media screen and (min-width: 375px) and (max-width: 500px) {
    margin-bottom: 20px;
    text-align: center;
  }
  
  @media (max-width: 320px) {
    margin-top: 20px;
    text-align: center;
  }
  
`;

//푸터 전체 - 위치/배경
const FooterTag = styled.footer`
  color: #6b7684;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 26px 0;
  text-align: center;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background-color: rgb(11, 11, 13) !important;
  border-top: 1px solid rgb(25, 31, 40);


  //푸터 전체 - 
  @media screen and (min-width: 375px) and (max-width: 500px) {
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    padding: 8px;
    //line-height: 22px;
    //margin-top: 12px;
    //word-break: keep-all;
    margin: 0 auto;
  }
  
  //푸터 전체 - 320 일 때
  @media (max-width: 320px){
    width: 320px;
    height: auto;
    display: inline-grid;
    text-align: center;
    font-size: 12px;
    padding: 8px;
    line-height: 22px;
    margin-top: 12px;
    word-break: keep-all;
    //span{
    //  display: none;
    //}
  }
`;


//로고명
const FooterStrong = styled.strong`
  font-size: 14px;
  font-weight: bold;
  color:#b0b8c1;
`;

//푸터 상단 메뉴 - 사이트 맵
const NavLinks = styled.nav`
  text-align: center;
  margin-top: 18px;

  //사이트 맵
  @media screen and (min-width: 375px) and (max-width: 500px) {
    width: 500px;
    height: auto;
    display: inline-grid;
    text-align: center;
    font-size: 10px;
    padding: 8px;
    line-height: 22px;
    margin-top: 12px;
    //word-break: keep-all;

    //span{
    //  display: none;
    //}
  }
  
  //사이트 맵
  @media (max-width: 320px){
    width: 320px;
    text-align: center;
    margin-top: 8px;
    font-size: 12px;
  }
`;

//푸터 상단 메뉴 - 사이트 맵
const FullW = styled.div`
  // border-bottom: 1px solid #acacac;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 20px;

  //푸터 전체 - 
  @media screen and (min-width: 375px) and (max-width: 500px) {
    width: 500px;
    height: auto;
    font-size: 10px;
    font-weight: 600;
    /* padding-left: 8px; */
    /* padding-right: 8px; */
    line-height: 12px;
    /* word-break: keep-all; */
    margin: 0 auto;
    margin-top: 20px;
    box-sizing: border-box;
    text-align: left;
    display: inline-block;

  }
  
  //푸터 사이트 맵- 320 일 때
  @media (max-width: 320px){
    width: 320px;
    text-align: center;
    font-size: 12px;
  }
`;

//사이트 맵
const MShow = styled.a`
  line-height: 18px;
  font-size: 14px;
  color: #b0b8c1;
  display: inline-block;
  padding: 10px 14px 11px;
  letter-spacing: -0.5px;
  
  @media (max-width: 719px) {
    padding-left: 0;
    word-break: keep-all;
    padding-top: 16px;
    padding-bottom: 16px;
}
  @media (max-width: 320px) {
    width: 320px;
    padding: 8px;
  }
`;
//푸터 - 내용
const InnerWClf = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
  padding: 32px 0;
`;

const LogoFooter = styled.div`
  display: block;
  float: left;
  display: block;
  margin-right: 32px;
  position: relative;
`;

//푸터 - 내용들
const Fl = styled.div`
  margin-top: 30px;
  display: block;
  margin-right: 32px;
  position: relative;

  @media screen and (min-width: 375px) and (max-width: 500px) {
    width: 500px;
    height: auto;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 12px;
    margin-top: 12px;
    word-break: keep-all;
    margin: 0 auto;
  }
  
  //푸터 - 내용들 320 일 떄
  @media (max-width: 320px){
    font-size: 12px;
    text-align: center;
    margin-right: 8px;
    margin-left: 8px;
  }
`;

//사이트맵 과 (아래)여백사이
const FooterUl = styled.ul`
`;


//카피라이트
const Copyright = styled.span`
  //display: block;
  //margin-top: 20px;
  //font-size: 12px;
  //vertical-align: middle;

  @media (max-width: 500px) {
    width: 500px;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    padding: 8px;
    word-break: keep-all;
  }
  
  //카피라이트-320
  @media (max-width: 320px){
    width: 260px;
    height: auto;
    display: flex;
    justify-content: center;
    text-align: left;
    font-size: 12px;
    padding: 8px;
    line-height: 22px;
    margin-top: 12px;
    word-break: keep-all;
  }
`;

//푸터 - 내용
const FooterLi = styled.li`
  font-size: 12px;
  height: 18px;
  width: 1056px;
  margin: 0 auto;
  position: relative;
  padding: 32px 0;

  
  @media (max-width: 500px){
    width: 500px;
    height: auto;
    text-align: left;
    font-size: 12px;
    padding: 30px 60px;
    line-height: 22px;
    margin-top: 12px;
    word-break: keep-all;
  }
  
  //푸터 - 내용(320 일 때)
  @media (max-width: 320px){
    width: 260px;
    height: auto;
    display: flex;
    justify-content: left;
    text-align: left;
    font-size: 10px;
    padding: 8px;
    line-height: 22px;
    margin-top: 12px;
    word-break: keep-all;
  }
`;

const NtFix1 = styled.span`
  font-size: 12px;
  vertical-align: middle;
  display: inline-block;
  margin-top: 16px;
`;


const Fr = styled.div`
  display: block;
  float: right;
  margin-right: 0px;
  position: relative;
`;

const NavList = styled.nav`
  margin-top: 8px;
`;

const LinkFacebook = styled.a`
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  letter-spacing: 0;
  background-position: -461px -488px;
  width: 36px;
  padding-top: 36px;
  font-size: 10px;
  margin-left: 0;
`;
const LinkInstagram = styled.a`
  height: 0;
  overflow: hidden;
  display: inline-block;
  line-height: 0;
  letter-spacing: 0;
  background-position: -512px -488px;
  width: 36px px;
  padding-top: 36px;
  font-size: 10px;
  vertical-align: middle;
  margin-left: 8px;
`;

const LinkNaverBlog = styled.a`
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -405px -262px;
  width: 36px;
  padding-top: 36px;
  font-size: 10px;
  vertical-align: middle;
  margin-left: 8px;
`;

const LinkNaverPost = styled.a`
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
`;

export default Footer;