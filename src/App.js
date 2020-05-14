import React from 'react';

import MoviesList from './MoviesList';
import MoviesListSuspense from './MoviesListSuspense';

function App() {
  return (
    <div className="App">
      <MoviesList />
      <p>With Suspense</p>
      <MoviesListSuspense />
    </div>
  );
}

export default App;
