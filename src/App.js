import {useState} from "react"
import ToDo from "./components/ToDo"
import ToDoForm from "./components/ToDoForm";


function App() {
  const [todos, setToDos] = useState([])

  const addTask = () => {

  }

  const removeTask = () => {
    
  }

  const handleToggle = () => {
    
  }


  return (
    <div className="App">
      <header>
        <h1>Список Задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        <ToDo 
          key={todo.id} 
          toggleTask={handleToggle} 
          removeTask={removeTask} 
        />
      })}
    </div>
  );
}

export default App;
