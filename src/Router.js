import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from './components/Nav/Navs';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import ChangePassword from './pages/Login/ChangePassword';
import FindIdPassword from './pages/Login/FindIdPassword';

import NoticeList from "./pages/Notice/NoticeList";
import NoticeView from "./pages/Notice/NoticeView";
import NoticeWrite from "./pages/Notice/NoticeWrite";
import MemberInfo from "./pages/Login/MemberInfo";
// import MyPage_ from "./pages/Login/Mypage/MyPage_";
import MyPage from "./pages/Login/Mypage/MyPage";


const Router = () => {
    return (
        <BrowserRouter>
            <Navs />

            <Routes>
                {/*<Route index path="/" element={<Layout />} />*/}
                <Route index path="/" element={<Main />} />
                {/*<Route path="/users/login" element={<GoogleAPI />} />*/}
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                {/*비밀번호 변경*/}
                <Route path="/user/changePassword" element={<ChangePassword />} />

                {/*아이디 찾기/비밀번호재설정*/}
                <Route path="/findIdPassword" element={<FindIdPassword />} />
                {/*<Route path="/findIdPassword" element={<Find />} />*/}

                {/*<Route path="/user/withdrawMember" element={<WithdrawMember />} />*/}

                {/*공지사항*/}
                <Route path='/user/notice' element={<NoticeList />}  />
                <Route path='/user/notice/:boardId' element={<NoticeView />}  />

                {/*글쓰기*/}
                <Route path='/admin/notice/write' element={<NoticeWrite />}  />

                {/*마이페이지*/}
                <Route path='/user/mypage' element={<MyPage />}  />

                <Route path='/user/MemberInfo' element={<MemberInfo />}  />

                {/*<Route path="/seats" elememt={<Seats />} />*/}
                {/*<Route path="/chart" element={<Chart />} />*/}


                {/*<Route path="/movieList" element={<MovieList />} />*/}
                {/*<Route path="/movieDetail/:id" element={<MovieDetail />} />*/}
                {/*<Route path="/selectmovie" element={<SelectMovie />} />*/}
                {/*<Route path="/chart/detail/:id" element={<MovieDetail />} />*/}
                {/*<Route path="/payment" element={<Payment />} />*/}
                {/*<Route path="/payment/approval" element={<PaymentApproval />} />*/}
                {/*<Route path="/payment/cancel" element={<PaymentCancel />} />*/}
                {/*<Route path="/payment/fail" element={<PaymentFail />} />*/}
                {/*<Route path="/payment/result" element={<PaymentResult />} />*/}
                {/*<Route path="/theater" element={<Theater />} />*/}
                <Route path="*" element={<div>찾으시는 창이 없네요</div>} />
            </Routes>
            {/*<Category />*/}
            <Footer />
        </BrowserRouter>
    );
};
export default Router;
