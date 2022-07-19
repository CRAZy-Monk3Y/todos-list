import React from 'react'
import { Todo } from './Todo'


export const Todos = (props) => {
  return (
    <div className='container my-3'>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          return (<Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />)
        })
      }
    </div>
  )
}
