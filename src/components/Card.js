import React, { useContext, useState, useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import styled from 'styled-components';
import { CardContext } from '../App';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const StyledCard = styled.div`
	.card {
		width: 1200px;
		height: 600px;
		background: transparent;
		position: fixed;
		left: 0;
		right: 0;
		margin: auto;
		top: 0;
		bottom: 0;
		border-radius: 10px;
		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
	}
	.card_left {
		width: 40%;
		height: 800px;
		float: left;
		overflow: hidden;
		background: transparent;
	}
	.card_left img {
		width: 100%;
		height: auto;
		border-radius: 20px 0 0 20px;
		-webkit-border-radius: 10px 0 0 10px;
		-moz-border-radius: 10px 0 0 10px;
		position: relative;
	}
	.card_right {
		width: 60%;
		float: left;
		background: #000000;
		height: 720px;
		border-radius: 0 20px 20px 0;
		-webkit-border-radius: 0 10px 10px 0;
		-moz-border-radius: 0 10px 10px 0;
	}

	.close_button {
		color: black;
		height: 30px;
		width: 30px;
		border-radius: 50%;
		border-style: none;
		font-size: 20px;
		background-color: #ddd;
		cursor: pointer;
		right: 20px;
		top: 20px;
		position: absolute;
	}
	.card_right h1 {
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		text-align: left;
		font-size: 65px;
		margin: 30px 30px 30px 0;
		padding: 0 0 0 40px;
		letter-spacing: 1px;
	}
	.card_right__details ul {
		list-style-type: none;
		padding: 0 0 0 40px;
		margin: 10px 0 0 0;
	}
	.card_right__details ul li {
		display: inline;
		color: #e3e3e3;
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 21px;
		padding: 0 40px 0 0;
	}
	.card_right__rating__stars {
		position: relative;
		right: 400px;
		margin: 10px 0 10px 0;
	}
	.card_right__rating__stars fieldset,
	.card_right__rating__stars label {
		margin: 0;
		padding: 0;
	}
	.card_right__rating__stars .rating {
		border: none;
	}
	.card_right__rating__stars .rating > input {
		display: none;
	}
	.card_right__rating__stars .rating > label:before {
		margin: 5px;
		font-size: 1.25em;
		display: inline-block;
		content: '\f005';
		font-family: FontAwesome;
	}
	.card_right__rating__stars .rating > .half:before {
		content: '\f089';
		position: absolute;
	}
	.card_right__rating__stars .rating > label {
		color: #ddd;
		float: right;
		/***** CSS Magic to Highlight Stars on Hover *****/
	}
	.card_right__rating__stars .rating > input:checked ~ label,
	.card_right__rating__stars .rating:not(:checked) > label:hover,
	.card_right__rating__stars .rating:not(:checked) > label:hover ~ label {
		/* show gold star when clicked */
		/* hover current star */
		color: #ffd700;
		/* hover previous stars in list */
	}
	.card_right__rating__stars .rating > input:checked + label:hover,
	.card_right__rating__stars .rating > input:checked ~ label:hover,
	.card_right__rating__stars .rating > label:hover ~ input:checked ~ label,
	.card_right__rating__stars .rating > input:checked ~ label:hover ~ label {
		/* hover current star when changing rating */
		/* lighten current selection */
		color: #ffed85;
	}
	.card_right__review p {
		color: white;
		font-family: 'Montserrat', sans-serif;
		font-size: 20px;
		padding: 0 40px 0 40px;
		letter-spacing: 1px;
		margin: 40px 0 10px 0;
		line-height: 25px;
	}
	.card_right__review a {
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
		font-size: 21px;
		padding: 0 0 0 40px;
		color: #ffda00;
		margin: 0;
	}
	.card_right__button {
		padding: 0 0 0 40px;
		margin: 30px 0 0 0;
	}
	.card_right__button a {
		color: #ffda00;
		text-decoration: none;
		font-family: 'Montserrat', sans-serif;
		border: 2px solid #ffda00;
		padding: 10px 10px 10px 40px;
		font-size: 18px;
		background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		background-position: 7% 50%;
		border-radius: 5px;
		-webkit-transition-property: all;
		transition-property: all;
		-webkit-transition-duration: 0.5s;
		transition-duration: 0.5s;
	}
	.card_right__button a:hover {
		color: #000000;
		background-color: #ffda00;
		background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/rFQ5dHA.png);
		background-size: 12px 12px;
		background-repeat: no-repeat;
		background-position: 10% 50%;
		cursor: pointer;
		-webkit-transition-property: all;
		transition-property: all;
		-webkit-transition-duration: 0.5s;
		transition-duration: 0.5s;
	}
`;

const genres = {
	Action: 10759,
	Animation: 16,
	Comedy: 35,
	Crime: 80,
	Documentary: 99,
	Drama: 18,
	Family: 10751,
	Kids: 10762,
	Mystery: 9648,
	News: 10763,
	Reality: 10764,
	Fantasy: 10765,
	Soap: 10766,
	Talk: 10767,
	War: 10768,
	Western: 37,
	ACTION: 28,
	Adventure: 12,
	FANTASY: 14,
	History: 36,
	Horror: 27,
	Music: 10402,
	Romance: 10749,
	Science: 878,
	TV: 10770,
	Thriller: 53
};

const Card = ({ selectedMovie }) => {
	const movieGenreDefinition = () => {
		const movieGenre = selectedMovie.genre_ids[0];
		const movieGenres = Object.entries(genres);

		for (let i = 0; i < movieGenres.length; i++) {
			if (movieGenres[i][1] === movieGenre) {
				setSelectedGenre(movieGenres[i][0]);
			}
		}
	};

	const { showCard, setShowCard } = useContext(CardContext);

	const [date, setDate] = useState('');

	const [movieName, setMovieName] = useState('');

	const [selectedGenre, setSelectedGenre] = useState('');

	useEffect(() => {
		if (selectedMovie.first_air_date != null) {
			console.log('Koca: air_date ');
			const dateTemp = selectedMovie.first_air_date;
			const date = dateTemp.slice(0, 4);
			console.log('date: ', date);
			setDate(date);
			setMovieName(selectedMovie.original_name);
		} else {
			console.log('Koca: release_date ');
			const dateTemp = selectedMovie.release_date;
			const date = dateTemp.slice(0, 4);
			console.log('date: ', date);
			setDate(date);
			setMovieName(selectedMovie.original_title);
		}

		movieGenreDefinition();

		console.log('Koca: ', selectedMovie);
	}, []);

	return (
		<StyledCard>
			<div className='card'>
				<div className='card_left'>
					<img src={`${baseUrl}${selectedMovie.poster_path}`} />
				</div>

				<div className='card_right'>
					<h1>{movieName}</h1>
					<button
						onClick={() => {
							setShowCard(false);
						}}
						className='close_button'
					>
						X
					</button>

					<div className='card_right__details'>
						<ul>
							<li>{date}</li>
							<li> {selectedGenre} </li>
							<li>
								{' '}
								{selectedMovie.vote_average}{' '}
								<BsFillStarFill clor='red' />{' '}
							</li>
						</ul>

						<div className='card_right__rating'>
							<div className='card_right__rating__stars'>
								{/* <fieldset className='rating'>

                                    <input id='star10' name='rating' type='radio' value='10'>
                                    </input>
                                    <label className='full' for='star10' title='10 stars'></label>
                                    <input id='star9half' name='rating' type='radio' value='9 and a half'>
                                    </input>
                                    <label className='half' for='star9half' title='9.5 stars'></label>
                                    <input id='star9' name='rating' type='radio' value='9'>
                                    </input>
                                    <label className='full' for='star9' title='9 stars'></label>
                                    <input id='star8half' name='rating' type='radio' value='8 and a half'>
                                    </input>
                                    <label className='half' for='star8half' title='8.5 stars'></label>
                                    <input id='star8' name='rating' type='radio' value='8'>
                                    </input>
                                    <label className='full' for='star8' title='8 stars'></label>
                                    <input id='star7half' name='rating' type='radio' value='7 and a half'>
                                    </input>
                                    <label className='half' for='star7half' title='7.5 stars'></label>
                                    <input id='star7' name='rating' type='radio' value='7'>
                                    </input>
                                    <label className='full' for='star7' title='7 stars'></label>
                                    <input id='star6half' name='rating' type='radio' value='6 and a half'>
                                    </input>
                                    <label className='half' for='star6half' title='6.5 stars'></label>
                                    <input id='star6' name='rating' type='radio' value='6'>
                                    </input>
                                    <label className='full' for='star6' title='6 star'></label>
                                    <input id='star5half' name='rating' type='radio' value='5 and a half'>
                                    </input>
                                    <label className='half' for='star5half' title='5.5 stars'></label>
                                    <input id='star5' name='rating' type='radio' value='5'>
                                    </input>
                                    <label className='full' for='star5' title='5 stars'></label>
                                    <input id='star4half' name='rating' type='radio' value='4 and a half'>
                                    </input>
                                    <label className='half' for='star4half' title='4.5 stars'></label>
                                    <input id='star4' name='rating' type='radio' value='4'>
                                    </input>
                                    <label className='full' for='star4' title='4 stars'></label>
                                    <input id='star3half' name='rating' type='radio' value='3 and a half'>
                                    </input>
                                    <label className='half' for='star3half' title='3.5 stars'></label>
                                    <input id='star3' name='rating' type='radio' value='3'>
                                    </input>
                                    <label className='full' for='star3' title='3 stars'></label>
                                    <input id='star2half' name='rating' type='radio' value='2 and a half'>
                                    </input>
                                    <label className='half' for='star2half' title='2.5 stars'></label>
                                    <input id='star2' name='rating' type='radio' value='2'>
                                    </input>
                                    <label className='full' for='star2' title='2 stars'></label>
                                    <input id='star1half' name='rating' type='radio' value='1 and a half'>
                                    </input>
                                    <label className='half' for='star1half' title='1.5 stars'></label>
                                    <input id='star1' name='rating' type='radio' value='1'>
                                    </input>
                                    <label className='full' for='star1' title='1 star'></label>
                                    <input id='starhalf' name='rating' type='radio' value='half'>
                                    </input>
                                    <label className='half' for='starhalf' title='0.5 stars'></label>

                                </fieldset> */}
							</div>
						</div>

						<div className='card_right__review'>
							<p>{selectedMovie.overview}</p>
							{/* <a href='http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl' target='_blank'>Saiba mais</a> */}
						</div>

						{/* <div className='card_right__button'>
                            <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME' target='_blank'>ASSISTIR TRAILER</a>
                        </div> */}
					</div>
				</div>
			</div>
		</StyledCard>
	);
};

export default Card;
