import React from 'react';

  class Hello extends React.Component{
    
    render(){
      return(
        <div>
        <button onClick={this.props.UpdateDataProps}>Click</button>
        <h2>{this.props.data}</h2>
        </div>
      );
    }
  }

export default Hello;
