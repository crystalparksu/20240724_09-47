import React, {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import FindID from "./FindID";
import FindPassword from "./FindPW";


//아이디/비번 재설정 최종 url
const FindIdPassword = () => {
    //탭 폼
    const [currentTab, setTab] = useState(0);

    const menuArr = [
        {name: '아이디 찾기', content: <FindID />},
        {name: '비밀번호 찾기', content: <FindPassword />},];


    const selectMenuHandler = (index: any) => {
        setTab(index);
    };


    //네비
    const navigate = useNavigate();

    //findIdForm
    const [findIdForm, setFindIdForm] = useState({
        memName: '', memEmail: ''
    });

    //findPasswordForm
    const [findPasswordForm, setFindPasswordForm] = useState({
        memId: '', memEmail: ''
    });

    //message
    const [message, setMessage] = useState('');

    //handleFindIdChange
    const handleFindIdChange = (e) => {
        setFindIdForm({...findIdForm, [e.target.name]: e.target.value});
    };

    //handleFindPasswordChange
    const handleFindPasswordChange = (e) => {
        setFindPasswordForm({...findPasswordForm, [e.target.name]: e.target.value});
    };

    const handleFindId = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth/find-id', findIdForm);
            alert(`아이디: ${response.data}`);
        } catch (error) {
            alert('회원정보를 찾지 못했습니다.');
        }
    };

    //handleFindPassword - axios.post
    const handleFindPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/find-password', findPasswordForm);

            setMessage('비밀번호 재설정 이메일 발송완료');
            alert('비밀번호 재설정 이메일 발송완료');

        } catch (error) {
            setMessage('요청을 처리하는 동안 오류가 발생했습니다');
            alert('요청을 처리하는 동안 오류가 발생했습니다');
        }
    };


    //html -----------------------------------
    return (<>
                <WrapLogin>
                    <div className="step-bar">
                        <span className="gradation-blue"></span>
                    </div>

                    <TabMenu>
                        {menuArr.map((tap, index) => {
                            return (<div
                                key={index}
                                className={currentTab === index ? 'submenu focused' : 'submenu'}
                                onClick={() => selectMenuHandler(index)}
                            >
                                {tap.name}
                            </div>);
                        })}
                        <div>
                            <div>{menuArr[currentTab].content}</div>
                        </div>
                    </TabMenu>
                </WrapLogin>
    </>
);
}
export default FindIdPassword;




const WrapLogin = styled.div`
  //padding: 1px 0 50px;
    width: 560px;
    height: 450px;
    margin-bottom: 120px;
    position: relative;
    margin: 80px auto;
  //min-height: 100%;
    padding: 40px 40px;
  background:  rgba(11, 11, 13, 0.8);
    display: flex;
    justify-content: center;
    text-align: center;
    //margin-top: 30px;
    padding-bottom: 20px;
    
    
    .step-bar{
        width: 560px;
        height: 5px;
        background: #2f2f2f;
        position: absolute;
        top: 0;
        left: 0;
    }
    .gradation-blue{
        width: 25%;
        height: 5px;
        display: block;
        text-indent: -9999px;
        background-color: #1351f9;
    }
`;

const WrapBody = styled.div`
//background-color: #fff;
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
overflow-x: hidden;
-webkit-box-sizing: border-box;
`;


const Wrap = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin: 0 auto;
padding: 60px 40px;
margin-top: 20px;
`;




//탭메뉴
const TabMenu = styled.ul`
    margin: 0 auto;
//background-color: red;
float: left;
list-style: none;
margin-bottom: 20px;
margin-top: 10px;
align-items: center;
color: #000;
font-weight: 300;
text-align: center;
font-size: 16px;

    .focused{
        color: #fff !important;
        border-bottom: 2px solid #fff !important;
    }

.submenu {
    margin: 0 auto;
    padding: 10px;
    transition: 0.5s;
    //border: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgb(46, 46, 46);
    outline: none;
    cursor: pointer;
    color: #a6a6a6;
    font-weight: 300;
    text-align: center;
    float: left;
    //padding: 40px;
    padding: 2.5rem 2.5rem;
    height: 20px;


    &:hover{
        color: #fff !important;
        border-bottom: 2px solid #fff !important;
    }
    
    &:focus{
        outline: none;
        cursor: pointer;
        color: #fff !important;
        border-bottom: 2px solid #fff !important;
        font-weight: 300;
        text-align: center;
        transition: 0.5s;
    }
}
`;