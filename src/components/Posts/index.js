import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from './PostCard';
import usePosts from './hooks/usePosts';
import useLocalStorage from '../../hooks/useLocalStorage';

const Wrapper = styled.section`
  margin-top: 32px;
  @media (min-width: 1024px) {
    margin-top: 38px;
  }
  @media (min-width: 1280px) {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const ListPosts = styled.div`
  display: grid;
  grid-gap: 20px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
  @media (min-width: 1280px) {
    grid-gap: 30px 40px;
  }
`;

const Posts = ({ selectedFramework, activeTab }) => {
  const {
    dataPosts,
    hasNextPage,
    fetchNextPage,
  } = usePosts(selectedFramework);
  const [favoritePosts, setFavoritePosts] = useLocalStorage(
    'favoritePosts',
    [],
  );

  const getFavoritePostsFiltered = () => favoritePosts.filter(
    ({ framework }) => framework === selectedFramework,
  );

  const posts = activeTab === 'All'
    ? dataPosts
    : getFavoritePostsFiltered();

  return (
    <Wrapper>
      {posts.length > 0 && (
        <InfiniteScroll
          dataLength={posts.length}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader="Loading..."
        >
          <ListPosts>
            {posts.map((post) => (
              <PostCard
                key={post.objectID}
                id={post.objectID}
                author={post.author}
                title={post.story_title}
                url={post.story_url}
                date={post.created_at}
                favoritePosts={favoritePosts}
                setFavoritePosts={setFavoritePosts}
                selectedFramework={selectedFramework}
              />
            ))}
          </ListPosts>
        </InfiniteScroll>
      )}
    </Wrapper>
  );
};

Posts.propTypes = {
  selectedFramework: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Posts;
