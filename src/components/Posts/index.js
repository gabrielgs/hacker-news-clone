import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostCard from './PostCard';
import usePosts from './hooks/usePosts';
import useLocalStorage from '../../hooks/useLocalStorage';

const Wrapper = styled.section`
  margin-top: 32px;
`;
const ListPosts = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Posts = ({ selectedFramework, activeTab }) => {
  const {
    dataPosts,
    hasNextPage,
    fetchNextPage,
  } = usePosts(selectedFramework, activeTab);
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
      {posts && (
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

export default Posts;
