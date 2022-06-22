import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async (query, pageParam) => {
  const API_URL = 'https://hn.algolia.com/api/v1/search_by_date';
  let response = [];
  if (query) {
    const { data } = await axios.get(API_URL, {
      params: {
        query,
        page: pageParam,
        hitsPerPage: 8,
      },
    });

    response = data;
  }

  return response;
};

const usePosts = (framework) => {
  const result = useInfiniteQuery(
    ['posts', framework],
    ({ pageParam = 0 }) => fetchPosts(framework, pageParam),
    {
      getNextPageParam: (lastPage) => ((lastPage.page === lastPage.nbPages)
        ? undefined
        : lastPage.page + 1),
    },
  );

  const dataPosts = result?.data?.pages.reduce(
    (prevPosts, page) => prevPosts.concat(page.hits),
    [],
  ) ?? [];

  return { ...result, dataPosts };
};

export default usePosts;
