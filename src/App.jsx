
import { useState } from "react";
import "./App.css";

function App() {
  //-------------------------Add_todo_usestate----------------------------------
  const [addtodo,setAddtodo]=useState('')
  //------------------------Todo_App_item---------------------------------------
const [todo,setTodo]=useState([

])
//-----------------------------edittodo-----------------------------
const [editid,setEditid]=useState(null)
// --------------------------Add Todo Function----------------------- 
const addTodohandle =()=>{
  //------------------------Empty_input_stop_add---------------------
  if(addtodo !== ''){
      if(editid){
    //----------------updata todos-------------------------------
    setTodo(todo.map((item)=> item.id === editid ? {...item, text: addtodo}:item));
    setEditid(null)
    setAddtodo('')
}else{
  const newTodo = {
    id: todo.length + 1,
    text: addtodo,
  }
 

   //------------------combine_new_and_old_data------------------------
   setTodo([...todo,newTodo]);
   setAddtodo('')
  }}else{
    alert('Enter user text')
  } 
}
//-------------------Delete_Todo_function----------------------------
const DeleteTodo =(id)=>{
setTodo(todo.filter((v)=>v.id !== id));
};
//----------------Edit_Todo_funcion------------------------------------
const EditTodo=(id)=>{
  const todoEdit = todo.find((item)=> item.id === id);
  setAddtodo(todoEdit.text);
  setEditid(id);
}
  return (
    <>
    
    <div className="w-full h-[100vh] flex align-center items-center justify-center">
      <div className="border p-10 text-center">
        <h1 className="text-3xl font-bold ">Todo List</h1>
        <div>
          <input type="text" value={addtodo} onChange={(e)=>setAddtodo(e.target.value)} placeholder="Enter Your Name"  className="outline-none sm:w-80"/>
          <button className="py-1 px-3 bg-[#0af034]" onClick={addTodohandle}>{editid ? 'Updata' : 'add'}</button>
        </div>
        <ul className="mt-3">
          {todo.map((v,index)=>{
            return(
             <li className="mt-5" key={index}>
            <div className="flex justify-between ">
              <h1 className="py-1 text-lg">{v.text}</h1>
              <div className="gap-1 flex">
                <button className="py-1 px-3 bg-[#d1ce24]"onClick={()=>EditTodo(v.id)}>Edit</button><button className="py-1 px-3 bg-[#f00a0a]" onClick={()=>DeleteTodo(v.id)}>Delete</button>
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
