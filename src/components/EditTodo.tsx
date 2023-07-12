"use client"
import React, { useState } from 'react'
import todoStore from './store/todoStore'
import { observer } from 'mobx-react-lite'

const EditTodo = ({ide}) => {
  
  const clickHandler=()=>{
    // todoStore.editTodo(key)
    todoStore.editTodo(ide)
    console.log("from edit")
  }
  return (
    <div className='text-black'>
      <input placeholder='edit todo' onChange={(e)=>(todoStore.todo.text=e.target.value)} value={todoStore.todo.text}/>
      <button className='text-white' onClick={clickHandler}>SAVE</button>
      
    </div>
  )
}

export default observer(EditTodo)