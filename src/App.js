import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos'
import AddTodo from './AddTodo';

class App extends Component {
state = {
  todos: [ 
    {id: 1, content: 'Finish the Project!!!'},
    {id: 2, content: 'Clean the house!'},
    {id: 3, content: 'Click me when you done and i will be deleted!'}
   
  ]
} 


deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  });
  this.setState({
    todos
  });
}
addTodo =(todo) => {
todo.id = Math.random();
let todos = [...this.state.todos, todo];
this.setState({
  todos
})
}
render() {
  return (
    <div className="App">
     <h1>TODO'S</h1>
     <Todos class="list-group list-group-numbered" todos={this.state.todos} deleteTodo={this.deleteTodo} />
    <AddTodo addTodo={this.addTodo}/>
    </div>
  );
}
}
export default App;
