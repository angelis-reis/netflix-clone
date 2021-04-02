import React, { useState, useEffect } from "react";
import './styles/App.css';
import Row from './components/Row'
import Banner from "./components/Banner" 
import Nav from "./components/Nav"
import requests from "./requests"
import "./styles/App.css"
import Card from "./components/Card"


function App() {

  const [selectedMovie, setSelectedMovie] = useState([]);
  const [showCard, setShowCard] = useState(true);

  

 /*  return (
    
    <div className="App" >
      <Nav />
      <Banner />
      <Row isLargeRow= {true} title= "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title= "Trending Now" fetchURL={requests.fetchTrending} />
      <Row title= "Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title= "Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title= "Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title= "Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title= "Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title= "Documentaries" fetchURL={requests.fetchDocumentaires} />

      { showCard && <Card showCard={showCard} /> }

    </div>
  ) */


  return (
    
    <div className="App" >
      <Nav />
      <Banner />
      <Row isLargeRow= {true} title= "NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title= "Trending Now" fetchURL={requests.fetchNetflixOriginals} />
      <Row title= "Top Rated" fetchURL={requests.fetchNetflixOriginals} />
      <Row title= "Action Movies" fetchURL={requests.fetchActionMovies} /> {/* não carrega as informações corretas no fetch */}
      <Row title= "Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title= "Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title= "Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title= "Documentaries" fetchURL={requests.fetchDocumentaires} />

      { showCard && <Card selectedMovie={selectedMovie} showCard={showCard} /> }

    </div>
  );
}

export default App;
