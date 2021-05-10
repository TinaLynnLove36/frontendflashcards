import React from 'react';

const DeckDetails = ({ deck }) => {

    const hello = () => {
        console.log('just a test');
    }
return (
   <button className='cardButtons' onClick={hello}>
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{deck.title}</h1>
        </div>
      </div>
    </div>
    </button>
  
  )
}


// will make line 10 a button that when clicked will open up and create single card. 




export default DeckDetails;