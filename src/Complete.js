import React, { Component } from 'react';
import './App.css';



class Complete extends Component {

  state = {
    taskCompleted:'false'
  }
 
  complete = () => {
    if (this.state.taskCompleted === 'false'){
      this.setState({taskCompleted: 'compeleted'})
 
    } else  {
      this.setState({taskCompleted: 'false'})
    }
  }

  render() {
    return (
   
      
        <li onClick={this.complete} 
      className={this.state.taskCompleted}> 
      <div>
      {this.props.list} 
      </div>
     
      <h3>click on item when you done</h3>
      </li>

    
    );
  }
}

export default Complete;