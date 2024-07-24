import React from 'react';
import {Link} from 'react-router-dom';


function BookMark() {
    

    return(
        <div className="bookmark">
        <div className="bookmark_head">
            <h2>찜한 컨텐츠</h2>
        </div>
        <div className="bookmark_movie">
            {/* <!-- 리엑트로 넘어갈 시 swiper를 공부해서 적용해볼 것 --> */}
            <ul className="bookmark_movie_ul">
                <li className='bookMarkPoster'><Link to="/user/MoviePage"><img src="https://image.yes24.com/momo/TopCate78/MidCate02/7716268.jpg" alt="" /></Link></li>
                <li className='bookMarkPoster'><Link to="/user/MoviePage"><img src="https://i.namu.wiki/i/BbIvrzIblE28iFkhtKOVSTl1yZiKwoxHosU6UeI-XJvl4pqI_3hzRxi7hugZ2iUfK1fanRUO3vDpTeWE01zA0g.webp" alt="" /></Link></li>
                <li className='bookMarkPoster'><Link to="/user/MoviePage"><img src="https://i.namu.wiki/i/qTmnt6XqDxKUhQQp1GSmzJFbijxvZrHnC-FitEjCYGXINoTogZLRdE48CJzD0rEDwj6-jtybLFct2toJHbX22w.webp" alt="" /></Link></li>
                <li className='bookMarkPoster'><Link to="/user/MoviePage"><img src="https://i.namu.wiki/i/Zc3vnEBAwUTYnPUteysR3H2U5F0nFuQaZestZFr4YMn1z7tRGarKf-n1JUFgFDKznitP2XnvoSiX0r1ZsZu5OA.webp" alt="" /></Link></li>
                <li className='bookMarkPoster'><Link to="/user/MoviePage"><img src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9788934939603.jpg" alt="" /></Link></li>
                
            </ul>
        
        </div>
    </div>
    );   
    
    
    
    
    
    
    
    
    
    
    
    
    
}



export default BookMark;