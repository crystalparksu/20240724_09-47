// import React, {useState, useEffect} from 'react';
// import {useNavigate, useLocation} from "react-router-dom";
// import axios from "axios";
//
// // css
// import "../../common/css/ChangePassword.css"
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
//     return (<>
//         <div className="wrap">
//
//             <div className="step-bar">
//                 <span className="gradation-blue"></span>
//             </div>
//
//             <div className="cp_title">
//                 <h2 className="cp_title_h2">{isResetMode ? '비밀번호 재설정' : '비밀번호 변경'}</h2>
//                 <h5 className="cp_title_h5">새비밀번호를 변경하세요</h5>
//             </div>
//
//
//             {/*폼*/}
//
//
//             <form className='ChangePasswordForm' onSubmit={handleSubmit}>
//
//                 <label className="label">
//                     <span>*</span> 새 비밀번호
//                 </label>
//
//
//                 <div className="change_password">
//                     {/*<div>*/}
//                     {/*    {isResetMode ? '새 비밀번호:' : '비밀번호 변경:'}*/}
//                     {/*</div>*/}
//
//                     <input
//                         type="password"
//                         name="memNewPassword"
//                         placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
//                         id=""
//                         className="new_password"
//                         value={passwords.memNewPassword}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//
//
//                 {/* 비밀번호 오류 메시지 */}
//                 {passwordError && <div className="error-message">{passwordError}</div>}
//
//
//                 <label className="label">
//                     <span>*</span> 새 비밀번호 확인
//                 </label>
//
//                 <div className="change_password">
//                     <input
//                         placeholder="비밀번호 (영문+숫자+특수문자 8자 이상)"
//                         type="password"
//                         name="memNewPasswordCheck"
//                         id=""
//                         className="confirm_password"
//                         value={passwords.memNewPasswordCheck}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//
//                     <input type="submit"
//                            className="ChangePwBtn"
//                            value={isResetMode ? '비밀번호 재설정' : '변경하기'}
//                            onChange={handleChange}
//                     />
//
//                 {/*회원가입 속 로그인하러 가기*/}
//                 <div className="login_link">
//                     이전으로 돌아가기&nbsp;&nbsp;<a href="/login">로그인</a>
//                 </div>
//             </form>
//
//
//
//
//
//         </div>
//
//
//         {/* 변경 모드일 때만 돌아가는 버튼있음 */}
//         {/*{!isResetMode && (<div className="return_button">*/}
//         {/*        <button className="ReturnBtn"*/}
//         {/*                onClick={() => navigate(-1)}>돌아가기*/}
//         {/*        </button>*/}
//         {/*    </div>)}*/}
//
//
//         </>
//     );
// }
//
// export default ChangePassword;