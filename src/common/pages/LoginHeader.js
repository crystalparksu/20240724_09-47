import React from 'react';
import {Link} from 'react-router-dom';
import logo_white from '../img/logo_white_bi.png';

//css
import "../css/LoginHeader.css"


function LoginHeader() {





    return (
        <>



            <header className='LoginHeader'>
                <div className="LoginLogo">
                    <Link to="/"><img src={logo_white} alt="" /></Link>
                </div>
            </header>



        </>
    );






}








export default LoginHeader;