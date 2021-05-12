import './App.css';
import React,{useState,useEffect} from 'react';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';
function App() {
  
  // State Variables
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  // useEffect
  useEffect(()=>{
    getLocalTodos();
  },[])
   useEffect(()=>
   {
     filterHandler();
     saveLocalTodos();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[todos, status])

  // Functions

  const filterHandler = () =>
  {
    switch(status)
    {
      case 'completed': setfilteredTodos(todos.filter(item=> item.completed===true));
                        break;
      case 'Uncompleted':setfilteredTodos(todos.filter(item=> item.completed!==true));
                        break;
      default: setfilteredTodos(todos);
    }
  }

  const saveLocalTodos =()=>
  {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () =>
  {
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Pritha's To-Do List.
          </h1>
      </header>
      <Form inputText={inputText}
      setInputText={setInputText}
      todos = {todos}
      setTodos = {setTodos}
      status={status}
      setStatus ={setStatus}
      filterHandler={filterHandler}
      >
      </Form>
      <ToDoList todo={filteredTodos} setTodos={setTodos}></ToDoList>
    </div>
  );
}

export default App;
