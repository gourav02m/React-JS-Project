import React, { Component } from 'react';

class Loginscreen extends Component {

 constructor() {
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.addtodo = this.addtodo.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  todelete(event){
  const data = JSON.parse(localStorage.getItem('items'));
   var index = event.target.getAttribute('data-key');
   const list = JSON.parse(localStorage.getItem('items'));
   data.splice(index,1);
   this.setState({
    data: list
  });
   localStorage.setItem('items', JSON.stringify(data));

  }

 totest(){
  
  const data = JSON.parse(localStorage.getItem('items'));
 if(data!=null){

var text = [];
  return data.map((item, index) => (
    <li className="indent" key={index}>
        {item}
        <input type="button" onClick={this.todelete.bind(this)} data-key={index} value="delete"/>
    </li>
));
  } 
 
 }
 

  addtodo(event)
  {
    
    event.preventDefault();
const ul = document.querySelector('ol');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.append(li);
}


  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";

  }

  

render() {
    return (
      <body style={{background: "azure"}}>

      

      <div className="Todo">

      
        <form onSubmit={this.addtodo} style={{textAlign: "center"}}>
       
          <h2>Add To Do:-</h2>
          
         <input id="item" type="text" value={this.state.value} onChange={this.handleChange} />


          <input type="submit" value="Add" />
        </form>

        <div><br/>
        <h2>To Do List :-</h2>
        <ol>
        {this.totest()}
       </ol>
        </div>

        
      </div>
      
      </body>
    
    );
  }
}

export default Loginscreen;
