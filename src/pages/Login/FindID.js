import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";




//아이디찾기
function FindID() {

    const navigate = useNavigate();

    const [findIdForm, setFindIdForm] = useState({
        memName: '',
        memEmail: ''
    });

    // const [username, setUsername] = useState("");
    const [message, setMessage] = useState('');

    // 아이디 찾기 폼 관련
    const handleFindIdChange = (e) => {
        setFindIdForm({ ...findIdForm, [e.target.name]: e.target.value });
    };

    // 아이디 찾기 로직
    const handleFindId = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth/find-id', findIdForm);
            alert(`아이디: ${response.data}`);
        } catch (error) {
            alert('회원정보를 찾지 못했습니다.');
        }
    };


    //HTML
    return(
        <EmailLoginContainer>
            <Form onSubmit={handleFindId}>
                <EmailLoginInput
                    placeholder="이름"
                    type="text"
                    id="memName"
                    name="memName"
                    value={findIdForm.memName}
                    required
                    onChange={handleFindIdChange}
                />
                <EmailLoginInput
                    placeholder="이메일"
                    type="email"
                    id="memEmail"
                    name="memEmail"
                    className='commonpage'
                    value={findIdForm.memEmail}
                    required
                    onChange={handleFindIdChange}
                />


                {/*아이디찾기 버튼*/}
                <CommonButton
                    type="button"
                    onClick={() => {
                    }}
                >
                    <a>아이디 찾기</a>
                </CommonButton>
            </Form>
        </EmailLoginContainer>
    );
}

export default FindID;


// 폼 디자인
const EmailLoginContainer = styled.form`
    width: 100%;
    margin: 0 auto;
    //background-color: red;
    transition: 0.5s;
`;


//폼 박스
const Form = styled.form`
    width: 320px;
    margin-top: 120px;
`;

// 인풋 디자인
const EmailLoginInput = styled.input`
    width: 100%;
    font-size: 15px;
    font-family: 'SUIT-Regular' !important;
    font-weight: 400;
    height: 53px;
    color: #fff;
    background-color: #2f2f2f;
    text-indent: 10px;
    border: 0;
  border-radius: 5px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  outline: none;
    
  &:last-child {
    margin-bottom: 0;
  }
`;

//버튼 디자인
const CommonButton = styled.button`
    display: block;
    height: 48px;
    border-radius: 30px;
    font-size: 18px;
    color: #fff;
    background: #1351f9;
    border-radius: 30px;
    width: 100%;
    margin-left: 0;
    margin-top: 25px;
    margin-bottom: 20px;
    border: none;
    box-sizing: border-box;
    transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    //호버시 보색
    
    &:hover{
        background:rgba(0,0,0,0.1);
        border: 1px solid #fff;
    }
    
    a{
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      color: #ffffff;
      line-height: 20px;
      font-size: 16px;
      font-weight: 500;
      font-family: 'SUIT-Regular' !important;
      display: flex;
      justify-content: center;

        //&:hover{
        //    color: #1351f9;
        //    font-weight: 800;
        //}
  }
  `;