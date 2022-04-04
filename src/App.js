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
      <ToDoForm />
      {todos.map((todo) => {
        <ToDo key={todo.id} />
      })}
    </div>
  );
}

export default App;
