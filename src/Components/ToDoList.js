import React from "react";
import Todo from "./Todo";

const ToDoList = ({todo, setTodos}) => {
   
    return (
         <div className="todo-container">
             <ul className="todo-list">
                {
                    todo.map((to)=>(
                        <Todo text={to.text} id={to.id} todo={todo} setTodos={setTodos} to={to}></Todo>
                    ))
                }
             </ul>
         </div>
      );
}
 
export default ToDoList;