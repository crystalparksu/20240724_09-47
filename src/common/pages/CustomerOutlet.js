import React from 'react';
import {Outlet} from 'react-router-dom';


// css
import '../css/CustomOutlet.css';

// page import
import Header from './Header';


function CustomerPage() {



    return (
        <>

        <div className='mainbody'>
            
        <Header />
        <Outlet />
        {/* <Footer /> */}
        </div>

        </>
    );

}



export default CustomerPage;