import React from 'react';
import DeckDetails from './DeckDetails';

const DeckGrid = ({ decks }) => {
    return (
    <section className="cards">
    {decks.map((deck) => (
        <DeckDetails key={deck._id} deck={deck}></DeckDetails>
    ))}
     </section>
     )
}

export default DeckGrid;