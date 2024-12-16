import { createContext, useState , useContext} from "react";
const TasksContext = createContext(undefined)

// Essentially a global database of tasks. Uses context provider so ALL components can access. 
  
  export const TasksContextProvider= ({
    children
  }) => {
    
    const [tasks, setTasks] = useState([
        { "_id" : 0, "category" : "work", "name" : "Finish project", "description" : "Finish", "progress" : 10, "deadline" : {"day": 18, "month" : 12, "year" : 2024}, "size" : 10, "priority" : null, "completed" : false},
        { "_id" : 1, "category" : "leisure", "name" : "Exercise", "description" : "Help moe", "progress" : 37, "deadline" : null, "size" : 10, "priority" : null, "completed" : false},
        { "_id" : 2, "category" : "home", "name" : "Clean dishes", "description" : "chillax", "progress" : 1, "deadline" : null, "size" : 10, "priority" : null, "completed" : false}
    ]) // Task database
  
    return (
      <TasksContext.Provider value={{ tasks, setTasks }}>
        {children}
      </TasksContext.Provider>
    )
  } // Provider for useTasksContext
  
  export const useTasksContext = () => { // Call useTasksContext to get access to database
    const context = useContext(TasksContext)
    if (!context) {
      throw new Error(
        "useTasksContext must be used within a TasksContextProvider"
      )
    }
    return context
  }