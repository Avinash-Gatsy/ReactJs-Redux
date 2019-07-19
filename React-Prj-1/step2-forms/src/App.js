import React, {Component} from 'react';

class MainApp extends Component{
  constructor(){
    super()
    this.state = {
      username: '',
      userage: 18
    }
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(evt){
    evt.preventDefault();
  }
  render(){
    return (
      <div>
        <h1>Working</h1>
        <br/>
        <form onSubmit={this.submitHandler} action="#">

        </form>
      </div>
      
    );
  }
}

export default MainApp;
