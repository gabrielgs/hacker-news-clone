import React, { useState } from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import {
  TimeIcon,
  HeartIcon,
  HeartIconFill,
} from '../../assets/icons/IconRepository';

const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: grid;
  grid-template-areas:
    "time favorite"
    "text favorite";
  justify-content: space-between;
  grid-gap: 6px 16px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  grid-area: time;
  padding-top: 14px;
  padding-left: 26px;
`;
const IconContainer = styled.div`
  display: flex;
`;
const Icon = styled.img``;
const Body = styled.div`
  grid-area: text;
  padding-bottom: 14px;
  padding-left: 26px;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
const Reaction = styled.div`
  background: ${({ theme }) => theme.colors.screenBackground};
  border-radius: 6px;
  cursor: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: favorite;
  width: 68px;
`;
const FavoriteContainer = styled.div`
  display: flex;
  cursor: pointer;
`;
const TimeText = styled.span`
  color: ${({ theme }) => theme.colors.textDate};
  font-size: 11px;
  margin-left: 8px;
`;

const PostCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  }

  return(
    <Card>
      <Header>
        <IconContainer>
          <Icon src={TimeIcon} alt="Time Icon" />
        </IconContainer>
        <TimeText>
          {formatDistance(new Date('2022-06-13T23:55:25.000Z'), new Date(), {
            addSuffix: true,
          })}
        </TimeText>
      </Header>
      <Body>
        <Text>Event-driven state management in React using Storeon</Text>
      </Body>
      <Reaction onClick={(e) => e.stopPropagation()}>
        <FavoriteContainer onClick={handleFavorite}>
          {isFavorite ? <HeartIconFill /> : <HeartIcon />}
        </FavoriteContainer>
      </Reaction>
    </Card>
  );
};

export default PostCard;
