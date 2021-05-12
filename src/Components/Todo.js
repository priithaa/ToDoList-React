import React from "react";

const Todo = ({text,id,todo,setTodos,to}) => {
     const deleteHandler = ()=>
    {
        setTodos(todo.filter((el)=>el.id!==id));
    }
    const completeHandler = () =>
    {
       setTodos(todo.map((item)=>{
           if(item.id===id)
           return{
               ...item, completed: !item.completed
           }
           return item;
       }))
    }
    return ( 
        <div className="todo" key={id}>
            <li className={`todo-item ${to.completed ? "completed": ''} `}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>  
            </button>
            <button onClick={deleteHandler}className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
     );
}
 
export default Todo;