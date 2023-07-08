"use client";
import React from 'react'
import todoStore, { TodoIface } from './store/todoStore'
import { observer } from 'mobx-react-lite'

const TodoListItems = () => {
  return (
    <div className='text-red-500'>
      {todoStore.todosList.map((todo:TodoIface)=>(
        <div key={todo.id}>
          <input value={todo.text}/>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

const TodoListObserver = observer(TodoListItems)

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoListObserver/>
    </div>
  )
}

export default TodoList