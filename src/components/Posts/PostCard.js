import React, { useState, useEffect } from 'react';
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
  transition: all .2s ease;
  &:hover {
    opacity: 0.4;
  }
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

const PostCard = ({
  id,
  author,
  title,
  url,
  date,
  favoritePosts,
  setFavoritePosts,
  selectedFramework,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const handleRemoveFavorites = (copyFavorites) => {
    const updatedFavorites = copyFavorites.filter((favorite) => favorite.objectID !== id);
    setFavoritePosts(updatedFavorites);
    setIsFavorite(false);
  };

  const addToFavorites = (copyFavorites) => {
    const newPost = {
      objectID: id,
      author,
      story_title: title,
      story_url: url,
      created_at: date,
      framework: selectedFramework,
    };
    copyFavorites.push(newPost);
    setFavoritePosts(copyFavorites);
    setIsFavorite(true);
  };

  const handleFavorite = () => {
    const cloneFavorites = JSON.parse(JSON.stringify(favoritePosts));
    if (isFavorite) {
      handleRemoveFavorites(cloneFavorites);
    } else {
      addToFavorites(cloneFavorites);
    }
  };

  useEffect(() => {
    const isInFavorites = favoritePosts.some((post) => post.objectID === id);
    if (isInFavorites) setIsFavorite(true);
  }, []);

  return (
    <Card
      onClick={handleClick}
    >
      <Header>
        <IconContainer>
          <Icon src={TimeIcon} alt="Time Icon" />
        </IconContainer>
        <TimeText>
          {`${formatDistance(new Date(date), new Date(), {
            addSuffix: true,
          })} by ${author}`}
        </TimeText>
      </Header>
      <Body>
        <Text>{title}</Text>
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
