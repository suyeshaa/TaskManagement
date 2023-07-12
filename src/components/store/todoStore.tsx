"use client";
import { makeAutoObservable } from "mobx";

export interface EditWin{
  tobe:boolean
}

export interface TodoIface{
  id:number;
  text:string;
  isCompleted:boolean;
  toEdit:boolean;
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
      toEdit:false
    }
  }
  constructor(){
    makeAutoObservable(this)
  }

  addTodo(){
    // console.log(`mytodo ${this.todo.text}`)
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData()
  }


  edited(ide:number){
    this.todosList.filter((todo)=>todo.id===ide ? todo.toEdit==true : todo.toEdit==false)
  }

  showEdit(){
    // this.todosList.filter((todo)=>todo.toEdit===true? )
  }

  deleteTodo=(id:number)=>{
    this.todosList=this.todosList.filter((todo)=>todo.id!=id)

  }

  editTodo=(id:number)=>{
    console.log(`mytodo ${this.todo.text}`)
    this.todosList.map(todo=>todo.id===id ? (todo.text  = this.todo.text) : (todo))
  }

}


const todoStore = new TodoStore();
export default todoStore;