import React, { useState, useEffect } from 'react';

import axios from 'axios';

const MoviesList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'http://movies-example.will.tmp.br/movies'
      );
      setList(response.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {isLoading && <>Loading...</>}
      <ul>
        {list.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
