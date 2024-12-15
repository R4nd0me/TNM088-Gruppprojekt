import { createContext, useState , useContext} from "react";
const TasksContext = createContext(undefined)
  
  export const TasksContextProvider= ({
    children
  }) => {
    const [tasks, setTasks] = useState([
        { "_id" : 0, "category" : "work", "name" : "Finish project", "description" : "Finish TNM040 Project!", "progress" : 10, "deadline" : {day: 18, month : 12, year: 2024}, "size" : 10, "priority" : null, "completed" : false},
        { "_id" : 1, "category" : "home", "name" : "Clean dishes", "description" : "Clean dirty dishes", "progress" : 1, "deadline" : null, "size" : 10, "priority" : null, "completed" : false},
        { "_id" : 2, "category" : "leisure", "name" : "Exercise", "description" : "Do some yoga", "progress" : 37, "deadline" : null, "size" : 10, "priority" : null, "completed" : false}
        
    ])
  
    return (
      <TasksContext.Provider value={{ tasks, setTasks }}>
        {children}
      </TasksContext.Provider>
    )
  }
  
  export const useTasksContext = () => {
    const context = useContext(TasksContext)
    console.log(context)
    if (!context) {
      throw new Error(
        "useTasksContext must be used within a TasksContextProvider"
      )
    }
    return context
  }