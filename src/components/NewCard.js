import React, { Component } from 'react';
import axios from 'axios';


export class NewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: "",
            answer: "",
           
        }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    }


    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

     refreshPage = (e) => {
        window.location.reload();
    }

    submitHandler = (e) => {
        e.preventDefault();
        let url = `http://localhost:5000/decks/${this.props.onChange}/cards`;
        axios.post(url,{
            question: this.state.question,
            answer: this.state.answer
        })
        .then(response => {
            this.forceUpdate();
         
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  
    render() {
        const {question} = this.state.question
        const {answer} = this.state.answer
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='question' value={question} onChange={this.changeHandler} />
                        <label>Question</label>
                    </div>
                    <div>
                        <input type='text' name='answer' value={answer} onChange={this.changeHandler} />
                        <label>Answer</label>
                    </div>
                    <button type='submit' onClick={this.refreshPage}>Submit</button>
                </form>
            
            </div>
        )
    }
}

export default NewCard