import React, {useState} from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
  const {todos} = props
  return (
    <ul>
        {
            todos.map((todo, i) => {
                return (
                    <TodoCard key={i} {...props} index={i}>
                        <p>{todo}</p>
                    </TodoCard>
                )
                // <li key={i}>
                //     {todo}
                // </li> 
            })
        }
    </ul>
  )
}
