import {useState} from "react"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm";


function App() {
  const [todos, setToDos] = useState([])

  const addTask = (userInput) => {
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        completesetToDos: false,
      }
      setToDos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setToDos([...todos.filter((todo) => todo.id !== id )])
  }

  const handleToggle = (id) => {
    setToDos([
      ...todos.map((todo) => 
          todo.id === id ? {...todo, complete: !todo.complete} : {todo}
      )])
  }


  return (
    <div className="App">
      <header>
        <h1>Список Задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
        <ToDo
          key={todo.id} 
          todo={todo}
          toggleTask={handleToggle} 
          removeTask={removeTask} 
        />
        )
      })}
    </div>
  );
}

export default App;
