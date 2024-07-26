import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from "axios";




//아이디&비밀번호 재설정
export const FindIdPassword = () => {

    const navigate = useNavigate();

    //findIdForm
    const [findIdForm, setFindIdForm] = useState({
        memName: '',
        memEmail: ''
    });

    //findPasswordForm
    const [findPasswordForm, setFindPasswordForm] = useState({
        memId: '',
        memEmail: ''
    });

    //message
    const [message, setMessage] = useState('');

    //handleFindIdChange
    const handleFindIdChange = (e) => {
        setFindIdForm({ ...findIdForm, [e.target.name]: e.target.value });
    };

    //handleFindPasswordChange
    const handleFindPasswordChange = (e) => {
        setFindPasswordForm({ ...findPasswordForm, [e.target.name]: e.target.value });
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
            const response
                = await axios.post('/auth/find-password', findPasswordForm);

            setMessage('비밀번호 재설정 이메일 발송완료');
            alert('비밀번호 재설정 이메일 발송완료');

        } catch (error) {
            setMessage('요청을 처리하는 동안 오류가 발생했습니다');
            alert('요청을 처리하는 동안 오류가 발생했습니다');
        }
    };



//====================================================
    // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
    const [currentTab, clickTab] = useState(0);

    const menuArr = [
        { name: '아이디찾기', content: '' },
        { name: '비밀번호 재설정', content: '' },
        // { name: 'Tab3', content: 'Tab menu THREE' },
    ];

//selectMenuHandler
    const selectMenuHandler = (index) => {
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
    };


    //html
    return (
            <WrapBody>
                <Wrap>
                    <TabMenu>
                        {/*// 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정*/}
                        {/*// li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused', 나머지 2개의 tab은 'submenu'*/}


                        {/*<li className="submenu">{menuArr[0].name}</li>*/}
                        {/*<li className="submenu">{menuArr[1].name}</li>*/}
                        {/*<li className="submenu">{menuArr[2].name}</li>*/}

                        {menuArr.map((el, index) => (

                            <li
                                className={index === currentTab ? "submenu focused" : "submenu"}
                                onClick={() => selectMenuHandler(index)}>{el.name}
                            </li>
                        ))}
                    </TabMenu>
                </Wrap>

                <Div>
                    <p>{menuArr[currentTab].content}</p>
                    <form onSubmit={handleFindId}>
                        <label htmlFor="memName">이름</label>
                        <input
                            type="text"
                            id="memName"
                            name="memName"
                            className='commonpage'
                            value={findIdForm.memName}
                            onChange={handleFindIdChange}
                        /><br/>
                        <label htmlFor="memEmail">이메일</label>
                        <input
                            type="email"
                            id="memEmail"
                            name="memEmail"
                            className='commonpage'
                            value={findIdForm.memEmail}
                            onChange={handleFindIdChange}
                        /><br/>
                        <button type="submit"
                                className='loginbutton'>아이디 찾기
                        </button>
                    </form>
                </Div>

            </WrapBody>
    );
}
export default FindIdPassword;


const WrapBody = styled.div`
    //background-color: #fff;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-box-sizing: border-box;
`;


// 전체 박스
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    //max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
    padding: 60px 40px;
    margin-top: 20px;
`;


//탭메뉴
const TabMenu = styled.ul`
    list-style: none;
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;


    //디자인- 비활성화
    color: #000;
    font-weight: 300;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 16px;

    //탭메뉴

    .submenu {
        // 기본 Tabmenu 에 대한 CSS를 구현
        width: 300px;
        heigth: 30px;
        padding: 10px;
        transition: 0.5s;
        border: 1px solid rgba(255, 255, 255, 0.2);
        outline: none;
        cursor: pointer;
        color: #fff;
        font-weight: 300;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 16px;
    }

    //활설화
    .focused {
        //선택된 Tabmenu 에만 적용되는 CSS를 구현
        background-color: #1351f9 ;
        //background-color: rgba(11, 11, 13);
        color: #fff;
        font-weight: 300;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 16px;

        &:focus{
            display: flex;
            justify-content: center;
            width: 1200px;
            height: 400px;
            margin: 0 auto;
            background-color: red;
            margin-bottom: 20px;
            padding: 80px 40px;
        }
    }

    & div.desc {
       
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    background-color: red;
    margin-bottom: 20px;
    padding: 80px 40px;

   
    
`;
