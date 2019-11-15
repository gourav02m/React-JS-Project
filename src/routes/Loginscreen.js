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
  ul.appendChild(li);
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

      <div className="Todo">
        <form onSubmit={this.addtodo}>
       
          <label>Add To Do </label>
          
         <input id="item" type="text" value={this.state.value} onChange={this.handleChange} />


          <button type="submit" >Add</button>
        </form>

        <div>
        <h2>To Do List</h2>
        <ul>
       </ul>
        </div>

        
      </div>
    );
  }
}

export default Loginscreen;
