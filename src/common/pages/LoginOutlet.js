import React from 'react';
import LoginHeader from './LoginHeader';
import {Outlet} from "react-router-dom"

function LoginOutlet() {
    






    return(
        <>
<div className='mainbody'>

        <LoginHeader />
        <Outlet />
</div>



        
        
        
        
        
        </>
    );

}












export default LoginOutlet;