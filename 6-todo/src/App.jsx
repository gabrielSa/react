import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';



function App() {
  const [todos, setTodos] = useState(todoInitArray);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = ("Asc");

  const addTodo = (text, category) => {
    const newTodo =
    {
      id: Math.floor(Math.random() * 10000),
      text: text,
      category: category,
      isCompleted: false,
    }

    const newTodos = [
      ...todos,
      newTodo
    ];
    console.log(newTodo.id);
    console.log(typeof newTodo.id)
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className='todo-list'>
        {todos
          .filter((todo) => filter === "All" ? true : filter ==="Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())).map((todoElem) => (
              <Todo key={todoElem.id} todo={todoElem} removeTodo={removeTodo} completeTodo={completeTodo} />
            ))}
      </div>
      <div>
        <TodoForm addTodo={addTodo} />
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