// import React, {useState, useEffect} from 'react';
// import {useNavigate, useLocation} from "react-router-dom";
// import axios from "axios";
//
// // css
// import "../../common/css/ChangePassword.css"
// import styled from "styled-components";
//
//
// function ChangePassword() {
//
//     const navigate = useNavigate();
//
//     const location = useLocation();
//
//     const [isResetMode, setIsResetMode] = useState(false);
//
//     const [passwords, setPasswords] = useState({
//         memNewPassword: '', memNewPasswordCheck: ''
//     });
//
//     const [passwordError, setPasswordError] = useState('');
//
//     // URL 확인 후 모드 변경
//     useEffect(() => {
//         const params = new URLSearchParams(location.search);
//         const tokenParam = params.get('token');
//         if (tokenParam) {
//             setIsResetMode(true);
//             sessionStorage.setItem('resetToken', tokenParam);
//             navigate(location.pathname, {replace: true});
//         }
//     }, [location, navigate]);
//
//     // 비밀번호 유효성 검사 조건
//     const validatePassword = (password) => {
//         const minLength = 8;
//         const hasUpperCase = /[A-Z]/.test(password);
//         const hasLowerCase = /[a-z]/.test(password);
//         const hasNumbers = /\d/.test(password);
//         const hasNonalphas = /\W/.test(password);
//
//         if (password.length < minLength) {
//             return '비밀번호는 최소 8자 이상이어야 합니다.';
//         } else if (!(hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas)) {
//             return '비밀번호는 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다.';
//         }
//         return '';
//     };
//
//     // 필드 값 변경 될 시 호출
//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setPasswords(prevState => ({
//             ...prevState, [name]: value
//         }));
//         if (name === 'memNewPassword') {
//             setPasswordError(validatePassword(value));
//         }
//     };
//
//     // 폼 제출 시 호출
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         // 비밀번호 검사
//         if (passwordError) {
//             alert(passwordError);
//             return;
//         }
//
//         // 일치 여부 검사
//         if (passwords.memNewPassword !== passwords.memNewPasswordCheck) {
//             alert('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
//             return;
//         }
//
//         try {
//             let response;
//             const updatePasswordDto = {
//                 memNewPassword: passwords.memNewPassword, memNewPasswordCheck: passwords.memNewPasswordCheck
//             };
//
//             // 재설정 & 변경 모드 엔드포인트
//             if (isResetMode) {
//                 const token = sessionStorage.getItem('resetToken');
//                 response = await axios.post('/auth/reset-password', updatePasswordDto, {params: {token}});
//                 sessionStorage.removeItem('resetToken');
//             } else {
//                 const accessToken = localStorage.getItem('accessToken');
//                 response = await axios.put('/auth/update', updatePasswordDto, {
//                     headers: {'Authorization': `Bearer ${accessToken}`}
//                 });
//             }
//
//             // 비밀번호 변경시 알림, 이동
//             if (response.status === 200) {
//                 alert('비밀번호가 성공적으로 변경되었습니다.');
//                 navigate(isResetMode ? '/login' : -1);
//             }
//         } catch (error) {
//             console.error('Error changing password:', error);
//             alert(error.response?.data || '비밀번호를 재설정하는 동안 오류가 발생했습니다');
//         }
//     };
//
//
//     return (<WrapLogin>
//             <LoginWrap>
//
//                 <LoginSection>
//                     <div className="step-bar">
//                         <span className="gradation-blue"></span>
//                     </div>
//                 </LoginSection>
//
//
//                 <LoginTitle>비밀번호 변경
//                     <h5>아이디와 이메일로 간편하게 무빙을 시작하세요!</h5>
//                 </LoginTitle>
//
//
//                 {/*아이디*/}
//                 <FormBlock>
//                     <div className="cp_title">
//                         <h2>{isResetMode ? '비밀번호 재설정' : '비밀번호 변경'}</h2>
//                     </div>
//
//                     <div className="password_form_div">
//                         <form className='ChangePasswordForm' onSubmit={handleSubmit}>
//                             <div className="change_password">
//                                 <div>
//                                     {isResetMode ? '새 비밀번호:' : '비밀번호 변경:'}
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="password"
//                                         name="memNewPassword"
//                                         id=""
//                                         className="new_password"
//                                         value={passwords.memNewPassword}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             </div>
//
//                             {/* 비밀번호 오류 메시지 */}
//                             {passwordError && <div className="error-message">{passwordError}</div>}
//
//                             {/* 변경 모드일 때만 돌아가는 버튼있음 */}
//
//                             {!isResetMode && (
//                                 <div className="return_button">
//                                     <button className="ReturnBtn"
//                                             onClick={() => navigate(-1)}>돌아가기
//                                     </button>
//                                 </div>
//                                 )}
//
//
//                             <div className="change_password">
//                                 <div>
//                                     비밀번호 재확인:
//                                 </div>
//                                 <div>
//                                     <input
//                                         type="password"
//                                         name="memNewPasswordCheck"
//                                         id=""
//                                         className="confirm_password"
//                                         value={passwords.memNewPasswordCheck}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                             </div>
//
//                             <div className="submit_button">
//                                 <input type="submit"
//                                        name=""
//                                        id=""
//                                        className="ChangePwBtn"
//                                        value={isResetMode ? '비밀번호 재설정' : '변경하기'}/>
//                             </div>
//                         </form>
//                     </div>
//
//                 </FormBlock>
//             </LoginWrap>
//         </WrapLogin>
//
//
//
//     );
// }
// export default ChangePassword;
//
//
// const AdditionTxt = styled.button`
//     margin-top: 30px;
//     color: #666;
//     font-size: 14px;
//
//     a {
//         text-decoration: underline;
//     }
// `;
//
// const AuthBtn = styled.button`
//     display: inline-block;
//     vertical-align: middle;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     -webkit-border-radius: 2px;
//     -moz-border-radius: 2px;
//     border-radius: 2px;
//     font-size: 10px;
//     text-align: center;
//     white-space: nowrap;
//     line-height: 1.4;
//     background: rgba(11, 11, 13, 0.8);
//     color: #a5a5a5;
//     border: 1px solid #ddd !important;
//     cursor: default !important;
//     width: 100%;
//     height: 48px;
//     line-height: 48px;
//     font-size: 16px;
//     position: absolute;
//     top: 0;
//     right: 0;
//     position: absolute;
//     width: 100px;
// `;
//
// const BtnLogin = styled.button`
//     border-radius: 2px;
//     text-align: center;
//     white-space: nowrap;
//     box-sizing: border-box;
//     display: inline-block;
//     vertical-align: middle;
//     color: #fff;
//     background: #1351f9;
//     width: 100%;
//     height: 48px;
//     line-height: 48px;
//     font-size: 16px;
// `;
//
// const FormBlockSubmit = styled.div`
//     text-align: left;
//     margin: 20px 0 0;
// `;
//
// const TermsError = styled.span`
//     display: none;
//     cursor: default !important;
//     color: #ff27a3;
//     margin: 10px 0 0;
// `;
//
// const Terms1Error = styled.span`
//     color: #ff27a3;
//     margin: 10px 0 0;
//     display: block !important;
//     cursor: default !important;
// `;
// const Terms2A = styled.a`
//     text-decoration: underline;
//     overflow: hidden;
//     display: block;
//     font-size: 14px;
//     color: #a5a5a5;
//     margin-top: 10px;
// `;
//
// const Terms1Label = styled.label`
//     overflow: hidden;
//     display: block;
//     font-size: 14px;
//     color: #a5a5a5;
// `;
//
// const Terms1 = styled.input`
//     // -webkit-appearance: none;
//     background: #ff27a3;
//     display: inline-block;
//     position: relative;
//     height: 18px;
//     width: 18px;
//     vertical-align: middle;
//     box-sizing: border-box;
//     border: 0;
//     margin: 0;
//     outline: none;
//
//     &:before {
//             // content: ${(props) => (props.checked ? console.log("✓") : "")};
//         cursor: pointer;
//             // content: ${(props) => (props.checked ? console.log("✓") : "")};
//         display: inline-block;
//         line-height: 16px;
//         width: 16px;
//         height: 16px;
//         background: #fff;
//         position: absolute;
//         top: 0px;
//         left: 0px;
//         border: 1px solid #acacac;
//         -webkit-border-radius: 2px;
//         -moz-border-radius: 2px;
//         border-radius: 2px;
//         text-align: center;
//         outline: none;
//
//     }
// `;
//
// const TermsItem = styled.div`
//     margin-top: 5px;
// `;
//
// const TermsLabel = styled.label`
//     overflow: hidden;
//     display: block;
//     font-size: 14px;
//     color: #a5a5a5;
// `;
//
// const BpCheckAll = styled.input`
//     -webkit-appearance: none;
//     background: transparent;
//     display: inline-block;
//     position: relative;
//     height: 18px;
//     width: 18px;
//     vertical-align: middle;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     border: 0;
//     margin: 0;
//     outline: none;
//
//     &:before {
//         font-size: 16px;
//         font-style: normal;
//         content: "✓";
//         border: 1px solid #fff;
//         background: #f1c333;
//         color: #fff;
//         cursor: pointer;
//         display: inline-block;
//         line-height: 16px;
//         width: 16px;
//         height: 16px;
//         position: absolute;
//         top: 0px;
//         left: 0px;
//         border-radius: 2px;
//         text-align: center;
//         outline: none;
//     }
// `;
//
// const InputCheckBox = styled.div`
//     float: left;
//     margin-right: 10px;
//     display: inline-block;
// `;
//
// const TermsBody = styled.div`
//     padding-bottom: 20px;
//     //border-bottom: 1px solid #333;
// `;
//
// const TermsHead = styled.div`
//     //border-bottom: 1px solid #333;
//     padding: 5px 0;
//
// `;
//
// const Terms = styled.div`
//     text-align: left;
//     margin: 20px 0 0;
// `;
//
// const FormBlockCheckAllWrap = styled.div`
//     text-align: left;
//     margin: 20px 0 0;
// `;
//
// const UiInputBtnCombo = styled.div`
//     position: relative;
// `;
//
// // 기타 사이즈
// const EmailsInput = styled.input`
//     font-size: 14px;
//     height: 48px;
//     background: #fff;
//     line-height: 16px;
//     border: 1px solid #acacac;
//     width: 75%;
//     box-sizing: border-box;
//     padding: 2px 8px;
//     border-radius: 2px;
//     appearance: none;
//     outline: none;
//     margin-right: 15px;
// `;
//
// //인증버튼
// // const Button= styled.button`
// //     width: 100px;
// //     margin-top: 22px;
// //     height: 40px;
// //     margin-right: 20px;
// //     border-radius: 10px;
// //     text-align: center;
// //     `;
//
//
// //기본 인 풋 박스
// const EmailInput = styled.input`
//     font-size: 14px;
//     height: 48px;
//     background: #fff;
//     line-height: 16px;
//     border: 1px solid #acacac;
//     width: 100%;
//     box-sizing: border-box;
//     padding: 2px 8px;
//     border-radius: 2px;
//     appearance: none;
//     outline: none;
// `;
//
// //전화번호 입력
// const PhoneInput = styled.input`
//     font-size: 14px;
//     height: 48px;
//     background: #fff;
//     line-height: 16px;
//     border: 1px solid #acacac;
//     width: 100%;
//     box-sizing: border-box;
//     padding: 2px 8px;
//     border-radius: 2px;
//     appearance: none;
//     outline: none;
// `;
//
//
// // 전체 인증 버튼 감싸는 박스
// const InputTextSizeWTypeL = styled.div`
//     box-sizing: border-box;
//     vertical-align: middle;
//     height: 48px;
//     display: block;
//     width: 100%;
//     margin-top: 10px;
//     text-align: left;
//
// `;
//
//
// const EmailsButton = styled.button`
//     width: 100px;
//     height: 50px;
//     //margin-right: 20px;
//     text-align: center;
//     //background-color: #1351f9;
//     background-color: transparent !important;
//     border: solid 1px #f4f4f4 !important;
//     color: #f4f4f4 !important;
//     /* border: 1px solid red; */
//
//     &:hover {
//         border: solid 1px #1351f9;
//         color: #1351f9;
//     }
//
//     &:active {
//         border: solid 1px #ff27a3;
//         color: #ff27a3;
//     }
// `;
//
//
// const FormError = styled.span`
//     color: #ff27a3;
//     margin: 10px 0 0;
//     display: block;
//     cursor: default !important;
//     font-size: 14px;
//     font-family: 'SUIT-Regular' !important;
//     font-weight: 800;
// `;
//
// // 사용자 작성 구간
// const InputTextSizeW = styled.div`
//
//     &.formError {
//         cursor: default !important;
//     }
//
//     display: block;
//     width: 100%;
//     margin-top: 10px;
//     text-align: left;
//     vertical-align: middle;
//     box-sizing: border-box;
//     outline: none;
//
// `;
//
// const FormBlockBody = styled.div`
//     text-align: left;
// `;
//
// // 성별 박스
// const CustomSelect = styled.select`
//     display: block;
//     width: 100%;
//     margin-top: 10px;
//     text-align: left;
//     vertical-align: middle;
//     box-sizing: border-box;
//     outline: none;
//     height: 48px;
// `;
//
//
// const CustomOption = styled.option`
//     outline: none;
//     cursor: pointer;
//
// `;
//
//
// const AsteriskRed = styled.em`
//     color: #ff27a3;
//     font-size: 18px;
//     display: inline-block;
// `;
//
// // 모든 폼 폰트 사이즈
// const FormBlockHead = styled.label`
//     font-size: 14px;
//     color: #a5a5a5;
//     line-height: 14px;
//     font-family: 'SUIT-Regular' !important;
//     font-weight: 200;
// `;
//
//
// const FormBlock = styled.div`
//     text-align: left;
//     margin: 20px 0 0;
//     outline: none;
// `;
// const Title = styled.h3``;
// const IsActive = styled.li``;
//
// const SignupStep = styled.div`
//     text-align: center;
//     margin: 45px 0 20px;
//
//     ${Title} {
//         font-size: 18px;
//         font-weight: normal;
//     }
//
//     &.wrap {
//         text-align: center;
//         margin: 45px 0 20px;
//
//         ${IsActive} {
//             color: #fff;
//             border-color: #1351f9;
//             background: #1351f9;
//         }
//
//         ul {
//             display: inline-block;
//             position: relative;
//             border-top: 1px solid #aaa;
//         }
//
//         li {
//             position: relative;
//             top: -15px;
//             z-index: 10;
//             background: #fff;
//             color: #000;
//             border: 1px solid #999;
//             display: inline-block;
//             width: 32px;
//             height: 32px;
//             line-height: 32px;
//             font-size: 14px;
//             -webkit-border-radius: 20px;
//             border-radius: 20px;
//         }
//
//         li + li {
//             margin-left: 50px;
//         }
//     }
// `;
//
// // 회원가입 타이틀 문구
// const LoginTitle = styled.h2`
//     color: #fff;
//     font-size: 32px;
//     line-height: 32px;
//     text-align: center;
//     position: relative;
//     top: -10px;
//     display: inline-block;
//     padding: 0 10px;
//
//     h5 {
//         color: #a3a3a3;
//         font-size: 1rem;
//         font-weight: normal;
//         word-break: keep-all;
//         margin-top: 10px;
//     }
// `;
//
//
// //회원가입 시작
// const LoginSection = styled.section`
//     text-align: center;
//     //margin-top: 30px;
//     padding-bottom: 20px;
//
//
//     .step-bar {
//         width: 100%;
//         height: 5px;
//         background: #2f2f2f;
//         position: absolute;
//         top: 0;
//         left: 0;
//     }
//
//     .gradation-blue {
//         width: 25%;
//         height: 5px;
//         display: block;
//         text-indent: -9999px;
//         background-color: #1351f9;
//     }
// `;
//
//
// const SpIcon = styled.span`
//     height: 0;
//     overflow: hidden;
//     display: inline-block;
//     vertical-align: middle;
//     font-size: 0;
//     line-height: 0;
//     letter-spacing: 0;
//     background-position: -91px -488px;
//     width: 100px;
//     padding-top: 40px;
// `;
//
// const LogoA = styled.div`
//     display: block;
// `;
//
// const LoginLogo = styled.div`
//     padding-top: 40px;
//     text-align: center;
//     padding: 40px 0 0;
// `;
//
// // 로그인 전체 박스
// const LoginWrap = styled.div`
//     //min-height: 100%;
//     background: rgba(11, 11, 13, 0.8);
//
//
// `;
//
// const ReauthPhone = styled.form`
//     //width: 384px;
//     display: block;
//     //max-width: 41.667rem;
//     //margin: 4.167rem auto 0;
// `;
//
// const HeadBannerGroup = styled.div`
//     position: relative;
//     width: 100%;
//     height: auto;
// `;
//
// // 전체 박스
// const WrapLogin = styled.div`
//     //padding: 1px 0 50px;
//     width: 560px;
//     position: relative;
//     margin: 80px auto;
//     //min-height: 100%;
//     padding: 40px 40px;
//     background: rgba(11, 11, 13, 0.8);
// `;
//
//
