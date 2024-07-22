import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Slider from "react-slick";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    //영문 폰트 - Montserrat
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    
    
    //되도록이면 한글 폰트 - SUIT
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }


    * {
        font-family: 'SUIT-Regular' !important;
        font-size: inherit;
        color: inherit;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: inherit;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    html, body {
        //height: 100%;
        //min-height: 100%;
        width: 100%;
        background-color: #000000;
    }

    body {
        overflow-x: hidden;
        line-height: 1.5;
        font-family: 'Nanum Barun Gothic', sans-serif;
        font-size: 12px;
    }

    a, button, input {
        -webkit-tap-highlight-color: transparent;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0 none;
        background: transparent;
        cursor: pointer;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        display: inline-block;
        padding: 0;
        margin: 0;
    }

    ol, ul {
        list-style: none;
    }

    div {
        display: block;
    }

    input {
        background: #fff;
    }

    label{
        cursor: pointer;
    }

    input[readonly] {
    border: 0;
    }

    i {
        speak: never;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    
    //슬랙
    //.slick-slider .slick-track, .slick-slider .slick-list {
    //    -webkit-transform: translate3d(0, 0, 0);
    //    -moz-transform: translate3d(0, 0, 0);
    //    -ms-transform: translate3d(0, 0, 0);
    //    -o-transform: translate3d(0, 0, 0);
    //    transform: translate3d(0, 0, 0);
    //}
    
    a, button, .tab, input {
        -webkit-tap-highlight-color: transparent;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    strong {
        font-weight: bold;
    }
    
    label {
        cursor: pointer;
    }
`;

export default GlobalStyles;