import React, {  Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos : [],
    todo : '',
  }

  onClickHandler = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.todo);
    this.setState({
      todos: todosCopy,
      todo:'',
    })
    //console.log(this.state.todos)
  }

  onChangeHandler = (e) => {
    //e.preventDefault();
    //const userTodo = e.target.value
    this.setState({
      todo: e.target.value,
    });
    //console.log(this.state.todo)
  }

  onRemoveHandler = (i) => {
    let todosAfterRemove = this.state.todos.slice();
    todosAfterRemove.splice(i, 1) 
    this.setState({
      todos: todosAfterRemove,
    })
  } 
  render() {
    let todoList = this.state.todos.map((li, i) => {
        return <li key={i}>{li}<button type="button" onClick={this.onRemoveHandler}>Remove</button></li>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1> Todo </h1>
        </header>
        <input type="text" placeholder="Todo" value={this.state.todo} onChange={this.onChangeHandler}/>
        <br/>
        <button type="button" name="button" onClick={this.onClickHandler}>Add </button> 
        {this.state.todos.length === 0 ? <p>Not Added</p> :  <ul>{todoList} </ul>}
      </div>
    );
  }
}

export default App;
