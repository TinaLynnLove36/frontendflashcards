import React, { Component } from 'react'
import DeckDetails from './DeckDetails'
import QuestionCard from './QuestionCard'
import NewCard from './NewCard'


class DeckGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deckId: null,
 
      
    }
    this.deckDetailsOnClick = this.deckDetailsOnClick.bind(this)
    this.backButtonOnClick = this.backButtonOnClick.bind(this)
  }

 
  deckDetailsOnClick(e) {
    console.log(e.target)
    this.setState({
      deckId: e.target.dataset.id
    }) 
  }


  backButtonOnClick() {
      this.setState ({
          deckId: null,
          
      })
  }

  render() {
    let gridView = null
    if (this.state.deckId == null) {
      gridView = (
        <section className="cards">
          {this.props.decks.map((deck, index) => (
            <DeckDetails
              key={deck._id}
              id={deck._id}
              index={index + 1}
              title={deck.title}
              onClickHandler={this.deckDetailsOnClick}
            ></DeckDetails>
          ))}
        </section>
      )
    } else {
      const selectedCard = this.props.decks.find((deck) => {
        return deck._id == this.state.deckId
      })
      gridView = selectedCard.cards.map((card, index) => {
        return (
          <QuestionCard
            key={card._id}
            id={card._id}
            index={index + 1}
            question={card.question}
            answer={card.answer}
          />
        )
      })
    }
    let backButtonView = null
    let addNewCard = null
    if (this.state.deckId != null) {
      backButtonView = <button onClick={this.backButtonOnClick}>Back</button>
       addNewCard = <button onClick={this.backButtonOnClick}>Add New Card</button>
            
    }


    return (
      <div>
        {gridView}
        {backButtonView}
        {addNewCard}
      </div>
    )
  }
}
export default DeckGrid
