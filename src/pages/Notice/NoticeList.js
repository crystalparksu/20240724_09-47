// import React, {useState, useEffect} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import CommonTable from '../../components/table/CommonTable';
// import CommonTableColumn from '../../components/table/CommonTableColumn';
// import CommonTableRow from '../../components/table/CommonTableRow';
// import {postList} from '../../Data';
// import styled from "styled-components";
// import Pagination from "react-js-pagination";
// import './css/Paging.css';
//
//
//
//
// //공지사항(게시판) 리스트
// const NoticeList = ({postsPerPage, totalPosts, paginate}) => {
//
//     const navigate = useNavigate();
//
//     //검색---------------------------
//     const handleSearchInput = e => setSearchInput(e.target.value);
//     const [searchInput,setSearchInput] = useState('');
//
//     // useEffect(() => {
//     //     window.addEventListener('click', function (e) {
//     //         if (e.target.contains !== searchWrapper) {
//     //             setSearchInput('');
//     //         }
//     //     });
//     // }, []);
//
//
//     //페이지네이션 ---------------------------
//     const [page, setPage] = useState(1);
//
//     const handlePageChange = (page) => {
//         setPage(page);
//     };
//
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//
//
//     //★연습용 Data.js ---------------------------
//     const [dataList, setDataList] = useState([]);
//
//     useEffect(() => {
//         setDataList(postList);
//     }, [])
//
//
//
//     return (
//
//         <Wrap>
//             <WriteSection>
//                 <SearchInput
//                     type="text"
//                     className="bottom_search_text"
//                     placeholder="무엇이든 찾아보세요"
//                     onChange={handleSearchInput}
//                 />
//
//                 {/* 버튼*/}
//                 {/*<SearchButton*/}
//                 {/*    type="button"*/}
//                 {/*    className="search_icon"*/}
//                 {/*    onClick=""*/}
//                 {/*    onChange=""*/}
//                 {/*>*/}
//                 {/*    <i className="fas fa-search"></i>*/}
//                 {/*</SearchButton>*/}
//
//             </WriteSection>
//
//
//             <Header>
//                 <h2 className="name-notice" />공지사항
//
//
//                 {/* <!-- 글쓰기 버튼 --> */}
//                 <button
//                     className="botom_write"
//                     type="button"
//                     onClick={() => {
//                         navigate(`/admin/notice/write`);
//                     }}
//                 >
//                     <a>글쓰기</a>
//                 </button>
//             </Header>
//
//
//
//
//             <div className="step-bar">
//                 <span className="gradation-blue"></span>
//             </div>
//             <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
//                 {dataList ? dataList.map((item, index) => {
//                     return (<CommonTableRow key={index}>
//                         <CommonTableColumn>{item.no}</CommonTableColumn>
//                         <CommonTableColumn>
//                             <Link to={`/postView/${item.no}`}>{item.title}</Link>
//                         </CommonTableColumn>
//                         <CommonTableColumn>{item.createDate}</CommonTableColumn>
//                         <CommonTableColumn>{item.readCount}</CommonTableColumn>
//                     </CommonTableRow>)
//                 }) : ''}
//             </CommonTable>
//
//
//             <Pagination
//                 className="pagination"
//                 activePage={page} // 현재 페이지
//                 itemsCountPerPage={1} // 한 페이지랑 보여줄 아이템 갯수
//                 totalItemsCount={10} // 총 아이템 갯수
//                 pageRangeDisplayed={10} // paginator의 페이지 범위
//                 prevPageText={"‹"} // "이전"을 나타낼 텍스트
//                 nextPageText={"›"} // "다음"을 나타낼 텍스트
//                 onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
//             />
//
//         </Wrap>);
// };
// export default NoticeList;
//
//
//
//
//
//
//
// // STYLE ------------------------------
// // 검색창+글쓰기 버튼 감싸는 박스
// const WriteSection = styled.section`
//     display: flex;
//     justify-content: center;
//     padding-top: 74px;
// `;
//
//
// // 검색창
// const SearchInput = styled.input`
//     display: flex;
//     justify-content: center;
//     width: 1024px;
//     padding-bottom: 16px;
//     padding-left: 46px;
//     border-top: none;
//     border-right: none;
//     border-left: none;
//     border-image: initial;
//     border-bottom: 1px solid rgb(176, 184, 193);
//     outline: none;
//     caret-color: rgb(49, 130, 246);
//     font-size: 22px;
//     font-weight: 400;
//     line-height: 130%;
//     color: rgb(78, 89, 104);
//     min-height: 32px;
// `;
//
//
//
// const Header = styled.div`
//     font-family: 'SUIT-Regular' !important;
//     color: rgb(51, 61, 75);
//     font-size: 36px;
//     font-weight: 800;
//     margin-bottom: 48px;
//     padding-top: 74px;
//     text-align: left;
//     width: 1044px;
//     margin: 0 auto;
//     margin-bottom: 48px;
//
//     .name-notice {
//         display: flex;
//         justify-content: center;
//     }
//     //글쓰기 버튼
//     .botom_write{
//         width: 90px;
//         height: 45px;
//         border: 1px solid #cccccc;
//         border-radius: 2px;
//         background-color: #e5e8eb;
//
//         float: right;
//
//         margin-top: 2px;
//
//         position: relative;
//         bottom: -10px;
//
//
//         &:hover {
//             cursor: pointer;
//             //border: 2px solid rgb(51, 61, 75);
//             background-color:  #3182f6;;
//         }
//     }
//
//     .botom_write a{
//         font-size: 14px;
//         color: #0f2027;
//         //padding: 10px 25px;
//         text-align: center;
//         display: flex;
//         justify-content: center;
//         cursor: pointer;
//         color: rgb(51, 61, 75);
//
//         &:hover {
//             cursor: pointer;
//             color: #fff;
//            font-weight: 600;
//         }
//     }
// `;
//
// const Wrap = styled.div`
//     width: 100%;
//     //height: 100vh;
//     position: relative;
//     margin: 0 auto;
//     //padding: 40px 40px;
//     //background: rgb(255,255,255);
//     background: #fff;
//     display: inline-block;
// `;
//
//
// //푸터 전체 - 위치/배경
// // const FooterTag = styled.footer`
// //     color: #6b7684;
// //     display: flex;
// //     align-items: center;
// //     flex-direction: column;
// //     margin-left: auto;
// //     margin-right: auto;
// //     padding: 26px 0;
// //     text-align: center;
// //     bottom: 0;
// //     width: 100%;
// //     z-index: 9999999 !important;;
// //     background-color: rgb(11, 11, 13) !important;
// //     border-top: 1px solid rgb(25, 31, 40);
// // `;