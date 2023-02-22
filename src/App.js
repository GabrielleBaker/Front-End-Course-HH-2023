import './App.css';
import React,{useState} from 'react';
import Todotable from './components/Todolist';

function App() {
  const[todo, setTodo]= useState({desc: '',date: ''});
  const[todos, setTodos]= useState([]);

  const inputChanged=(event)=>{
    event.preventDefault();
    setTodo({...todo,[event.target.name]: event.target.value});
}
  const addTodo = (event) =>{
    event.preventDefault();
    setTodos([...todos,todo]);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Simple Todo List</h1>
      <h2>Gabrielle Baker</h2>
      </header>
     
      <form onSubmit={addTodo} class="form">
      <label>Add todo:</label>
      <br></br>
        <label>Description: </label>
        <input type="date" name="date" value={todo.date} onChange={inputChanged}/>

        <label>Date: </label>
        <input type="text" name ="desc" value={todo.desc} onChange={inputChanged}/>
        <input type="submit" value="Add"/>
      </form>
      <Todotable todos={todos} />
  
    </div>
  );
}

export default App;
