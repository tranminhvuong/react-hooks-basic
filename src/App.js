import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'One' },
    { id: 2, title: 'Two' },
    { id: 3, title: 'Three' },
    { id: 4, title: 'Four' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    console.log(index);

    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('form submit', formValues);
    // add new todo to current todo list
    const newTodoList = [...todoList];
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1>React Hooks Todo List</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default App;
