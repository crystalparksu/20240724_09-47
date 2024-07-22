import React, { useState } from "react";
import "./SearchBar.css";
import {  BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import PropTypes from "prop-types"




function SerarchBar({ search,onClick,onChange }) {
    return (
        <>
                <input
                    type="search"
                    className="search"
                    placeholder="영화 이름 입력"
                    onChange={onChange}
                    value={search}
                    onChange={onChange}
                />

                <button type="button" className="search_icon" onClick={onClick} onChange={onChange}>
                    <i class="fas fa-search"></i>
                    {/*<BiSearchAlt2 className="search_icon"></BiSearchAlt2>*/}
                </button>
        </>
    );
}

function Result({movie}) {
    var lis = [];
    for (var i = 0; i < movie.length; i++) {
        var item = movie[i];
        lis.push(
            <ol key={item.movieCd}>
                영화 제목 :{item.movieNm}
                <br/>
                개봉일 : {item.openDt == "" ? "미정" : item.openDt}
            </ol>
        );
    }

    return (
        <>
            <div className="result">
                <div id="result_text">{lis}</div>
                <br />
            </div>
        </>
    );
}

function SearchBar() {



    const [movie, setMovie] = useState([]);
    const [item, setItem] = useState("");
    // const key = process.env.REACT_APP_API_KEY;

    const key = "8dae44696d97827bd1f62c8a4af15028";
    console.log(key);
    const query = encodeURIComponent(item);
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&movieNm=${query}`;


    const searchItem = event => {
        setItem(event.target.value);
        console.log(item);
    };
    console.log(url);


    const fetchMovie = async () => {
        console.log("클릭");
        try {
            const response = await axios.get(url);
            //console.log(response);
            //console.log(response.data.movieListResult.movieList);
            const newMovieList = response.data.movieListResult.movieList;


            console.log(newMovieList);
            setMovie(newMovieList);
            console.log(movie);
        } catch (e) {
            console.log(e);
        }
    };

    return (
                <div className="box">
                    <SerarchBar onClick={fetchMovie} onChange={searchItem}></SerarchBar>
                    <Result movie={movie}></Result>
                </div>
    );
}
export default SearchBar;



// Style
// const Header = styled.div`
//     //검색창 디자인
//     .input-group {
//         width: 100%;
//         display: flex;
//         justify-content: flex-end;
//         //margin: 0 1rem;
//         position: relative;
//
//     }
//
//     //검색창 아이콘
//     .input-group #search_btn {
//         //background-color: transparent;
//
//     }
//
//     .result {
//         margin: 0 auto;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-color: #fff;
//     }
// `;