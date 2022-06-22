import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Header from './components/Header';
import Main from './components/Main';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <Main />
  </QueryClientProvider>
);

export default App;
