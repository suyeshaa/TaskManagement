"use client";
import React, { useState } from 'react'
import todoStore, { TodoIface } from './store/todoStore'
import { observer } from 'mobx-react-lite'
import EditTodo from './EditTodo';

const TodoListItems = () => {

  const [showEditScreen, setShowEditScreen] = useState(false)
  const [ide, setide] = useState()

  const clickHander=(ide:any)=>{
    
    // <EditTodo/>
    // console.log(ide)
    todoStore.editTodo(ide)
    setShowEditScreen(true)
    setide(ide)
    console.log("first")
  }
  return (
    <div className='text-red-500'>
      {todoStore.todosList.map((todo:TodoIface)=>(
        <div key={todo.id}>
          <input value={todo.text}/>
          <button onClick={()=>todoStore.deleteTodo(todo.id)}>Delete</button>
          <button onClick={()=>clickHander(todo.id)}>EDIT</button>
          {todo.id===ide && showEditScreen ? <EditTodo ide={ide}/> : <></>}
          
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