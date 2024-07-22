// import React from "react";
// import styled from "styled-components";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
//
//
//
// import logo from './images/rock_w_logo.svg';
//
//
// // Nav ==================
// const Nav = () => {
//
//     const initialUserData = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {};
//     const [show, setShow] = useState(false);
//     const { pathname } = useLocation();
//     const navigate = useNavigate();
//
//     const [searchValue, setSearchValue] = useState("");
//
//     const [userData, setUserData] = useState(initialUserData);
//
//
//     // useEffect(() => {
//     //     onAuthStateChanged(auth, (user) => {
//     //         if (!user) {
//     //             navigate("/");
//     //         } else if (user && pathname === "/") {
//     //             navigate("/main");
//     //         }
//     //     });
//     // }, [auth, navigate, pathname]);
//
//
//     // const handleAuth = () => {
//     //     signInWithPopup(auth, provider)
//     //         .then((result) => {
//     //             console.log(result);
//     //             setUserData(result.user);
//     //             localStorage.setItem("userData", JSON.stringify(result.user));
//     //         })
//     //         .catch((error) => {
//     //             console.log(error);
//     //         });
//     // };
//
//     // const handleLogOut = () => {
//     //     signOut(auth)
//     //         .then(() => {
//     //             setUserData();
//     //         })
//     //         .catch((error) => {
//     //             alert(error.message);
//     //         });
//     // };
//
//
//     const listener = () => {
//         if (window.scrollY > 50) {
//             setShow(true);
//         } else {
//             setShow(false);
//         }
//     };
//
//
//     useEffect(() => {
//         window.addEventListener("scroll", listener);
//         return () => {
//             window.removeEventListener("scroll", listener);
//         };
//     }, []);
//
//
//     const handleChange = (e) => {
//         setSearchValue(e.target.value);
//         navigate(`/search?q=${e.target.value}`);
//     };
//
//
//     return (
//         <NavWrapper show={show}>
//             <Logo>
//                 <img alt="logo" src={logo} onClick={() => (window.location.href = "/")} />
//             </Logo>
//
//             {pathname === "/" ? (
//                 <Logins onClick="">Logins</Logins>
//
//             ) : (
//                 <>
//                     <Input />
//                     <Logins onClick="">Sign</Logins>
//                     {/*<SignOut>*/}
//                     {/*    <UserImg />*/}
//
//                     {/*    <DropdownMenu>*/}
//                     {/*        <Logins onClick="">Sign</Logins>*/}
//                     {/*    </DropdownMenu>*/}
//                     {/*</SignOut>*/}
//                 </>
//             )}
//         </NavWrapper>
//     );
// };
//
//
//
// //=================================
// //상단 네비바 - 전체
// const NavWrapper = styled.nav`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     width: 100vw;
//     max-height: 60px;
//     z-index: 999;
//     overflow: hidden;
//     user-select: none;
//
//     //background-color: rgba(22, 22, 23, .8);
//
//     //background:rgba(4,7,20,0.5);
//    // background:rgba(0,0,0,0.2);
//     //backdrop-filter: blur(10px);
//     backdrop-filter: saturate(180%) blur(20px);
//     background: rgba(22, 22, 23, 0.8);
//
//     //border-bottom: 1px solid rgba(4,7,20,0.5);
//     transition: background-color 0.5s ease 0s, max-height 0.5s ease 0s;
//     padding: 0 36px;
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//
//
//   //position: fixed;
//   //top: 0;
//
//   //height: 70px;
//   //  background-color: rgb(11, 11, 13) !important;
//   //  border-top: 1px solid rgb(25, 31, 40);
//
//
//   //letter-spacing: 16px;
//   //z-index: 3;
// `;
//
//
//
// const DropdownMenu = styled.div`
//   position: absolute;
//   top: 48px;
//   right: 0px;
//   background: rgb(19, 19, 19);
//   border: 1px solid rgba(151, 151, 151, 0.34);
//   border-radius: 4px;
//   padding: 10px;
//   font-size: 14px;
//   letter-spacing: 3px;
//   width: 100px;
//   opacity: 0;
// `;
//
// const Sign = styled.div`
//   position: relative;
//   height: 48px;
//   width: 48px;
//   display: flex;
//   cursor: pointer;
//   align-items: center;
//   justify-content: center;
//
//   &:hover {
//     ${DropdownMenu} {
//       opacity: 1;
//       transition-duration: 1s;
//     }
//   }
// `;
//
// const UserImg = styled.img`
//   height: 100%;
//   border-radius: 50%;
// `;
//
//
// //오른쪽 - 로그인 버튼
// const Logins = styled.a`
//     //background-color: #02d6e8;
//     //background-color: #fda4a4;
//     border: 2px solid #fff;
//     border-radius: 4px;
//     color: #fff;
//     font-weight: 600;
//     letter-spacing: 1.5px;
//     //background-color: rgba(0, 0, 0, 0.6);
//     padding: 8px 16px;
//     text-transform: uppercase;
//     //border: 1px solid #f9f9f9;
//     transition: all 0.2s ease 0s;
//
//     //호버시
//     &:hover {
//         background-color: #f9f9f9;
//         color: #000;
//         font-weight: 900;
//         //border-color: transparent;
//     }
// `;
//
// const Input = styled.input`
//     width: 300px;
//     height: 300px;
//   position: fixed;
//   left: 50%;
//   transform: translate(-50%, 0);
//   background-color: rgba(0, 0, 0, 0.582);
//   border-radius: 5px;
//   color: white;
//   padding: 5px;
//   border: 1px solid lightgray;
// `;
//
//
// const Logo = styled.a`
//   padding: 0;
//   width: 100%;
//   margin-top: 20px;
//   //max-height: 70px;
//   //font-size: 0;
//   display: inline-block;
//     //로고 이미지
//   img {
//       position: relative;
//       display: flex;
//       width: 140px;
//       height: 140px;
//       margin: auto 0;
//       transition: opacity 0.5s ease 0s;
//       padding-bottom: 20px;
//   }
// `;
//
// export default Nav
