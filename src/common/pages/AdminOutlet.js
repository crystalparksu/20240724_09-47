import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';


// page import
import AdminHeader from './AdminHeader';

// css
import '../css/AdminOutlet.css';

function AdministratorPage() {

        const [isLoading, setIsLoading] = useState(true);

        const [hasPermission, setHasPermission] = useState(false);

        const navigate = useNavigate();

        const initializedRef = useRef(false);

        const checkPermission = async () => {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                alert("로그인이 필요합니다.");
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('/auth/memberinfo', {
                    headers: { 'Authorization': 'Bearer ' + token }
                });
                const role = response.data.memRole;
                if (role === 'ADMIN') {
                    setHasPermission(true);
                } else {
                    alert("권한이 없습니다.");
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching user info:', error);
                alert("오류가 발생했습니다. 다시 로그인해주세요.");
                navigate('/login');
            } finally {
                setIsLoading(false);
            }
        };

        useEffect(() => {
            if (!initializedRef.current) {
                initializedRef.current = true;
                checkPermission();
            }
        }, []);

        if (isLoading) {
            return <div></div>;
        }



    return (
        <>
        <div className='adminbody'>
        <AdminHeader />
        <Outlet />

        </div>
        
        
        
        </>
    );

}



export default AdministratorPage;