import React, {Component} from 'react';

class SecondComponent extends Component {
    constructor(){
        super();
        this.state = {
            title: 'App title from 2nd Comp',
            power: 9
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    clickHandler(){
        this.setState({
            title: 'App title changed'
        })
    }
    changeHandler(evt){
        this.setState({
            power: evt.target.value
        })
    }
    render(){
        return (<>
            <h1>{this.state.title} | {this.state.power}</h1>
            {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
            {/* <button onClick={() => this.clickHandler()}>Click Here</button> */}
            <input value={this.state.power} onChange={this.changeHandler} type="range" max="10" min="0"></input>
            <button onClick={this.clickHandler}>Click Here</button>
        </>)
    }
}
export default SecondComponent;