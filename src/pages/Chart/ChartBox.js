import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function ChartBox(props) {
  const { movieChart } = props;
  return (
    <>
      {movieChart
        .sort(function (a, b) {
          if (Number(a.reservationRate) < Number(b.reservationRate)) {
            return 1;
          }
          if (Number(a.reservationRate) > Number(b.reservationRate)) {
            return -1;
          }
          return 0;
        })
        .map((result, idx) => (
          <ChartBox key={result.movieName}>
            <Title />
            <Link key={result.movieName} to={`detail/${idx + 1}`}>
              <Image src={result.movieThumbnailImageUrl} />
            </Link>
            <TextBox>
              <Title>{result.movieName}</Title>
              <Info>{result.movieSimpleDescription}</Info>
            </TextBox>
            <Ranking>
              <ReservationRate>예매율 {result.bookingRate}</ReservationRate>
              <Opening>개봉일 {result.scheduled}</Opening>
            </Ranking>
            <TicketingBtn>
              <i className="fas fa-calendar-alt" />
              <Ticketing>
                <Link to="/selectmovie">예매하기</Link>
              </Ticketing>
            </TicketingBtn>
          </ChartBox>
        ))}
      ;
    </>
  );
}

const TicketingBtn = styled.button`
  position: absolute;
  padding: 10px 25px;
  margin-bottom: -30px;
  bottom: 0px;
  border: 1px solid black;
  width: 100%;
  text-align: center;
  background-color: white;
  &:hover {
    background-color: #6c5ce7;
    color: white;
  }
`;

const Title = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
`;

const Info = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 10px;
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const Ranking = styled.div`
  margin-bottom: 10px;
`;

const ReservationRate = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const Opening = styled.p`
  font-size: 12px;
`;

const Image = styled.img`
  top: 0px;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
`;

const Ticketing = styled.span`
  margin-left: 5px;
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export default ChartBox;
