import './App.css';
import { useState } from 'react';

function App() {
  //
  const [taskInput,updateTaskInput] = useState("");
  //
  const [todoList,updatetodoList]   = useState([]);
  //
  const addTodo = ()=>{
    
    todoList.push({description: taskInput,isComplet:false});
    
    updatetodoList(todoList);
    
    updateTaskInput("");
  }
  //
  const ListItem= (props)=>{
    return (
    <div className='list-item row jc-space-between'>
      <span className={props.itemData.isComplet ? "tast-complete":""} onClick={props.isComplet(props.index)}>{props.itemData.description}</span>
      <input type="button" value="DEL"  className='input-del' onClick={()=>props.deleteTodo(props.index)} />
    </div>
    );
  }

  const deleteTodo = (index)=>{
     const newTodo= todoList.filter((item,i)=>i != index);
      updatetodoList(newTodo);
  }

  const CompleteTodo = (index)=>{
    const complete= [...todoList];
    complete[index].isComplet = !complete[index].isComplet;
    //updatetodoList(complete)


 }

  return (
    <div className="app-background">
     <p className="heading-text">
      React To Do List
     </p>
     <div className="task-container">
       <div>
         <input className="text-input" value={taskInput} onChange={(e)=>{updateTaskInput(e.target.value)}} />
         <button className="add-button" onClick={addTodo}>ADD</button>
       </div>
       
       { todoList.length ? todoList.map((toDoObject,index)=><ListItem index={index} itemData={toDoObject}  deleteTodo={deleteTodo} isComplet={CompleteTodo} />): <p className="">No Task Added !</p>}
     </div>
      <p className="footer-text">The Morocco Dev</p>
    </div>
  );
}

export default App;
