import React from 'react';
import axios from 'axios'

const CardDetails = ({ card }) => {

    const getCards = () => {
        axios.get('http://localhost:5000/:id/cards')
        .then(response => {
            console.log(response);
        })
    }

    const hello = () => {
        console.log('hello');
    }
return (
   <button className='cardButtons' onClick={hello}>
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{card.title}</h1>
        </div>
      </div>
    </div>
    </button>
  
  )
}


// will make line 10 a button that when clicked will open up and create single card. 




export default CardDetails;