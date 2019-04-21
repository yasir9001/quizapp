import React, { Component } from 'react'
import QuizScreen from './../quiz-screen/QuizScreen'

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.toggle ?
                        <div>
                            <button onClick={() => this.setState({ toggle: true })}>Sart Quiz</button>
                        </div> :
                        <QuizScreen />
                }

            </>
        )
    }
}

export default MainScreen

let _data = {"response_code":0,"results":[{"category":"Entertainment: Music","type":"multiple","difficulty":"easy","question":"Which member of the Foo Fighters was previously the drummer for Nirvana?","correct_answer":"Dave Grohl","incorrect_answers":["Taylor Hawkins","Nate Mendel","Chris Shiflett"]},{"category":"History","type":"multiple","difficulty":"easy","question":"When did the Battle of the Somme begin?","correct_answer":"July 1st, 1916","incorrect_answers":["August 1st, 1916","July 2nd, 1916","June 30th, 1916"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"medium","question":"What is the alphanumeric representation of the imaginary number?","correct_answer":"i","incorrect_answers":["e","n","x"]}]}

export {_data}