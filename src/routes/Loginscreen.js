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

 totest(){
  
  const data = JSON.parse(localStorage.getItem('items'));
 if(data!=null){

var text = [];
  return data.map((item, index) => (
    <li className="indent" key={index}>
        {item}
    </li>
));
  } 
 
 }
  /*
  todoshow(event){
    
   // alert('dgfdd');

    const ul = document.querySelector('ul');
    // event.preventDefault();
  // const gl = this.getElementbyId("justtest");

const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const data = JSON.parse(localStorage.getItem('items'));
 
   
   var text = JSON.stringify(data);
   // alert(text);
   var test = text.split(",");
   // alert(test[1]);

  var t=0;
  while(t<20){
  const pi = document.createElement('pi');
  pi.textContent=test[t];
   alert(pi.textContent);
  //ul.append(pi);
  t=t+1; 
  }

  }
*/
  // addtodo(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  // constructor()
  // {
  //   super();
  //   if(localStorage.getItem("loggedin") != '1')
  //   {
  //     this.props.history.push('/Loginpage');
  //   }
  // }

  addtodo(event)
  {
    
    event.preventDefault();
const ul = document.querySelector('ul');
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




    // localStorage.SetItem("item","this.state.item");

    // alert(localStorage.getItem("item"));
    // var list = this.getElementbyId('mylist');

    // list.append('<li>Match</li>');
  }

  

render() {
    return (
      <body /*onload={this.todoshow()}*/>

      

      <div className="Todo">

      
        <form onSubmit={this.addtodo}>
       
          <label>Add To Do </label>
          
         <input id="item" type="text" value={this.state.value} onChange={this.handleChange} />


          <input type="submit" value="Add" />
        </form>

        <div>
        <h2>To Do List</h2>
        <ul>
        {this.totest()}
       </ul>
        </div>

        
      </div>
      
      </body>
    
    );
  }
}

export default Loginscreen;
