import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../components/table/CommonTable';
import CommonTableColumn from '../../components/table/CommonTableColumn';
import CommonTableRow from '../../components/table/CommonTableRow';
import { postList } from '../../Data';
import Navs from "../../components/Nav/Navs";
import Footer from "../../components/Footer/Footer";

import styled from "styled-components";



//공지사항(게시판) 리스트
const PostList = props => {
    //
    const [ dataList, setDataList ] = useState([]);

    //
    useEffect(() => {
        setDataList(postList);
    }, [ ])

    return (
        <>
            <Wrap>
                {/*<div align="center" className="name">*/}
                {/*    <h2 className="name-notice">공지사항</h2>*/}
                {/*</div>*/}
                <div className="step-bar">
                    <span className="gradation-blue"></span>
                </div>
                <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
                    {
                        dataList ? dataList.map((item, index) => {
                            return (
                                <CommonTableRow key={index}>
                                    <CommonTableColumn>{item.no}</CommonTableColumn>
                                    <CommonTableColumn>
                                        <Link to={`/postView/${item.no}`}>{item.title}</Link>
                                    </CommonTableColumn>
                                    <CommonTableColumn>{item.createDate}</CommonTableColumn>
                                    <CommonTableColumn>{item.readCount}</CommonTableColumn>
                                </CommonTableRow>
                            )
                        }) : ''
                    }
                </CommonTable>
            </Wrap>
        </>
    )
}
export default PostList;


const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    //padding: 40px 40px;
    //background: rgb(255,255,255);
    background:#fff;
    display: inline-block;
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
  z-index: 9999999!important;;
  background-color: rgb(11, 11, 13) !important;
  border-top: 1px solid rgb(25, 31, 40);
`;