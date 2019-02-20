import React, { Component } from 'react';
import './App.css';
import Complete from './Complete'
import img from './ToDoList.jpg'


class App extends Component {
  state = {
    input:'',
    list:[]
     
   }
 
   changeItem=(event)=>{
     // get the value that the user typed
     const text = event.target.value;
      // update the state with the new update
     this.setState({
     input: text
    });
   }
 
   addNewItem =(event) =>{
     let newArray = this.state.list;
     // prevent the form refreshing the page
     event.preventDefault()
     // add the new item to the array
     newArray.push(this.state.input);
     // update the state with our new items
     this.setState({
       list:newArray,
       input:''
     })
   }
   
  deleteAllItems=() =>{
    let delArray = this.state.list.splice(0);
    // delete the itemes 
     delArray.splice(this.state.input);
    // update the state with our new items
     this.setState({
       list:delArray
     })
    
  }
  
  render() {
    const list = this.state.list.map((item)=> {
      return <Complete list={item}/>
    })
    return (
    <div>
  
      <figure class="swing">
      <img  src={img} />
      </figure>

      <div>
      <span className="txt1">Every choice you make makes you</span>
      <span className="txt2">JOHN C. MAXWELL</span>
         
      <form onSubmit={this.addNewItem}>
      <label>To Do List</label>
        
       <input 
       onChange={this.changeItem} 
       value={this.state.input}> 
       </input>
       <ul>
       {list}
       </ul>
       
      
       <Complete />
       
       </form>

       
       <button className='btn btn1'
        onClick={this.deleteAllItems}>Delete Items</button>
       </div>
       

       </div>

      
    );
  }

  
  }


export default App;