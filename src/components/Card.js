import React from 'react'

const Card = ({ movie, showCard }) =>{   

    return(
        <div>

            { showCard ? <h1>true</h1> : null }

        </div>    
    ) 
}

export default Card