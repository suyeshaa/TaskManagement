"use client";
import { makeAutoObservable } from "mobx";

export interface TodoIface{
  id:number;
  text:string;
  isCompleted:boolean;
}
class TodoStore {
  // implementing mobx here
  todosList:TodoIface[]=[];
  todo:TodoIface=this.resetTodoData();

  resetTodoData(){
    return {
      id:Math.max(0,Math.max(...this.todosList.map(({id})=>id)))+1,
      text:"",
      isCompleted:false,
    }
  }
  constructor(){
    makeAutoObservable(this)
  }

  addTodo(){
    console.log(`mytodo ${this.todo.text}`)
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData()
  }

}


const todoStore = new TodoStore();
export default todoStore;