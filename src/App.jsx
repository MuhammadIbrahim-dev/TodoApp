
import { useState } from "react";
import "./App.css";

function App() {
  //-------------------------Add_todo_usestate----------------------------------
  const [addtodo,setAddtodo]=useState('')
  //------------------------Todo_App_item---------------------------------------
const [todo,setTodo]=useState([

])
// --------------------------Add Todo Function----------------------- 
const addTodohandle =()=>{
  //------------------------Empty_input_stop_add---------------------
  if(addtodo !== ''){
      const newTodo = {
    id: todo.length + 1,
    text: addtodo,
  }
  //------------------combine_new_and_old_data------------------------
  setTodo([...todo,newTodo]);
  //------------------after_add_todo_input_empty-----------------------
setAddtodo('')
}else{
  alert('Please Enter name')
}
  }
//-------------------Delete_Todo_function----------------------------
const DeleteTodo =(id)=>{
setTodo(todo.filter((v)=>v.id !== id));
};
//----------------Edit_Todo_funcion------------------------------------

  return (
    <>
    
    <div className="w-full h-[100vh] flex align-center items-center justify-center">
      <div className="border p-10 text-center">
        <h1 className="text-3xl font-bold ">Todo List</h1>
        <div>
          <input type="text" value={addtodo} onChange={(e)=>setAddtodo(e.target.value)} placeholder="Enter Your Name"  className="outline-none w-80"/>
          <button className="py-1 px-3 bg-[#0af034]" onClick={addTodohandle}>Add</button>
        </div>
        <ul className="mt-3">
          {todo.map((v,index)=>{
            return(
             <li className="mt-5" key={index}>
            <div className="flex justify-between ">
              <h1 className="py-1 text-lg">{v.text}</h1>
              <div className="gap-1 flex">
                <button className="py-1 px-3 bg-[#d1ce24]">Edit</button><button className="py-1 px-3 bg-[#f00a0a]" onClick={()=>DeleteTodo(v.id)}>Delete</button>
              </div>
            </div>
          </li>)
          })}
         
        </ul>
      </div>
    </div>
    </>
  );
}

export default App;
