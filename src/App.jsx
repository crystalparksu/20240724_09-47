// import { Outlet, Route, Routes } from 'react-router-dom';
// import Main from './pages/Main/Main';
// import Banner from './pages/Main/Banner';
// import Footer from "./components/Footer/Footer";
// import Category from "./pages/Main/Category";
// import Row from "./pages/Main/Row";
// import Navs from './components/Nav/Navs';
// import Chart from './pages/Chart/Chart';
//
//
//
// import SearchBar from './components/Search/SearchBar';
// import Nav from './components/Nav/Nav';
// import requests from "./api/requests";
//
//
//
//
// const Layout = () => {
//     return (
//         <div>
//             <Navs />
//             <Banner />
//             <Main />
//             <Category />
//             {/*<Row/>*/}
//             <Footer />
//         </div>
//     );
// };
//
//
//
//
// function App() {
//     return (
//         <Routes>
//             <Route path='/' element={<Layout />} />
//             <Route path="/" element={<Main />} />
//             {/*<Route path="/booking" element={<Booking />} />*/}
//             {/*<Route path="/login" element={<Logins />} />*/}
//             {/*<Route path="/users/login" element={<KaKaoAPI />} />*/}
//             {/*<Route path="/seats" elememt={<Seats />} />*/}
//             {/*<Route path="/chart" element={<Chart />} />*/}
//
//             {/* <Route path="/login" element={<Logins />} /> */}
//             <Route path="/movieList" element={<MovieList />} />
//             <Route path="/movieDetail/:id" element={<MovieDetail />} />
//             {/*<Route path="/selectmovie" element={<SelectMovie />} />*/}
//             {/*<Route path="/chart/detail/:id" element={<MovieDetail />} />*/}
//             {/*<Route path="/payment" element={<Payment />} />*/}
//             {/*<Route path="/payment/approval" element={<PaymentApproval />} />*/}
//             {/*<Route path="/payment/cancel" element={<PaymentCancel />} />*/}
//             {/*<Route path="/payment/fail" element={<PaymentFail />} />*/}
//             {/*<Route path="/payment/result" element={<PaymentResult />} />*/}
//             {/*<Route path="/theater" element={<Theater />} />*/}
//             {/*<Route path="*" element={<div>찾으시는 창이 없네요</div>} />*/}
//         </Routes>
//     );
// }
// export default App;