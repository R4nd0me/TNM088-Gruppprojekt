import { createContext, useState , useContext} from "react";
const TasksContext = createContext(undefined)

// Essentially a global database of tasks. Uses context provider so ALL components can access. 
  
  export const TasksContextProvider= ({
    children
  }) => {
    
    const [tasks, setTasks] = useState([
        { _id : 0, category : "work", name : "Finish project", description : "Finish", progress : 10, deadline : {"day": 18, "month" : 12, "year" : 2024}, size : "Large", priority : null, completed : false},
        { _id : 1, category : "home", name : "Clean dishes", description : "Clean dirty dishes", progress : 1, deadline : null, size : "Medium", priority : null, completed : false},
        { _id : 2, category : "leisure", name : "Exercise", description : "Do yoga", progress : 37, deadline : null, size : "Small", priority : null, completed : false},
        { _id : 3, category : "leisure", name : "Cykel", description : "Cykel", progress : 1, deadline : null, size : "Large", priority : null, completed : false},
        { _id : 4, category : "home", name : "Fixa lampan", description : "lampan bör fixas", progress : 1, deadline : null, size : "Medium", priority : null, completed : false},
        { _id : 5, category : "work", name : "Ta hem barn", description : "Simon fixar", progress : 1, deadline : null, size : "Small", priority : null, completed : false}
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