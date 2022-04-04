import {useState} from "react"


function ToDoForm ({addTask}) {
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
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