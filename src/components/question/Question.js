import React, { Component } from 'react'

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            selectedOption: ''
        }
    }

    componentWillReceiveProps(props, props2) {
        // if(this.props.length === props.data.id+1){
        //     this.props.getResult(this.state.answers)
        //     // alert('ss')
        // }
        console.log('props', props)
    }
    saveOption(e) {
        this.setState({ selectedOption: e.target.value })
    }
    showNext() {
        let results = {
            id: this.props.data.id,
            selectedOption: this.state.selectedOption
        }
        let arr = [...this.state.answers]
        arr.push(arr)
        this.props.next()
        if (this.props.length === this.props.data.id + 1) {
            this.props.getResult(this.state.answers)
            // alert('ss')
        }
    }
    render() {
        let { question, correct_answer, incorrect_answers, id } = this.props.data
        let options = [correct_answer, ...incorrect_answers]
        console.log(this.props.data.id +  1 === this.props.length)
        return (
            <>
                {
                    !(this.props.data.id +  1 === this.props.length) ?
                        <div>
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
                        </div> :
                        null
                }
            </>
        )
    }
}

export default Question