import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import './css/NoticeWrite.css';
import styled from "styled-components";



const Wrap = styled.div`
    width: 100% ;
    height: 100vh;
    position: relative;
    margin: 0 auto;
    //padding: 40px 40px;
    //background: rgb(255,255,255);
    background: #fff;
    display: inline-block;
`;



//공지사항 글쓰기
function NoticeWritePage() {

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
    return(

        <Wrap>
            <div className="NoticeWrite">
                <form className="writeForm"
                      onSubmit={handleSubmit}>

                    {/* 제목 */}
                    <div className="WritetTitle">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            placeholder="제목을 입력하세요"
                            value={boardTitle}
                            onChange={handleTitleChange}
                        />
                    </div>

                    {/* 내용 */}
                    <div className="WriteText">
                    <textarea
                        name="content"
                        id="content"
                        cols="40"
                        rows="10"
                        required
                        value={boardContent}
                        onChange={handleContentChange}
                    ></textarea>
                    </div>


                    {/* 첨부파일 버튼 */}
                    {fileInputs.map((input, index) => (<div className="FileUpload" key={index}>
                            <input
                                type="file"
                                id={`file_${index}`}
                                name={`file_${index}`}
                                onChange={(e) => handleFileChange(index, e)}
                            />
                            <button type="button" onClick={() => removeFileInput(index)}>삭제</button>
                        </div>))}


                    {/* 추가 파일 업로드 버튼 */}
                    <div className="AddFileUpload">
                        <button type="button" onClick={addFileInput}>파일 추가</button>
                    </div>


                    {/* 글쓰기 버튼 */}
                    <div className="WriteSubmit">
                        <input type="submit" value="글쓰기" className="submit"/>
                    </div>

                </form>
            </div>
        </Wrap>);
}

export default NoticeWritePage;
