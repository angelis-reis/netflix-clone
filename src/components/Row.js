import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
/* import Youtube from "react-youtube";
import movieTrailer from "movie-trailer"; */
import { CardContext }  from "../App"
import "../styles/row.css"

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchURL, isLargeRow }) {

  const [movies, setMovies] = useState([]);
  /* const [trailerUrl, setTrailerUrl] = useState(null); */
  const { showCard, setShowCard } = useContext(CardContext)
  
  const { selectedMovie, setSelectedMovie } = useContext(CardContext)

  // roda quando a a Row for renderizada
  // como um componentDidMount
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.log('Koca: movies ', movies );
      return request;

      
    }
    fetchData();
    //    tenho que colocar esse props (fetchURL) aqui para que renderize cada vez que eu atualizar o valor dele
  }, [fetchURL]);

  const opts = {
    ght: "390",
    th: "100%",
    yerVars: {
      autoplay: 1,
      // https://developers.google.com/youtube/player_parameters
    }
  }

  /* const handleClick = (movie) => {
    console.log("apertou imagem")
    console.log("movieTemp inicio: ", movieTemp)
    console.log("movieName: ", movie.name)

    if(movie.name == movieTemp){
      console.log("é igual")
      setTrailerUrl(null)
    }

    else{
      console.log("else")
      if(trailerUrl){    
        console.log("existe")
        movieTrailer(movie?.name || "")
        .then( (url) => {
          const urlParams =new URLSearchParams( new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }).catch( 
          (error) => 
            setTrailerUrl(null)
          );
      }
  
      else{
        movieTrailer(movie?.name || "")
        .then( (url) => {
          const urlParams =new URLSearchParams( new URL(url).search);
          setTrailerUrl(urlParams.get("v"));  
        }).catch( (error) => setTrailerUrl(null) );
      }
    }

    movieTemp = movie.name
    console.log("movieTemp fim: ", movieTemp)
  }; */

  const handleClick = (movie) => {
    if (showCard === true) {
      setSelectedMovie(movie)
    }
    else{
      setShowCard((prevState) =>{
        setShowCard(!prevState)
      })
      setSelectedMovie(movie)
    }
  }

  return (

      <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">
          {/* {several row posters} */}

          {movies.map((movie) => (
            <>

              {movie.backdrop_path ?

                <img
                key = {movie.id}
                onClick = { () => handleClick(movie)}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                alt={movie.name}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                /> 
                                
               :

                null
               
              }

               

            </>
          ))}
        </div>
        {/* {trailerUrl && <Youtube videoId = {trailerUrl} opts={opts} /> } */}
        {/* <Youtube videoId = {trailerUrl} opts={opts} /> */}
      </div>
  );
}

export default Row;



                
