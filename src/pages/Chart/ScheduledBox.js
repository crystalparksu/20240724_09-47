import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ScheduledBox() {
  const [movieChart, setMovieChart] = useState([]);

  useEffect(() => {
    // fetch('http://43.200.63.91:3000/movies?release=1&sort=openingDesc', {
    fetch('http://localhost:3000/movies?release=1&sort=openingDesc', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieChart(data.getMovies);
      });
  }, []);

  return (
    <Container>
      {movieChart
        .sort(function (a, b) {
          if (Number(a.grade) < Number(b.grade)) {
            // console.log(a.grade, b.grade);
            return 1;
          }
          if (Number(a.grade) > Number(b.grade)) {
            return -1;
          }
          return 0;
        })
        .map(result => (
          <ChartBox key={result.movieName}>
            <ChartDiv>
              <Title />
              <Image src={result.movieThumbnailImageUrl} />

              <Title>{result.movieName}</Title>
              <Info>{result.movieSimpleDescription}</Info>

              <Ranking>
                <ReservationRate>예매율 {result.bookingRate}</ReservationRate>
                <Opening>
                  개봉일 {result.movieOpeningDate.substr(0, 10)}
                </Opening>
              </Ranking>

              <TicketingBtn>
                <i className="fas fa-calendar-alt" />
                <Ticketing>예매하기</Ticketing>
              </TicketingBtn>
            </ChartDiv>
          </ChartBox>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ChartBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  margin-top: 30px;
  padding: 40px;
  gap: 40px;
`;

const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
  padding-right: 15px;
  margin-top: 30px;
`;

const Image = styled.img`
  top: 0px;
  width: 300px;
  align-items: center;
`;

const TicketingBtn = styled.button`
  background-color: white;
  position: absolute;
  padding: 10px 25px;
  margin-bottom: -30px;
  bottom: 0px;
  border: 1px solid black;
  width: 330px;
  height: 60px;
  text-align: center;
  background-color: white;
  &:hover {
    color: white;
    background-color: #9971ff;
  }
`;

// const TextBox = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: coclumn;
//   margin-top: 25px;
// `;

const Ranking = styled.div`
  margin-bottom: 10px;
`;

const Ticketing = styled.span`
  margin-left: 5px;
`;

const Opening = styled.p`
  font-size: 12px;
`;

const ReservationRate = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const Info = styled.span`
  padding-right: 15px;
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 10px;
`;

export default ScheduledBox;
