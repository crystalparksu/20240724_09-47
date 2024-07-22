import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ChartList from './ChartList';
import ScheduledHeader from './ScheduledHeader';



// Chart
function Chart() {
  const [movieChart, setMovieChart] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sort = queryParams.get('sort');

  function rankEvent(e) {
    const params = new URLSearchParams(window.location.search);
    params.set('sort', e.target.value);
    window.location.search = params.toString();
  }

  useEffect(() => {
    fetch(`http://43.200.63.91:3000/movies?release=1&sort=${sort}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMovieChart(data.getMovies);
      });
  }, [sort]);

  return (
    <>
      <ScheduledHeader />
      <RankBox>
        {/* <Rank defaultValue={sort} onChange={e => rankEvent(e)}>
          <option value="1">예매율순</option>
        </Rank> */}
      </RankBox>
      <ChartContainer>
        <ChartList movieChart={movieChart} sort={sort} />
      </ChartContainer>
    </>
  );
}

const RankBox = styled.div`
  display: inline-block;
  margin: 0 5px;
  float: right;
  margin-top: 10px;
`;

const Rank = styled.select`
  width: 70px;
  height: 30px;
  margin-right: 10px;
`;

const ChartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
  padding: 40px;
  gap: 40px;
`;

export default Chart;
