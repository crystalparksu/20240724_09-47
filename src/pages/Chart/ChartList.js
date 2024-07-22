import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

function ChartList(props) {
  const { movieChart } = props;
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`detail/${id}`);
  };

  useEffect(() => {
    movieChart.sort((a, b) => b.bookingRate - a.bookingRate);
  }, []);

  return (
    <>
      {movieChart.map(result => (
        <ChartBox
          onClick={() => {
            goToDetail(result.id);
          }}
          key={result.id}
        >
          <Title />
          <Link key={result.id} to={`detail/${result.id}`}>
            <Image src={result.movieThumbnailImageUrl} />
          </Link>
          <TextBox>
            <Title>{result.movieName}</Title>
            <Info>{result.movieSimpleDescription}</Info>
          </TextBox>
          <Ranking>
            <ReservationRate>예매율 {result.bookingRate}</ReservationRate>
            <Opening>개봉일 {result.movieOpeningDate.substr(0, 10)}</Opening>
          </Ranking>
          <TicketingBtn>
            <i className="fas fa-calendar-alt" />
            <Ticketing>
              <Link to="/selectmovie">예매하기</Link>
            </Ticketing>
          </TicketingBtn>
        </ChartBox>
      ))}
    </>
  );
}

const ReservationRate = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

const Opening = styled.p`
  font-size: 12px;
`;

const ChartBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: center;
  align-items: flex-start;
  margin-bottom: 50px;
  width: 300px;
  height: 600px;
`;

const Image = styled.img`
  top: 0px;
  width: 100%;
  border-radius: 15px;
`;
const Title = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 20px;
  font-weight: 600;
`;
const Info = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  font-size: 10px;
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 25px;
`;

const TextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const TicketingBtn = styled.button`
  position: absolute;
  padding: 10px 25px;
  margin-bottom: -30px;
  bottom: 0px;
  border: 1px solid #7063ff;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  background-color: white;
  color: #7063ff;

  &:hover {
    background-color: #6c5ce7;
    color: white !important;
  }
`;

const Ticketing = styled.span`
  margin-left: 5px;
`;

const Ranking = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 13px;
  margin-bottom: 10px;
`;

export default ChartList;
