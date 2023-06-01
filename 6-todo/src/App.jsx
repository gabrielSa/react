import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';



function App() {
  const [todos, setTodos] = useState(todoInitArray);

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todoElem) => (
          <Todo key={todoElem.id} todo={todoElem} />          
        ))}
      </div>
      <div>
      <TodoForm/>
      </div>
      
    </div>
  );
}

export default App;



const todoInitArray = [
  {
    id: 1,
    text: "Mudar o sistema",
    category: "Trabalho",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Ir para a academia",
    category: "Pessoal",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Estudar React",
    category: "Estudos",
    isCompleted: false,
  },
]; 