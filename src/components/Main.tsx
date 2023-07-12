import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import todoStore from './store/todoStore'
import EditTodo from './EditTodo'

const Main = () => {
  return (
    <div>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default Main