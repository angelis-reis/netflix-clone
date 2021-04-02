import React from 'react'
import styled from "styled-components";

const StyledCard= styled.div`

   
    
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
    height: 600px;
    float: left;
    overflow: hidden;
    background: transparent;
    }
      .card_left img {
    width: 100%;
    height: auto;
    border-radius: 10px 0 0 10px;
    -webkit-border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    position: relative;
    }
    .card_right {
    width: 60%;
    float: left;
    background: #000000;
    height: 600px;
    border-radius: 0 10px 10px 0;
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    }
    .card_right h1 {
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 60px;
    margin: 30px 0 0 0;
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
    font-family: "Montserrat", sans-serif;
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
    content: "\f005";
    font-family: FontAwesome;
    }
    .card_right__rating__stars .rating > .half:before {
    content: "\f089";
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
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    padding: 0 40px 0 40px;
    letter-spacing: 1px;
    margin: 10px 0 10px 0;
    line-height: 20px;
    }
      .card_right__review a {
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
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
    font-family: "Montserrat", sans-serif;
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

const Card = ({ showCard }) =>{   

    /* { showCard ? <h1>true</h1> : null } */

    return(

        <StyledCard>

            <div className='card'>

                <div className='card_left'>
                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png' />
                </div>

                <div className='card_right'>

                    <h1>KILL  BILL:  VOL.  1</h1>

                    <div className='card_right__details'>

                        <ul>
                            <li>2003</li>
                            <li>111 min</li>
                            <li>Action</li>
                        </ul>

                        <div className='card_right__rating'>

                            <div className='card_right__rating__stars'>

                                <fieldset className='rating'>

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
                                    
                                </fieldset>

                            </div>

                        </div>

                        <div className='card_right__review'>
                            <p>The lead character, called 'The Bride,' was a member <br/> of the Deadly Viper Assassination Squad, led by her <br/> lover 'Bill.' Upon realizing she was pregnant with Bill's<br/> child, 'The Bride' decided to escape her life as a killer.<br/> She fled to Texas, met a young man, who, on the day<br/> of their wedding rehearsal was gunned down by....</p>
                            <a href='http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl' target='_blank'>Saiba mais</a>
                        </div>

                        <div className='card_right__button'>
                            <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME' target='_blank'>ASSISTIR TRAILER</a>
                        </div>

                    </div>

                </div>

            </div>

           

        </StyledCard>

             
    ) 
}

export default Card