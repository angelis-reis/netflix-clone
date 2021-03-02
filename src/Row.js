import React, { useState, useEffect } from "react";

// import instance from './axios'

import axios from "axios";

import "./row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {

  const [movies, setMovies] = useState([]);

  // roda quando a a Row for renderizada
  // como um componentDidMount

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);

      setMovies(request.data.results);

      return request;
    }

    fetchData();

    //    tenho que colocar esse props (fetchURL) aqui para que renderize cada vez que eu atualizar o valor dele
  }, [fetchURL]);



  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* {several row posters} */}

        {movies.map((movie) => (
          <img
            key = {movie.id}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>

      {/* { container} */}
    </div>
  );
}

export default Row;
