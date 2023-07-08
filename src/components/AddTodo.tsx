"use client"
import React from 'react'
import todoStore from './store/todoStore'
import { observer } from 'mobx-react-lite'

const AddTodo = () => {
  const clickHandler=()=>{
    todoStore.addTodo()
  }
  return (
    <div className='text-black'>
      <input placeholder='new todo' onChange={(e)=>(todoStore.todo.text=e.target.value)} value={todoStore.todo.text}/>
      <button className='text-white' onClick={clickHandler}>add todo</button>
    </div>
  )
}

export default observer(AddTodo)