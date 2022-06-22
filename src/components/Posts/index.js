import React from 'react';
import styled from 'styled-components';
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
  const { data } = usePosts(selectedFramework);
  const [favoritePosts, setFavoritePosts] = useLocalStorage(
    'favoritePosts',
    [],
  );

  const getFavoritePostsFiltered = () => favoritePosts.filter(
    ({ framework }) => framework === selectedFramework,
  );

  const posts = activeTab === 'All' ? data : getFavoritePostsFiltered();

  return (
    <Wrapper>
      {posts && (
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
      )}
    </Wrapper>
  );
};

export default Posts;
