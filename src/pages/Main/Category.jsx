import styled from 'styled-components';
import requests from "../../api/requests";



// 메인 문구- 부모 박스
const MainContainer = styled.div`
  width: 100%;
    background-color: rgb(11, 11, 13) !important;
`;


// 메인 문구- 부모 박스
const SectionTopTitle = styled.div`
  width: 100%;
    
    .SectionTopTitle_1{
        font-family: 'SUIT-Regular';
        font-size: 1.666rem !important;
        opacity: 1;
        margin-left: 1.333rem;
        color: rgba(255,255,255,0.9);
        font-weight: 700;
        line-height: 1.5;
        z-index: 1;
        padding-top: 1.333rem;
        float: left;
        
     .SectionTopTitle_span{
         font-family: 'SUIT-Regular';
         font-size: 1.222rem !important;
         opacity: 1;
         color: rgba(255,255,255,0.9);
         font-weight: 500;
         line-height: 1.5;
     }   
    }
`;

// 전체 박스
const Wrap = styled.div`
    padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
    
    
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 99;
  }

  //처음엔 비디오 안보이게
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;


// 추천 배너 부터~
const Container = styled.div`
    padding-left: 3.888rem;
    padding-right: 3.888rem;
    margin-left: -3.888rem;
    margin-right: -3.888rem;
    
  //margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Category = () => {
  return (
    <>
        <Container>
        <Wrap>
              <img src='/images/viewers-disney.png' alt='disney'/>
              <video autoPlay loop muted>
                  <source src='/videos/disney.mp4' type='video/mp4'/>
              </video>
          </Wrap>

          {/*<Header>*/}
          {/*    <div className="Cate_h1">recommend</div>*/}
          {/*</Header>*/}

          <Wrap>
              <img src='/images/viewers-pixar.png' alt='pixar'/>
              <video autoPlay loop muted>
                  <source src='/videos/pixar.mp4' type='video/mp4'/>
              </video>
          </Wrap>
          <Wrap>
              <img src='/images/viewers-marvel.png' alt='marvel'/>
              <video autoPlay loop muted>
                  <source src='/videos/marvel.mp4' type='video/mp4'/>
              </video>
          </Wrap>
          <Wrap>
              <img src='/images/viewers-starwars.png' alt='starwars'/>
              <video autoPlay loop muted>
                  <source src='/videos/star-wars.mp4' type='video/mp4'/>
              </video>
          </Wrap>
          <Wrap>
              <img src='/images/viewers-national.png' alt='national'/>
              <video autoPlay loop muted>
                  <source src='/videos/national-geographic.mp4' type='video/mp4'/>
              </video>
          </Wrap>
      </Container>
    </>
  );
};
export default Category;