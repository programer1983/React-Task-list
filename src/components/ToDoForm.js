import {useState} from "react"


function ToDoForm () {
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = () => {

    }

    const handleKeyPress = () => {

    }


    
  return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={userInput} 
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите значения..."
        />
        <button>Сохранить</button>
      </form>
  )
}

export default ToDoForm