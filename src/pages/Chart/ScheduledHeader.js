import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ScheduledHeader() {
  return (
    <Header>
      <HeaderBox>
        {/* <Strong>무비차트</Strong> */}
        <UnorderedList>
          <ALink to="/chart?sort=openingDesc">개봉순</ALink>
          <ALink to="/chart?sort=bookingRateDesc">예매율순</ALink>
        </UnorderedList>
      </HeaderBox>
    </Header>
  );
}

const Header = styled.div`
  font-size: 24px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const HeaderBox = styled.div`
  width: 100%;
  margin-right: 140px;
`;

const UnorderedList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Strong = styled.strong`
  padding-left: 30px;
`;

const ALink = styled(Link)`
  font-size: 15px;
  margin-right: 10px;
  &:hover {
    color: #7063ff;
  }
`;

export default ScheduledHeader;
