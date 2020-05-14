import React, { Suspense } from 'react';
import axios from 'axios';

const MoviesListSuspense = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <MoviesListInner />
    </Suspense>
  );
};

const MoviesListInner = () => {
  const response = await axios.get('http://movies-example.will.tmp.br/movies');
  const list = response.data;
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default MoviesListSuspense;
