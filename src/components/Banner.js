import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CardContext } from '../App';
import requests from '../requests';
import '../styles/banner.css';



function Banner() {
	const [movie, setMovie] = useState([]);

	const { showCard, setShowCard } = useContext(CardContext);

	const { selectedMovie, setSelectedMovie } = useContext(CardContext);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchTrending);

			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		}
		fetchData();
	}, [requests.fetchTrending]);

	function truncate(str, n) {
		return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
	}

	const handleClick = (movie) => {
		if (showCard === true) {
			console.log('Koca: click  era True');
			setSelectedMovie(movie);
		} else {
			setShowCard((prevState) => {
				console.log('Koca: click  era False');
				setShowCard(!prevState);
			});
			setSelectedMovie(movie);
		}
	};

	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
				backgroundPosition: 'center center'
			}}
		>
			<div className='banner_contents'>
				{/* {title} */}
				<h1 className='banner_title'>
					{movie?.title || movie?.name || movie?.original_name}
				</h1>

				<div className='banner_buttons'>
					<button
						onClick={() => handleClick(movie)}
						className='banner_button'
					>
						About
					</button>

					{/* <button className="banner_button">
                        My List
                    </button> */}
				</div>

				<h1 className='banner_description'>
					{truncate(movie?.overview, 250)}
				</h1>
				{/* { description} */}
			</div>

			<div className='banner--fadeBottom' />
		</header>
	);
}

export default Banner;
