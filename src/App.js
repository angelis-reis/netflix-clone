import './App.css';

import Row from './Row'

import Banner from "./Banner" 

import Nav from "./Nav"

import requests from "./requests"

import "./App.css"


function App() {

  

  return (
    
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
    </div>
  );
}

export default App;
