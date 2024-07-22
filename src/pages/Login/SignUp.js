import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Button} from "react-bootstrap";




// SignUp-회원가입
function SignUp() {
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const allAgreeHandler = (checked) => {
        setIsAllChecked(!isAllChecked);
        if (checked) {
            setCheckedItems([...checkedItems, "provision", "privacy"]);
        } else if (
            (!checked && checkedItems.includes("provision")) ||
            (!checked && checkedItems.includes("privacy"))
        ) {
            setCheckedItems([]);
        }
    };

    const agreeHandler = (checked, value) => {
        if (checked) {
            setCheckedItems([...checkedItems, value]);
        } else if (!checked && checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((el) => el !== value));
        }
    };


    //알림창
    const fake = () => {
        alert("현재 개인정보를 수집하고 있지 않습니다🙂 안심하고 테스트 해보세요.");
    };

    useEffect(() => {
        if (checkedItems.length >= 2) {
            setIsAllChecked(true);
        } else {
            setIsAllChecked(false);
        }
    }, [checkedItems]);


    //변수 설정-이메일/패스워드/닉네임
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");

    let body = {
        email: email,
        password: password,
        nickname: nickname,
    };

    const onSubmit = async () => {
        try {
            const response = await axios.post(
                "https://backend.alittlevanilla.kro.kr/member/signup",
                body,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            console.log(response.data.code);
            if (response.data.code === 1000) {
                window.location.href = "/emailcheck";
            }
        } catch (e) {
            console.log(e);
        }
    };

    // const onEmailAuth = async () => {
    //   console.log("onEmailAuth!");

    //   try {
    //     const response = await axios.post("https://backend.alittlevanilla.kro.kr/member/", body, {
    //       headers: { "Content-Type": "application/json" },
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    const emailCheck = async () => {
        if (email === "") {
            setCheckedEmail("필수 항목입니다.");
        } else {
            var regex =
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            console.log("비밀번호 유효성 검사 :: ", regex.test(email));

            if (regex.test(email)) {
                try {
                    const response = await axios.get(
                        "https://backend.alittlevanilla.kro.kr/member/" + email
                    );
                    if (response.data === true) {
                        setCheckedEmail("이미 존재하는 이메일 입니다.");
                    } else {
                        setCheckedEmail("가능");
                        console.log("가능");
                    }
                } catch (e) {
                    console.log(e);
                }
            } else {
                setCheckedEmail("이메일 주소를 확인해 주세요.");
            }
        }
    };

    const [checkedEmail, setCheckedEmail] = useState("");

    return (
        <WrapLogin>
            <HeadBannerGroup />
            <ReauthPhone>
                <LoginWrap>
                    <LoginLogo>
                        <h1>
                            {/* <LogoA href="/">
                <SpIcon />
              </LogoA> */}
                        </h1>
                    </LoginLogo>

                    <LoginSection>
                        <div className="step-bar">
                            <span className="gradation-blue"></span>
                        </div>
                        <LoginTitle>회원가입
                            <h5>아이디와 이메일로 간편하게 무빙을 시작하세요!</h5>
                        </LoginTitle>


                        {/*<SignupStep className="wrap">*/}
                        {/*    <ul>*/}
                        {/*        <li>1</li>*/}
                        {/*        <IsActive>2</IsActive>*/}
                        {/*    </ul>*/}
                        {/*    <Title>가입 정보 입력하기</Title>*/}
                        {/*</SignupStep>*/}


                        {/*아이디*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 아이디
                            </FormBlockHead>
                            <FormBlockBody>
                                <InputTextSizeW>
                                    <EmailInput
                                        id="email"
                                        type="email"
                                        value={email}
                                        placeholder="아이디를 입력해주세요."
                                        required
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        onBlur={() => emailCheck()}
                                    />
                                </InputTextSizeW>
                                <FormError>{checkedEmail}</FormError>
                            </FormBlockBody>
                        </FormBlock>


                        {/*비밀번호*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 비밀번호
                            </FormBlockHead>
                            <FormBlockBody>
                                <InputTextSizeW>
                                    <EmailInput
                                        id="password"
                                        // type="password"
                                        value={password}
                                        placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
                                        required
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </InputTextSizeW>
                            </FormBlockBody>
                            <FormBlockBody>
                                <InputTextSizeW>
                                    <EmailInput placeholder="비밀번호 확인" required/>
                                </InputTextSizeW>
                            </FormBlockBody>
                        </FormBlock>


                        {/*이름*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 이름
                            </FormBlockHead>
                            <FormBlockBody>
                                <InputTextSizeWTypeL>
                                    <EmailInput
                                        id="name"
                                        value={nickname}
                                        type="text"
                                        placeholder="이름을 입력해 주세요"
                                        required
                                        onChange={(e) => {
                                            setNickname(e.target.value);
                                        }}
                                    />
                                </InputTextSizeWTypeL>
                            </FormBlockBody>
                        </FormBlock>


                        {/*전화번호*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 전화번호
                            </FormBlockHead>
                            <FormBlockBody>
                                <UiInputBtnCombo>
                                    <InputTextSizeWTypeL>
                                        <EmailInput type="hidden" required/>
                                        <EmailInput
                                            type="tel"
                                            placeholder="010-1234-5678"
                                            data-auth="cell_phone"
                                            required
                                        />
                                    </InputTextSizeWTypeL>
                                </UiInputBtnCombo>
                            </FormBlockBody>
                        </FormBlock>


                        {/*★★★★여기부터!!!!!!!!!!!!!!!!!!!*/}
                        {/*이메일 인증*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 이메일
                            </FormBlockHead>
                            <FormBlockBody>
                                <UiInputBtnCombo>
                                    <InputTextSizeWTypeL>
                                        <EmailsInput type="hidden" required/>
                                        <EmailsInput
                                            type="email"
                                            placeholder="이메일을 입력해주세요"
                                            data-auth=""
                                            required
                                        />
                                        <Button type="button" className="idbutton"
                                            onClick="">이메일 전송
                                        </Button>

                                    </InputTextSizeWTypeL>
                                </UiInputBtnCombo>
                            </FormBlockBody>
                        </FormBlock>


                        {/*이메일 인증*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 인증코드
                            </FormBlockHead>
                            <FormBlockBody>
                                <UiInputBtnCombo>
                                    <InputTextSizeWTypeL>
                                        <EmailsInput type="hidden" required/>
                                        <EmailsInput
                                            type="email"
                                            placeholder="이메일을 입력해주세요"
                                            data-auth=""
                                            required
                                        />
                                        <Button type="button" className="idbutton"
                                                onClick="">인증번호 전송
                                        </Button>

                                    </InputTextSizeWTypeL>
                                </UiInputBtnCombo>
                            </FormBlockBody>
                        </FormBlock>







                        {/*생년월일*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 생년월일
                            </FormBlockHead>
                            <FormBlockBody>
                                <UiInputBtnCombo>
                                    <InputTextSizeWTypeL>
                                        <EmailInput type="hidden" required/>
                                        <EmailInput
                                            type="tel"
                                            placeholder="010-1234-5678"
                                            data-auth="cell_phone"
                                            required
                                        />
                                    </InputTextSizeWTypeL>
                                </UiInputBtnCombo>
                            </FormBlockBody>
                        </FormBlock>


                        {/*성별*/}
                        <FormBlock>
                            <FormBlockHead>
                                <AsteriskRed>*</AsteriskRed> 성별
                            </FormBlockHead>
                            <FormBlockBody>
                                <UiInputBtnCombo>
                                    <InputTextSizeWTypeL>
                                        <EmailInput type="hidden" required/>
                                        <EmailInput
                                            type="tel"
                                            placeholder="010-1234-5678"
                                            data-auth="cell_phone"
                                            required
                                        />
                                    </InputTextSizeWTypeL>
                                </UiInputBtnCombo>
                            </FormBlockBody>
                        </FormBlock>




                        {/*모두 동의 합니다*/}
                        <FormBlockCheckAllWrap>
                            <Terms>
                                <TermsHead>
                                    <InputCheckBox>
                                        <input
                                            type="checkbox"
                                            value="agree"
                                            onChange={(e) => {
                                                allAgreeHandler(e.currentTarget.checked);
                                            }}
                                            checked={isAllChecked}
                                        />
                                    </InputCheckBox>
                                    <TermsLabel onClick={fake}>모두 동의합니다.</TermsLabel>
                                </TermsHead>

                                <TermsBody>
                                    <TermsItem>
                                        <InputCheckBox>
                                            {/* <Terms1 type="checkbox"></Terms1> */}
                                            <input
                                                type="checkbox"
                                                value="provision"
                                                onChange={(e) => {
                                                    agreeHandler(e.currentTarget.checked, e.target.value);
                                                }}
                                                checked={
                                                    checkedItems.includes("provision") ? true : false
                                                }
                                            />
                                        </InputCheckBox>
                                        <Terms1Label>만 14세 이상입니다.</Terms1Label>
                                    </TermsItem>
                                    {/*  */}
                                    <TermsItem>
                                        <InputCheckBox>
                                            {/* <Terms1 type="checkbox"></Terms1> */}
                                            <input
                                                type="checkbox"
                                                value="privacy"
                                                onChange={(e) => {
                                                    agreeHandler(e.currentTarget.checked, e.target.value);
                                                }}
                                                checked={
                                                    checkedItems.includes("privacy") ? true : false
                                                }
                                            />
                                        </InputCheckBox>
                                        <Terms2A onClick={fake}>이용약관 필수 동의</Terms2A>
                                    </TermsItem>
                                    {/*  */}
                                </TermsBody>
                            </Terms>

                            <Terms1Error/>
                            <TermsError/>
                        </FormBlockCheckAllWrap>


                        {/*회원가입 버튼*/}
                        <FormBlockSubmit>
                            <FormBlockBody>
                                <BtnLogin
                                    type="button"
                                    onClick={() => {
                                        onSubmit();
                                    }}
                                >
                                    가입하기
                                </BtnLogin>
                            </FormBlockBody>
                        </FormBlockSubmit>


                    </LoginSection>
                </LoginWrap>
            </ReauthPhone>
        </WrapLogin>
    );
}

const AuthBtn = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  line-height: 1.4;
  background: rgba(11, 11, 13, 0.8);
  color: #a5a5a5;
  border: 1px solid #ddd !important;
  cursor: default !important;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  position: absolute;
  width: 100px;
`;

const BtnLogin = styled.button`
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  background: #1351f9;
  width: 100%;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
`;

const FormBlockSubmit = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const TermsError = styled.span`
  display: none;
  cursor: default !important;
  color: #ff27a3;
  margin: 10px 0 0;
`;

const Terms1Error = styled.span`
  color: #ff27a3;
  margin: 10px 0 0;
  display: block !important;
  cursor: default !important;
`;
const Terms2A = styled.a`
  text-decoration: underline;
  overflow: hidden;
  display: block;
  font-size: 14px;
    color: #a5a5a5;
    margin-top: 10px;
`;

const Terms1Label = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
    color: #a5a5a5;
`;

const Terms1 = styled.input`
  // -webkit-appearance: none;
  background: #ff27a3;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  box-sizing: border-box;
  border: 0;
  margin: 0;
    outline: none;

  &:before {
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
    cursor: pointer;
    // content: ${(props) => (props.checked ? console.log("✓") : "")};
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
      outline: none;
   
  }
`;

const TermsItem = styled.div`
  margin-top: 5px;
`;

const TermsLabel = styled.label`
  overflow: hidden;
  display: block;
  font-size: 14px;
    color: #a5a5a5;
`;

const BpCheckAll = styled.input`
  -webkit-appearance: none;
  background: transparent;
  display: inline-block;
  position: relative;
  height: 18px;
  width: 18px;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 0;
  margin: 0;
    outline: none;

  &:before {
    font-size: 16px;
    font-style: normal;
    content: "✓";
    border: 1px solid #fff;
    background: #f1c333	;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    line-height: 16px;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 2px;
    text-align: center;
      outline: none;
  }
`;

const InputCheckBox = styled.div`
  float: left;
  margin-right: 10px;
  display: inline-block;
`;

const TermsBody = styled.div`
    padding-bottom: 20px;
    //border-bottom: 1px solid #333;
`;

const TermsHead = styled.div`
  //border-bottom: 1px solid #333;
  padding: 5px 0;
    
`;

const Terms = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const FormBlockCheckAllWrap = styled.div`
  text-align: left;
  margin: 20px 0 0;
`;

const UiInputBtnCombo = styled.div`
  position: relative;
`;

// 기타 사이즈
const EmailsInput= styled.input`
    font-size: 14px;
    height: 48px;
    background: #fff;
    line-height: 16px;
    border: 1px solid #acacac;
    width: 75%;
    box-sizing: border-box;
    padding: 2px 8px;
    border-radius: 2px;
    appearance: none;
    outline: none;
    margin-right: 15px;
    `;

//인증버튼
// const Button= styled.button`
//     width: 100px;
//     margin-top: 22px;
//     height: 40px;
//     margin-right: 20px;
//     border-radius: 10px;
//     text-align: center;
//     `;



const EmailInput = styled.input`
  font-size: 14px;
  height: 48px;
  background: #fff;
  line-height: 16px;
  border: 1px solid #acacac;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 2px;
  appearance: none;
    outline: none;
`;


// 전체 인증 버튼 감싸는 박스
const InputTextSizeWTypeL = styled.div`
  box-sizing: border-box;
  vertical-align: middle;
  height: 48px;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;

    .idbutton{
        width: 100px;
        height: 50px;
        //margin-right: 20px;
        text-align: center;
        //background-color: #1351f9;
        background-color: transparent !important;
        border: solid 1px #2e2e2e !important;
        color: #4e4e4e !important;
        /* border: 1px solid red; */
    }
`;

const FormError = styled.span`
  color: #ff27a3;
  margin: 10px 0 0;
  display: block;
  cursor: default !important;
    font-size: 14px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 800;
`;

const InputTextSizeW = styled.div`
  &.formError {
    cursor: default !important;
  }
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: left;
  vertical-align: middle;
  box-sizing: border-box;
    outline: none;
`;

const FormBlockBody = styled.div`
  text-align: left;
`;

const AsteriskRed = styled.em`
  color: #ff27a3;
  font-size: 18px;
  display: inline-block;
`;

// 모든 폼 폰트 사이즈
const FormBlockHead = styled.label`
  font-size: 14px;
    color: #a5a5a5;
    line-height: 14px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 200;
`;


const FormBlock = styled.div`
  text-align: left;
  margin: 20px 0 0;
    outline: none;
`;
const Title = styled.h3``;
const IsActive = styled.li``;

const SignupStep = styled.div`
  text-align: center;
  margin: 45px 0 20px;

  ${Title} {
    font-size: 18px;
    font-weight: normal;
  }

  &.wrap {
    text-align: center;
    margin: 45px 0 20px;

    ${IsActive} {
      color: #fff;
      border-color: #1351f9;
      background: #1351f9;
    }

    ul {
      display: inline-block;
      position: relative;
      border-top: 1px solid #aaa;
    }

    li {
      position: relative;
      top: -15px;
      z-index: 10;
      background: #fff;
      color: #000;
      border: 1px solid #999;
      display: inline-block;
      width: 32px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
    }

    li + li {
      margin-left: 50px;
    }
  }
`;

// 회원가입 타이틀 문구
const LoginTitle = styled.h2`
    color: #fff;
    font-size: 32px;
    line-height:  32px;
  text-align: center;
  position: relative;
  top: -10px;
  display: inline-block;
  padding: 0 10px;
    
    h5{
        color: #a3a3a3;
        font-size: 1rem;
        font-weight: normal;
        word-break: keep-all;
        margin-top: 10px;
    }
`;


//회원가입 시작
const LoginSection = styled.section`
  text-align: center;
  //margin-top: 30px;
  padding-bottom: 100px;
    
    
    .step-bar{
        width: 100%;
        height: 5px;
        background: #2f2f2f;
        position: absolute;
        top: 0;
        left: 0;
    }
    .gradation-blue{
        width: 25%;
        height: 5px;
        display: block;
        text-indent: -9999px;
        background-color: #1351f9;
    }
`;


const SpIcon = styled.span`
  height: 0;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  background-position: -91px -488px;
  width: 100px;
  padding-top: 40px;
`;

const LogoA = styled.div`
  display: block;
`;

const LoginLogo = styled.div`
  padding-top: 40px;
  text-align: center;
  padding: 40px 0 0;
`;

// 로그인 전체 박스
const LoginWrap = styled.div`
  //min-height: 100%;
    background: rgba(11, 11, 13,0.8);
   
    
`;

const ReauthPhone = styled.form`
  //width: 384px;
  display: block;
    //max-width: 41.667rem;
    //margin: 4.167rem auto 0;
`;

const HeadBannerGroup = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

// 전체 박스
const WrapLogin = styled.div`
  //padding: 1px 0 50px;
    width: 560px;
    position: relative;
    margin: 80px auto;
  //min-height: 100%;
    padding: 40px 40px;
  background:  rgba(11, 11, 13, 0.8);
    font-size: calc(6px + 0.5vw);
`;

export default SignUp;
