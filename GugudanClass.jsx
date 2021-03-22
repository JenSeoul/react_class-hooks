const React = require('react');
const {Component} = React;

class GugudanClass extends Component {
    state = {
        first: Math.ceil(Math.random()*9),
        second: Math.ceil(Math.random()*9),
        result: '',
        answer: '',
        value: ''
    }
    onChange = (e) =>{
        this.setState({value: e.target.value})
    }
    onSubmitEvent = (e) => {
        e.preventDefault();
        if(this.state.first*this.state.second === parseInt(this.state.value)){
            this.setState((prevState) =>{
                return {
                    result: `Correct: ${prevState.value}`,
                    first: Math.ceil(Math.random()*9),
                    second: Math.ceil(Math.random()*9),
                    value: '',
                }
            });
            this.input.focus();
        }
        else{
            this.setState({
                result:'Incorrect!',
                value: '',
            });
            this.input.focus();
        }
    }
    onRefInput = (c) => {
        this.input =c;
    }
    render() {
        return (
            <>
            <div>{this.state.first} multiply {this.state.second}?</div>
            <form onSubmit={this.onSubmitEvent}>
              <input href={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange} />
              <button>Submit Answer</button>
              </form>
             <div>{this.state.result}</div>
            </>
        )
    }

}

module.exports = GugudanClass;