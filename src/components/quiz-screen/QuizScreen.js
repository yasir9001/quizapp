import React, { Component } from 'react'
import Question from '../question/Question';

export class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.getResult = this.getResult.bind(this)
        this.state = {
            questions: [],
            curInd: 0
        }
    }
    increment() {
        let num = this.state.curInd
        num++
        this.setState({ curInd: num })
    }
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((response) => response.json())
            .then((data) => {
                let arr = data.results.map((e, i) => {
                    return { id: i, ...e }
                })
                this.setState({ questions: arr })
            })
    }

    getResult(answers) {
        this.setState(answers)
        console.log(answers)
    }

    render() {
        console.log(this.state.questions, this.state.curInd)
        return (
            <div>
                {this.state.questions.length && !(this.state.questions.length[this.state.curInd].id +  1 === this.state.questions.length) ? <Question getResult={this.getResult} next={this.increment} data={this.state.questions[this.state.curInd]} length={this.state.questions.length} /> : null}


            </div>
        )
    }
}

export default QuizScreen