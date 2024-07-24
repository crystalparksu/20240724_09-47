import React from 'react'
import {Link} from 'react-router-dom';






function MyReview() {

    const reviewInfo = [
        { myreviewmovie: '꺼삐딴 리', myreviewContent: '가나다라마바사ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ가나다라마바사ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ', myreviewTime: '24-06-18', myreviewStar: "✫5", myreviewDelete: "≡" },
        { myreviewmovie: '뽀로로', myreviewContent: 'qwertasdfg', myreviewTime: '24-06-18', myreviewStar: "✫5", myreviewDelete: "≡" },
        { myreviewmovie: '정글에서 살아남기', myreviewContent: '123456789', myreviewTime: '24-06-18', myreviewStar: "✫5", myreviewDelete: "≡" },
        { myreviewmovie: '총,균,쇠', myreviewContent: '!@#$%^&*()', myreviewTime: '24-06-18', myreviewStar: "✫5", myreviewDelete: "≡" },
    ];





    return (
        <>
            <div className="myreview">
                <div className="myreview_head">
                    <span>나의 작성 리뷰</span>
                </div>
                <div className="my_review_list">
                    {
                        reviewInfo.map((myreview, index) => (
                            <ul className="my_review_list_ul" key={index}>
                                <li className="reviewMovie">{myreview.myreviewmovie}</li>
                                <li className="movieReview"><Link to="/user/MoviePage" className='white'>{myreview.myreviewContent}</Link></li>
                                <li className="reviewDate">{myreview.myreviewTime}</li>
                                <li className="reviewStar">{myreview.myreviewStar}</li>
                                <li className="reviewBtn"><button className='MyreviewDeleteBtn'>{myreview.myreviewDelete}</button></li>
                            </ul>
                        ))
                    }

                </div>
                <div className="myreview_page">
                    <ul className="myreview_page_ul">
                        <li>&lt;</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>&gt;</li>
                    </ul>
                </div>
            </div>




        </>
    );




}






















export default MyReview;