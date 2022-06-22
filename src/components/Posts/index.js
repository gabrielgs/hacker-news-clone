import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';
import usePosts from './hooks/usePosts';

const Wrapper = styled.section`
  margin-top: 32px;
`;
const ListPosts = styled.div`
  display: grid;
  grid-gap: 20px;
`;

const Posts = ({ selectedFramework, activeTab }) => {
  const { data: posts } = usePosts(selectedFramework);

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
            />
          ))}
        </ListPosts>
      )}
    </Wrapper>
  );
};

export default Posts;
