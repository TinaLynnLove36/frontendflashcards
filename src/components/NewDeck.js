import React, { Component } from 'react';
import axios from 'axios';


export class NewDeck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    refreshPage = (e) => {
        window.location.reload();
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post("http://localhost:5000/decks", this.state)
        .then(response => {
            console.log(response)
         
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {title} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler} />
                        <label>Title</label>
                    </div>
                    <button type='submit'onClick={ this.refreshPage }>Submit</button>
                </form>
            
            </div>
        )
    }
}

export default NewDeck





