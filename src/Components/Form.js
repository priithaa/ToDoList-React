    import React from "react";

    const Form = ({inputText, setInputText,todos,setTodos,status,setStatus}) => {
        const inputTextHandler =(e) =>
        {
            setInputText(e.target.value);
        }
        const submitHandler=(e)=>
        {
            e.preventDefault();
            setTodos(
               [
                   ...todos, {text: inputText, completed: false, id: Math.random()*1000}
               ]
            )
            setInputText("");
            
        }
        const filterHandler = (e)=>
        {
            setStatus(e.target.value);
        }
        return ( 
            <div className="ToDoForm">
                <form action="" onSubmit={submitHandler}>
                    <input type="text" className="todo-input" value ={inputText} onChange={inputTextHandler}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={filterHandler} value={status}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="Uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>
            </div>
         );
    }
     
    export default Form;