import axios from 'axios'
//import CardDetails from './CardDetails';
import React, { Component } from 'react'

class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false
        }
         this.questionCardOnClick= this.questionCardOnClick.bind(this)
    }

    
        questionCardOnClick() {
        this.setState ({
            showAnswer: !this.state.showAnswer
        })
    }

  render() {
      let output = null;

      if (this.state.showAnswer) {
          output = this.props.answer
      } else {
          output = this.props.question
      }

    return (
      <button className="cardButtons" onClick={this.questionCardOnClick}>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h1>{output}</h1>
              <h1 data-id={this.props.id}>{this.props.index}</h1>
            </div>
          </div>
        </div>
      </button>
    )
  }
}



export default QuestionCard
