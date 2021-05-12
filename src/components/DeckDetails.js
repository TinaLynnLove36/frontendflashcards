import React, { Component } from 'react'

class DeckDetails extends React.Component {
  render() {
    return (
      <button
        className="cardButtons"
        onClick={this.props.onClickHandler}
        data-id={this.props.id}>
        <div className="card" data-id={this.props.id}>
          <div className="card-inner">
            <div className="card-front">
              <h1 data-id={this.props.id}>{this.props.title}</h1>
                <h1 data-id={this.props.id}>{this.props.index}</h1>
            </div>
          </div>
        </div>
      </button>
    )
  }
}



export default DeckDetails

