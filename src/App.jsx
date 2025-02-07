import { useState } from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput'
function App() {
  const [todos, setTodos] = useState(['hello', 'weo'])
  const [newTodo, setNewTodo] = useState('')


  function addTodos(add){
    const updateTodos = [add, ...todos];
    setTodos(updateTodos)
  }

  function handleDeleteTodos(index){
    const updatesTodos = todos.filter((todo, i) => {
      return i !== index
    })
    setTodos(updatesTodos)
  }
  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addTodos={addTodos}/>
      <TodoList todos={todos} setTodos={setTodos} handleDeleteTodos={handleDeleteTodos} />
    </>
  )
}

export default App
