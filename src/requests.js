import API_KEY from './API_KEY';

const requests = {
	fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
	fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`,
	fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaires: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
