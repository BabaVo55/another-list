import React, {useState} from 'react'

export default function TodoInput({addTodos, newTodo, setNewTodo}) {

  return (
    <div>
        <input type="text" placeholder='enter todos here . .. .' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={() =>{ 
            addTodos(newTodo)
        }}>Add</button>
    </div>
  )
}        


    // () => {
    //     const updateTodo = [newTodo, ...todos];
    //     setTodos(updateTodo)
    // }



