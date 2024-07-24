import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import google from "./images/continue_google_neutral.png";







// Logins-로그인
function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    let body = {
        username: username,
        password: password,
    };


    // const handleGoogleLogin = () => {
    //     window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    // };




    //axios.post - /auth/login
    const onSubmit = async () => {
        try {
            const response = await axios.post(
                "https:/http://localhost:8080/auth/login",
                body,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log(response.data.token);

            if (response.data.token !== null) {
                localStorage.clear();
                localStorage.setItem("token", response.data.token);
                console.log("response.data.token:  " + response.data.token);

                window.location.replace("/");
            } else {
                setUsername("");
                setPassword("");
                localStorage.clear();
            }
        } catch (e) {
            alert(
                "회원 정보가 일치 하지 않습니다. 아이디와 비민번호를 다시 확인해 주세요!"
            );
            console.log(e);
        }
    };

//html
    return (
        <LoginWrap>
            <LoginContainer>
                <LoginSigninContent>

                    <BorderAndText>
                        <LoginHeadText>로그인</LoginHeadText>
                    </BorderAndText>

                        <LoginHeadTexts>Rock 계정으로 로그인</LoginHeadTexts>
                            {/*<span >Rock 계정으로 로그인</span>*/}



                    <EmailLoginContainer>
                        <div>
                            <EmailLoginInput
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                placeholder="아이디"
                                required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                            <EmailLoginInput
                                type="text"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="비밀번호"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <EmailLoginOption>
                            {/*아이디 저장*/}
                            <div className="inputCheckbox">
                                <input type="checkbox" id="id-save" className="input-id-save"
                                       required
                                       onChange={(e) => {
                                           setUsername(e.target.checked.value)
                                       }}
                                />
                                <label for="id-save" className="label-id-save">아이디 저장</label>
                            </div>
                            {/*아이디/비밀번호 찾기*/}
                            <a href="/findIdPassword" className="find">아이디 찾기&nbsp;&nbsp;|&nbsp;&nbsp;비밀번호 찾기</a>
                        </EmailLoginOption>


                        {/*로그인 버튼*/}
                        <CommonButton
                            type="button"
                            onClick={() => {
                                onSubmit();
                                console.log("body: " + username + ", " + password);
                            }}
                        >
                            <a>로그인</a>
                        </CommonButton>


                        {/*회원가입 버튼*/}
                        <SignupButton
                            type="button"
                            onClick={() => {
                                onSubmit();
                                console.log("body: " + username + ", " + password);
                            }}
                        >
                            <a href="/SignUp">회원가입</a>
                        </SignupButton>


                        {/*구글 버튼*/}
                        <LoginSignupContent>
                            <LogoImg
                                alt="logo"
                                src={google}
                                onClick={() => {
                                    // 사용하려면 App.js에서 /로 라우팅해야 한다
                                    window.location.replace("/users/login");
                                }}
                            >
                            </LogoImg>
                        </LoginSignupContent>
                    </EmailLoginContainer>
                </LoginSigninContent>
            </LoginContainer>
        </LoginWrap>
    );
}




//로그인 버튼
const CommonButton = styled.button`
    display: block;
    height: 48px;
    border-radius: 30px;
    font-size: 18px;
    color: #fff;
    background: #1351f9;
    border-radius: 5px;
    width: 100%;
    margin-left: 0;
    margin-top: 5px;
    margin-bottom: 20px;
    border: none;
    box-sizing: border-box;
    transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    //호버시 보색
    
    &:hover{
        background:rgba(0,0,0,0.1);
        border: 1px solid #fff;
    }
    
    a{
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      color: #ffffff;
      line-height: 20px;
      font-size: 18px;
      font-weight: 500;
      font-family: 'SUIT-Regular' !important;
      display: flex;
      justify-content: center;

        //&:hover{
        //    color: #1351f9;
        //    font-weight: 800;
        //}
       
  }
`;
// 회원가입 버튼
const SignupButton = styled.button`
    display: block;
    height: 48px;
    border-radius: 30px;
    font-size: 18px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #fff;
    border-radius: 5px;
    width: 100%;
    margin-left: 0;
    margin-top: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
    transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        background:#1351f9;
        border: none;
    }
    
    
  a{
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      color: #ffffff;
      line-height: 20px;
      font-size: 18px;
      font-weight: 500;
      font-family: 'SUIT-Regular' !important;
      display: flex;
      justify-content: center;
  }
`;

//체크박스
const Bp = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;

  &:before {
    cursor: pointer;
    content: "";
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    border: 1px solid #acacac;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    text-align: center;
  }
`;



// 로그인 이메일 저장 체크 구간
const EmailLoginOption = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a5a5a5;
  font-size: 14px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 400;

    
    .inputCheckbox{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    input[type=checkbox]{
        border: 1px solid #d9d9d9;
        width: 18px;
        height: 18px;
    }
    .label-id-save{
        vertical-align: middle;
        padding: 10px 10px;
        color: #a5a5a5;
        font-size: 15px;
        font-family: 'SUIT-Regular' !important;
        font-weight: 400;
    }
    //아이디/비밀번호 찾기
    .find{
        color: #a5a5a5;
        font-size: 15px;
        font-family: 'SUIT-Regular' !important;
        font-weight: 500;

        &:hover{
            color: #ff27a3;
            font-weight: 800;
        }
    }
    
`;


// 이메일 인풋
const EmailLoginInput = styled.input`
    width: 100%;
    font-size: 15px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 400;
    height: 53px;
    color: #fff;
    background-color: #2f2f2f;
    border: 0;
  border-radius: 5px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  outline: none;
    
  &:last-child {
    margin-bottom: 0;
  }
`;

// 폼 디자인
const EmailLoginContainer = styled.div`
    float: left;
    width: 560px;
    padding: 0 40px;
`;

const LoginSigninContent = styled.div``;

const RadiusButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`;

const HorizontalButtons = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;


//구글 인증 전체 박스
const LoginSignupContent = styled.div`
    width: 100%;
    height: 46px;
    background: #f2f2f2;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
//구글 인증 로그인 버튼
const LogoImg = styled.img`
    cursor: pointer;
    display: block;
    width: auto;
    height: 44px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
    text-align: center;
    transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    outline: none;
`;


// 구글 인증 로그인 BarButton
const BarButton = styled.button`
    
  
    //border: 1px solid #000;
    //color: #333;
    //text-align: center;
    //font-family: 'SUIT-Regular';
    //font-weight: 900;
    //font-size: 16px;
    //line-height: 16px;
    //text-decoration: none;
  //구글 로그인
  &.email {
      //display: flex;
      //justify-content: center;
  }
`;

const VerticalButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 999;

    a {
        background: url("images/continue_google_neutral.png");
        width: 756px;
        height: auto;
    }
`;



const BorderAndText = styled.div`
margin: 0 auto;
  display: flex;
  justify-content: center;
    text-align: center;
    font-size: 32px;
    font-weight: 500!important;
    margin-top: 20px;
    
    
  // span {
  //   font-size: 18px;
  //   //margin-top: -8px;
  //   width: 100%;
  //   text-align: center;
  //     color: #fff;
  //     font-size: 16px;
  // }
    
`;

const  LoginHeadTexts= styled.div`
    font-size: 16px;
    text-align: center;
    color: #527fff;
    margin-bottom: 40px;
    line-height: 14px;
    font-weight: 500;
`;

const SpIcon = styled.span`
    display: flex;
    justify-content: left;
    width: 50px;
    height: 50px;
    
  //background-image: url("images/google_icon.svg");
    
  //height: 0;
  //overflow: hidden;
  //display: inline-block;
  //vertical-align: middle;
  //font-size: 0;
  //line-height: 0;
  //letter-spacing: 0;

  //@media (-webkit-min-device-pixel-ratio: 2),
  //  not all,
  //  not all,
  //  (min-resolution: 192dpi) {
  //  background-image: url(https://www.idus.com/resources/dist/images/sp/sp-icon_1634026706070@2x.png);
  //  -webkit-background-size: 787px 736px;
  //  background-size: 787px 736px;
  //}
  //
  //&.Kakaotalk {
  //  background-position: -631px -626px;
  //  width: 32px;
  //  padding-top: 32px;
  //}
  //
  //&.naver {
  //  background-position: -689px 0px;
  //  width: 32px;
  //  padding-top: 32px;
  //}
  //
  //&.facebook {
  //  background-position: -537px -626px;
  //  width: 32px;
  //  padding-top: 32px;
  //}
  //
  //&.twitter {
  //  background-position: -689px -94px;
  //  width: 32px;
  //  padding-top: 32px;
  //}
  //
  //&.apple {
  //  background-position: -563px -488px;
  //  width: 32px;
  //  padding-top: 32px;
  //}
`;



const CouponImg = styled.img``;
const NeedLogin = styled.p``;


const BackgroundText = styled.span`
   
`;

const Text = styled.strong``;
const Background = styled.span``;


const LoginHeadText = styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    color: #fff;
`;



const LoginHeadLogo = styled.div`
  text-align: center;
  padding-top: 20px;
  margin-bottom: 10px;
`;


// 로그인 전체 박스
const LoginContainer = styled.div`
  background: rgba(11, 11, 13,0.6);

  @media (min-width: 720px) {
    //padding: 1px 0 50px;
    width: 560px;
    display: block;
    //margin: 0 auto;
      overflow: hidden;
      padding: 40px 0;
      margin: 80px auto;
      height: 600px;
  }
`;

// 전체 박스
const LoginWrap = styled.div`
  padding: 1px 0 50px;
  min-height: 100%;
    background-image:url('./images/bg_3.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;
export default Login;
