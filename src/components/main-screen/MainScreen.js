import React, { Component } from 'react'
import QuizScreen from './../quiz-screen/QuizScreen'

export class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
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
