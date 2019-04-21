import React, { Component } from 'react'
import Question from '../question/Question';
import { _data } from './../main-screen/MainScreen'
export class QuizScreen extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this)
        this.getResult = this.getResult.bind(this)
        this.getEachAnswer  = this.getEachAnswer.bind(this)
        this.state = {
            questions: [],
            curInd: 0,
            answers:[]
        }
    }
    increment() {
        let num = this.state.curInd
        num++
        this.setState({ curInd: num })
    }
    componentDidMount() {
        fetch('https://opentdb.com/api.php?amount=3')
            .then((response) => response.json())
            .then((data) => {
                let arr = data.results.map((e, i) => {
                    return { id: i, ...e }
                })
                this.setState({ questions: arr })
            })

            // let arr = _data.results.map((e, i) => {
            //     return { id: i, ...e }
            // })
            // this.setState({ questions: arr })
    }

    getResult(answers) {
        this.setState(answers)
    }
    getEachAnswer(answer){
        let arr = [...this.state.answers]
        arr.push(answer)
        this.setState({answers:arr})
    }
    
    
    calculteScore(){
        let qus = this.state.questions;
        let ans = this.state.answers;
        let score = 0
        qus.forEach((e, i)=> {
            if(e.correct_answer === ans[i].selectedOption){
                score++
            }
        })
        let avg = (score/this.state.questions.length)*100
        return avg.toFixed(2).toString()
    }

    render() {
        return (
            <div style={{height:'100vh  ',display:'flex', justifyContent:'center', alignItems:'center'}}>
                {
                    this.state.questions.length && !(this.state.answers.length === this.state.questions.length) ?

                        <Question 
                            getResult={this.getResult}
                            getEachAnswer={this.getEachAnswer}
                            next={this.increment}
                            data={this.state.questions[this.state.curInd]}
                            length={this.state.questions.length} />

                        : (this.state.answers.length === this.state.questions.length) ? 
                        <div>
                            <p>You scored {this.calculteScore()} %</p>
                        </div>
                        : null
                }
            </div>
        )
    }
}

export default QuizScreen