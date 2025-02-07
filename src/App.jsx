import { useState } from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput'
function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')


  function addTodos(add){
    const updateTodos = [add, ...todos];
    setTodos(updateTodos)
    setNewTodo('')
  }

  function handleDeleteTodos(index){
    const updatesTodos = todos.filter((todo, i) => {
      return i !== index
    })
    setTodos(updatesTodos)
  }

  function updateTodos(index){
    const todoToUpdate = todos[index];
    handleDeleteTodos(index);
    setNewTodo(todoToUpdate);
  }
  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos} handleDeleteTodos={handleDeleteTodos} updateTodos={updateTodos} />
    </>
  )
}

export default App




