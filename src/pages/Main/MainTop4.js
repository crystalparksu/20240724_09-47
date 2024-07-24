import React from 'react';
import styled from 'styled-components';




// style
const Top4WholeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

//3단 포스터-
const Top4ContextContainer = styled.div`
    // background-color: RGB(228 228 228);
    //padding: 30px;
    //// border-radius: 20px;
    //word-break: break-all;
    //overflow-x: hidden;
    
    
`;

// 3단- 제목
const Top4TitleText = styled.p`
    color: #fff;
    font-size: 5rem;
    line-height: 1.5rem;
    font-weight: 900;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    position: absolute;
    bottom: 50px;
    left: auto;
    margin-left: 0.4rem;
    //font-family: 'SUIT-Regular';
    //text-shadow: 1px 1px 1px #676767;
`;

const Top4SubTitleText = styled.p`
    font-family: 'SUIT-Regular';
  font-size: 18px;
    line-height: 1.5rem;
    color: #fff;
`;

const TopListImgAndContext = styled.div`
  padding: 10px;
  border-radius: 20px;
  box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 21px 17px 28px -4px rgba(0, 0, 0, 0.36);
  transition: 0.3s;

  &:hover {
    scale: 1.1;
    transition: 0.3s;
  }
`;

const Hotkeyword = styled.span`
    color: #fff;
`;


// 3단 전체 박스
const TopList4Container = styled.div`
    width: 100%;
    background-color: rgb(11, 11, 13) !important;
  display: flex;
  justify-content: center;
  flex-direction: column;

    //padding-left: 3.888rem;
    //padding-right: 3.888rem;
    //margin-left: -3.888rem;
    //margin-right: -3.888rem;
    //
    //margin: -4rem -1.333rem -1.5rem;
    //padding: 4rem 1.333rem 2.5rem;
    //overflow: visible;
`;

const TopListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 2fr);
  margin-top: 30px;
  //gap: 10px;
    gap: 2px;

//2단 이미지 시작 구간
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
`;

// 포스터 이미지
const TopListImg = styled.img`
  //border-radius: 15px;
  width: 238px;
  height: 347px;
  padding: 10px;
  margin-bottom: 20px;
    
 
`;

const Top4TitleBox = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: left;
  //margin-bottom: 50px;

    //폰트 스타일
    font-size: 1.666rem !important;
    opacity: 1;
    margin-left: 1.333rem;
    color: rgba(255,255,255,0.9);
    font-weight: 500;
    line-height: 1.5;
    z-index: 1;
    padding-top: 1.333rem;
    float: left;

`;

// 문구
const Top4Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    font-family: "Nanum Gothic", sans-serif;
    font-size: 1.2rem;
    color: rgba(255,255,255,1);
    font-weight: 500;
    letter-spacing: -2px;
    line-height: 1.5;
    padding: 0 0 1rem;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    margin-left: 3rem;
    z-index: 1;
    padding-top: 5rem;

    .SectionANav{
        font-size: 1.2rem;
        color: #02d6e8;
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: -0.5px;
    }
`;

// 포스터 이미지
const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;


const MainTop4 = () => {
    return (
        <TopList4Container>
            <Top4TitleBox>
                <Top4Title>
                    지금 방영 중인,&nbsp;<span className="SectionANav">랭킹 프로그램</span>
                </Top4Title>
            </Top4TitleBox>


            <TopListBox>
                {TOP_FOUR_LIST.map(toplist => {
                    return (
                        <Top4WholeContainer key={toplist.id}>
                            <TopListImgAndContext>
                                <TopListImg src={toplist.movieThumbnail} alt="movieposter" />
                                <Top4ContextContainer>
                                    <Top4TitleText> {toplist.movieTitle}</Top4TitleText>
                                    {/*<Top4SubTitleText>*/}
                                    {/*    &#10077; {toplist.movieSubTitle} &#10078;*/}
                                    {/*</Top4SubTitleText>*/}
                                    {/*<br />*/}
                                    {/*<Top4SubTitleText>*/}
                                    {/*    - {toplist.movieContent} -*/}
                                    {/*</Top4SubTitleText>*/}
                                </Top4ContextContainer>
                            </TopListImgAndContext>
                        </Top4WholeContainer>
                    );
                })}
            </TopListBox>

        </TopList4Container>
    );
};
export default MainTop4;


const TOP_FOUR_LIST = [
    {
        id: 1,
        movieTitle: '1',
        movieSubTitle: '인사이드 아웃 2',
        movieContent: '3살이 된 라일리의 행복을 위해',
        movieThumbnail:
            '',
    },
];
