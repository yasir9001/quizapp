import React, { Component } from 'react'

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            selectedOption: ''
        }
    }

    saveOption(e) {
        this.setState({ selectedOption: e.target.value })
    }

    showNext() {
        let result = {
            id: this.props.data.id,
            selectedOption: this.state.selectedOption
        }

        this.props.getEachAnswer(result)
        this.props.next()
    }

    render() {
        let { question, correct_answer, incorrect_answers, id } = this.props.data
        let options = [correct_answer, ...incorrect_answers]
        return (
            <>
                <div 
                // style={{border:'1px solid red'}}
                >
                    <p>Q#:{id + 1} {question}</p>
                    <div>
                        {
                            options.map((e, i) => <div key={i}>
                                <input type='radio' onChange={(e) => this.saveOption(e)} name='options' value={e} />
                                <label>{e}</label>
                            </div>)
                        }
                    </div>
                    <button onClick={() => this.showNext()}>next</button>
                </div>
            </>
        )
    }
}

export default Question