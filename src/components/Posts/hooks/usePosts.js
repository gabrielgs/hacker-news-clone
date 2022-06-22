import { useQuery } from 'react-query';
import axios from 'axios';

const getPostsFiltered = (posts) => posts?.filter((post) => (
  post.author
  && post.story_title
  && post.story_url
  && post.created_at
));

const fetchPosts = async (query) => {
  const API_URL = 'https://hn.algolia.com/api/v1/search_by_date';
  let response = [];
  if (query) {
    const { data: { hits } } = await axios.get(API_URL, {
      params: {
        query,
        page: 0,
        hitsPerPage: 8,
      },
    });
    response = getPostsFiltered(hits);
  }

  return response;
};

const usePosts = (framework) => useQuery(['posts', framework], () => fetchPosts(framework));

export default usePosts;
