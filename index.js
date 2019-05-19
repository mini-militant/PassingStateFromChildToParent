import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(){
      super();
      this.state={
        data:"Initial data..",
        
      }
      this.updateState=this.updateState.bind(this);
    }
    updateState(){
      
      this.setState(function(prevState)
      {
        return{
        data:"data updated from child component..", 
        }
      })
    }

  render() {
    return (
      <div>
      <Hello data={this.state.data}
        UpdateDataProps={this.updateState} />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
