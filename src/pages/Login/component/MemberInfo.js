import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';




function MemberInfo() {
    const navigate = useNavigate();
    const [memberInfo, setMemberInfo] = useState({
        memName: '',
        memId: '',
        memEmail: '',
        memTel: '',
        memBirth: '',
        memGender: ''
    });
    const [newInfo, setNewInfo] = useState({
        memNewEmail: '',
        memNewTel: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [editField, setEditField] = useState(null);

    useEffect(() => {
        fetchMemberInfo();
    }, []);

    const fetchMemberInfo = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (!accessToken) {
                navigate('/login');
                return;
            }

            const response = await fetch('/auth/memberinfo', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                setMemberInfo(data);
                setNewInfo({
                    memNewEmail: data.memEmail,
                    memNewTel: data.memTel
                });
            } else {
                throw new Error('Failed to fetch user info');
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            alert('사용자 정보를 불러오는데 실패했습니다.');
            navigate('/login');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = (field) => {
        setEditField(field);
    };

    const handleSubmit = async (field) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('/auth/update', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    [field]: newInfo[field]
                })
            });

            if (response.ok) {
                alert(`${field === 'memNewEmail' ? '이메일' : '연락처'}가 성공적으로 수정되었습니다.`);
                setEditField(null);
                fetchMemberInfo(); // 수정된 정보를 다시 불러옵니다.
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || '정보 수정에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error updating user info:', error);
            alert(error.message);
        }
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    return (
        <div className="member_form">
            <div className="member_info_head">
                <span>개인 정보 수정</span>
            </div>
            <div className="member_info">
                <form>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memName">이름: </label>
                        </div>
                        <div>
                            <input type="text" name="memName" id="memName" value={memberInfo.memName} readOnly required />
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memId">아이디: </label>
                        </div>
                        <div>
                            <input type="text" name="memId" id="memId" value={memberInfo.memId} readOnly required />
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="password">비밀번호: </label>
                        </div>
                        <div>
                            <button type='button' onClick={() => {navigate('/user/ChangePassword')}}>비밀 번호 변경</button>
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memNewEmail">이메일: </label>
                        </div>
                        <div>
                            <input
                                type="email"
                                name="memNewEmail"
                                id="memNewEmail"
                                value={editField === 'memNewEmail' ? newInfo.memNewEmail : memberInfo.memEmail}
                                onChange={handleChange}
                                readOnly={editField !== 'memNewEmail'}
                                required
                            />
                            {editField === 'memNewEmail' ? (
                                <button type="button" onClick={() => handleSubmit('memNewEmail')}>저장</button>
                            ) : (
                                <button type="button" onClick={() => handleEdit('memNewEmail')}>수정</button>
                            )}
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memNewTel">연락처: </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="memNewTel"
                                id="memNewTel"
                                value={editField === 'memNewTel' ? newInfo.memNewTel : memberInfo.memTel}
                                onChange={handleChange}
                                readOnly={editField !== 'memNewTel'}
                                required
                            />
                            {editField === 'memNewTel' ? (
                                <button type="button" onClick={() => handleSubmit('memNewTel')}>저장</button>
                            ) : (
                                <button type="button" onClick={() => handleEdit('memNewTel')}>수정</button>
                            )}
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memBirth">생년월일: </label>
                        </div>
                        <div>
                            <input type="date" name="memBirth" id="memBirth" value={memberInfo.memBirth} readOnly required />
                        </div>
                    </div>
                    <div className="form_div">
                        <div>
                            <label htmlFor="memGender">성별: </label>
                        </div>
                        <div>
                            <input type="text" name="memGender" id="memGender" value={memberInfo.memGender} readOnly required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MemberInfo;