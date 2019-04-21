import React, { Component } from 'react'

export class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=10')
        .then((response)=> response.json())
        .then((data) => console.log(data))
    }

    render() {
        return (
            <div>
                QuizScreen
      </div>
        )
    }
}

export default QuizScreen