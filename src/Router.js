import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from './components/Nav/Navs';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
// import GoogleAPI from './pages/Login//users/login';





const Router = () => {
    return (
        <BrowserRouter>
            <Navs />
            <Routes>
                <Route index path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/users/login" element={<GoogleAPI />} />*/}
                <Route path="/signUp" element={<SignUp />} />

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
