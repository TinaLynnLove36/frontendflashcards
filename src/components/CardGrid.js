import React from 'react';
import CardDetails from './CardDetails';

const CardGrid = ({ cards }) => {
    return (
    <section className="cards">

    {cards.map((card) => (
        <CardDetails key={card._id} card={card} onClick={() => console.log('New click')}/>
    ))}

    
     </section>
     )
}

export default CardGrid;