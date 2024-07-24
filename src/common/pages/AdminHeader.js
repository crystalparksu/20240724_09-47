import React from 'react';
import {Link} from 'react-router-dom';
import "../css/AdminHeader.css"


function AdminHeader() {








    return (
        <>
            <div className='menu_div'>
                <div className='menu'>
                    <div className='AdminMenu'>
                        <Link to="/" className='black'>
                            홈페이지로 돌아가기
                        </Link>
                    </div>
                    <div className='AdminMenu'>
                        <Link to="/Admin/Notice" className='black'>
                            공지 사항
                        </Link>
                    </div>
                    <div className='AdminMenu'>
                        <Link to="/Admin/MemberList" className='black'>
                            회원 관리
                        </Link>
                    </div>
                    <div className='AdminMenu'>
                        <Link to="/Admin/MovieList" className='black'>
                            영화 관리
                        </Link>
                    </div>


                </div>

            </div>

        </>
    );

}





export default AdminHeader;