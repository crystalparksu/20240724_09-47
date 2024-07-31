import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
// import './css/NoticeWrite.css';
import styled from "styled-components";
import google from "../Login/images/continue_google_neutral.png";

import notice from "./images/notice_write.png";



//공지사항 글쓰기
function NoticeWrite() {

    //변수
    const [boardTitle, setBoardTitle] = useState('');
    const [boardContent, setBoardContent] = useState('');
    const [fileInputs, setFileInputs] = useState([0]); // 파일 입력 상태
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    //핸들러
    const handleTitleChange = (e) => {
        setBoardTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setBoardContent(e.target.value);
    };

    const handleFileChange = (index, e) => {
        const newFiles = [...files];
        newFiles[index] = e.target.files[0];
        setFiles(newFiles);
    };

    const addFileInput = () => {
        if (fileInputs.length >= 5) {
            alert("최대 5개의 파일만 업로드할 수 있습니다.");
            return;
        }
        setFileInputs([...fileInputs, fileInputs.length]);
    };

    const removeFileInput = (index) => {
        const newFileInputs = fileInputs.filter((_, i) => i !== index);
        const newFiles = files.filter((_, i) => i !== index);
        setFileInputs(newFileInputs);
        setFiles(newFiles);
    };


    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            boardTitle: boardTitle, boardContent: boardContent,
        };

        //비동기
        try {
            const response = await axios.post('/admin/boardWrite', data);
            console.log('게시글 작성 성공:', response);
            const boardId = response.data.boardId; // 서버에서 반환한 게시글 ID

            if (files.length > 0) {
                await uploadFiles(boardId, files);
            } else {
                navigate('/admin/Notice');
            }
        } catch (error) {
            console.error('게시글 작성 실패:', error);
            alert('게시글 작성에 실패했습니다.');
        }
    };


    //uploadFiles
    const uploadFiles = async (boardId, files) => {
        const formData = new FormData();
        files.forEach((file) => {
            if (file) {
                formData.append('files', file); // 'files'는 서버에서 기대하는 파라미터 이름
            }
        });

        try {
            await axios.post(`/admin/boardUpload/${boardId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('파일 업로드 성공');
            navigate('/admin/Notice');
        } catch (error) {
            console.error('파일 업로드 실패:', error.response ? error.response.data : error.message);
            alert('파일 업로드에 실패했습니다. 게시글은 작성되었습니다.');
            navigate('/admin/Notice');
        }
    };


    //HTML
    return (

        <Wrap>
            <FromNoticeWrap>
                <Header className="name">
                    <Link to={`/user/notice/`}>
                        게시판
                    </Link>
                </Header>

                {/*폼 기능*/}
                <FormWrite onSubmit={handleSubmit}>

                    <InputTextSizeWTypeL>
                        {/* 제목 폼 */}
                        <FormBlockHead>
                            <AsteriskRed>＊</AsteriskRed> 제목
                        </FormBlockHead>
                        <InputWrite
                            type="text"
                            id="title"
                            name="title"
                            required
                            placeholder="제목을 입력하세요"
                            value={boardTitle}
                            onChange={handleTitleChange}
                        />
                        {/*<FormBlockHead>*/}
                        {/*    <AsteriskRed></AsteriskRed>작성일*/}
                        {/*</FormBlockHead>*/}
                        {/* 등록일 폼 */}

                        {/*<InputDate*/}
                        {/*    type="date"*/}
                        {/*    id="date"*/}
                        {/*    name="date"*/}
                        {/*    required*/}
                        {/*/>*/}
                    </InputTextSizeWTypeL>



                    <FormBlock>
                        {/* 내용 */}
                        <FormBlockHead>
                            <AsteriskRed>＊</AsteriskRed> 내용
                        </FormBlockHead>

                        {/* 내용 폼 */}
                        <TextWrite
                            name="content"
                            id="content"
                            cols="auto"
                            rows="auto"
                            required
                            placeholder="내용을 입력하세요"
                            value={boardContent}
                            onChange={handleContentChange}
                        ></TextWrite>

                    </FormBlock>


                    <FormBlockFiles>
                        <FormBlockHead>
                            <AsteriskRed>＊</AsteriskRed> 파일
                        </FormBlockHead>

                        {fileInputs.map((input, index) => (

                            <div className="filebox" key={index}>

                                {/* 파일첨부 */}
                                <label
                                    htmlFor="file_0">파일첨부</label>
                                <input type="file"
                                       id={`file_${index}`}
                                       name={`file_${index}`}
                                       onChange={(e) => handleFileChange(index, e)}
                                />

                                {/* 파일 추가 */}
                                <label
                                    htmlFor="file_0">파일추가</label>
                                <input type="file"
                                       id={`file_${index}`}
                                       name={`file_${index}`}
                                       onChange={(e) => handleFileChange(index, e)}
                                />

                                {/* 파일삭제 */}
                                <label
                                    className="removeFile"
                                    htmlFor="del">삭제
                                </label>

                                <input
                                    className="removeFile"
                                    id="del"
                                    name="del"
                                    type="hidden"
                                    onClick={() => removeFileInput(index)} 파일삭제/>

                                {/*등록 버튼*/}
                                <label
                                    className="submit"
                                    htmlFor="write">작성
                                    <img
                                        className="submit-img"
                                        src={notice} />
                                </label>

                                <input
                                    className="submit"
                                    id="write"
                                    name="write"
                                    type="hidden"
                                />

                            </div>))}

                    </FormBlockFiles>


                    {/*등록 버튼*/}
                    {/*<FormBlockSubmit>*/}
                    {/*    <label*/}
                    {/*        className="submit"*/}
                    {/*        htmlFor="write">삭제*/}
                    {/*    </label>*/}

                    {/*    <input*/}
                    {/*        className="submit"*/}
                    {/*        id="write"*/}
                    {/*        name="write"*/}
                    {/*        type="submit"*/}
                    {/*       />*/}
                    {/*</FormBlockSubmit>*/}

                    {/*/!* 글쓰기 버튼 *!/*/}
                    {/*<div className="WriteSubmit">*/}
                    {/*    <input type="submit" value="글쓰기" className="submit"/>*/}
                    {/*</div>*/}

                </FormWrite>
            </FromNoticeWrap>
        </Wrap>);
}

export default NoticeWrite;


// style

//파일 전체 버튼
const InputFile = styled.input`

    width: 90px;
    height: 45px;
    border: 1px solid #cccccc;

    font-size: 13px;
    color: #0f2027;
    //padding: 10px 25px;
    text-align: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
`;


// 첨부파일 전체 박스
const FormBlockFiles = styled.div`

    //구도
    box-sizing: border-box;
    vertical-align: middle;
    width: 1024px;
    margin-top: 40px;
    margin-bottom: 100px;
    text-align: left;


    //작성 버튼

    .submit {
        float: right;
        width: 300px !important;
        height: 45px !important;
        margin-right: auto !important;
        padding: 1em 9em !important;
        line-height: 1.5em !important;
        font-size: 13px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        background-color: #3182f6 !important;
        color: #fff !important;

        &:hover {
            background-color: #1776ff !important;
        }

        &:active {
            border: 1px solid #0f2027 !important;
        }

        &:focus {
            border: 1px solid #0f2027 !important;
        }

    }

    .submit-img {
        float: left;
    }

    .submit img {
        width: 18px;
        height: 18px;
        text-align: left;
        line-height: 25px;


    }


    //삭제 버튼

    .removeFile {
        color: #fff !important;
        font-weight: 500 !important;
        background-color: red !important;
        //border: 1px solid red !important;

        &:hover {
            background-color: #ce1d1d !important;
        }

        &:active {
            border: 1px solid #0f2027 !important;
        }

        &:focus {
            border: 1px solid #ce1d1d !important;
        }

    }


    //버튼 전체

    .filebox {
        float: right;
        width: 935px;

    }

    /* 파일 필드*/

    .filebox label {
        margin-right: 20px;

        display: inline-block;
        padding: .5em .75em;
        color: #0f2027;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        vertical-align: middle;
        background-color: #fdfdfd;
        cursor: pointer;
        border: 1px solid #ebebeb;

        //사이즈
        width: 90px;
        height: 45px;
        border: 1px solid #ccc;
        border-radius: 2px;
        background-color: #fff;

        &:hover {
            cursor: pointer;
            background-color: #3182f6;
            color: #fff;
        }

        &:active {
            border: 1px solid #0f2027;
        }

        &:focus {
            border: 1px solid #3182f6;
        }
    }

    /* 파일 필드 숨기기 */

    .filebox input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`;


//전체
const Wrap = styled.div`
    width: 100%;
    //height: 100vh;
    position: relative;
    margin: 0 auto;
    //padding: 40px 40px;
    //background: rgb(255,255,255);
    background: #fff;
    display: inline-block;
`;
//감싸는 전체
const FromNoticeWrap = styled.div`
    width: 1024px;
    position: relative;
    margin: 0 auto;
    background: #fff;
    margin-bottom: 48px;
    padding-top: 40px;
`;
//제목감싸는 박스
const Header = styled.div`
    width: 1024px;
    margin: 0 auto;
    //background: red;
    font-family: 'SUIT-Regular' !important;
    color: rgb(51, 61, 75);
    font-size: 36px;
    font-weight: 800;
    text-align: left;
`;
//제목+ 등록 폼 감싸는 박스
const InputTextSizeWTypeL = styled.div`
    //background-color: red;
    
    box-sizing: border-box;
    vertical-align: middle;
    height: 48px;
    //display: flex;
    width: 1024px;
    margin-top: 1px;
    text-align: left;
`;


//폼 시작 전 글씨 스타일
// 모든 폼 폰트 사이즈
const FormBlockHead = styled.h3`
    text-indent: 30px;
    float: left;
    font-size: 14px;
    color: #0f2027;
    line-height: 40px;
    //text-indent: 5px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 200;
    //text-indent: px;
    margin-right: 10px;
    text-align: left;
`;
const AsteriskRed = styled.em`
    color: #ff27a3;
    font-size: 12px;
    //display: inline-block;
`;

// //등록폼
// const InputDate = styled.input`
//     width: 200px;
//     height: 40px;
//     //margin-left: 40px;
//     border: none;
//     outline: none;
//     display: flex;
//     justify-content: right;
//     float: right;
//     /*폰트 디자인*/
//     padding: 15px 5px;
//     text-indent: 10px;
//     font-size: 13px;
//     font-weight: 500;
//     background-color: #fff;
//     -webkit-font-smoothing: antialiased;
//     text-align: left;
//     padding: 20px 25px;
//     letter-spacing: 2px;
//
//     /*폼 디자인*/
//     border: 1px solid #ccc;
//     //margin-left: 20px;
//     margin-right: auto;
//
//
//     &:focus {
//         border: 1px solid #0f2027;
//     }
//
// `;


//제목 폼
const InputWrite = styled.input`
    /*전체 구도*/
    width: 935px;
    height: 40px;
    border: none;
    outline: none;
    float: right;
    margin-right: auto;

    /*폰트 디자인*/
    padding: 15px 5px;
    text-indent: 10px;
    font-size: 13px;
    font-weight: 500;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    text-align: left;

    /*폼 디자인*/
    border: 1px solid #ccc;

    &:focus {
        border: 1px solid #0f2027;
    }
`;

// 내용 전체 박스
const FormBlock = styled.div`
    box-sizing: border-box;
    vertical-align: middle;
    width: 1024px;
    margin-top: 1px;
    text-align: left;
    //background-color: red;
`;


//내용 폼
const TextWrite = styled.textarea`
    float: right;
    width: 935px;
    height: 500px;
    resize: none;
    border: none;
    outline: none;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: auto;
    
    /*폰트 디자인*/
    text-indent: 10px;
    font-size: 13px;
    font-weight: 500;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    text-align: left;
    padding: 15px 5px;


    &:focus {
        border: 1px solid #0f2027;
    }
`;


const FormWrite = styled.form`
    width: 1024px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
`;




