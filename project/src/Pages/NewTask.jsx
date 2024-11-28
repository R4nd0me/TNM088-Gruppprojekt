import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import TaskObject from "../TaskObject";

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 
    /*
    return (
        <div>
            <Datepicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    ); 
    */
   return (
    <TaskCreator></TaskCreator>
   )
}

function TaskCreator(){
    return(
        <div className="taskContainer">
            <p>TaskName</p>
            <input type = "text" placeholder=" name..." onChange={e => console.log(e.currentTarget.value)}></input>
            <p>TaskDesc</p>
            <input type = "text" placeholder=" description..." onChange={e => console.log(e.currentTarget.value)}></input>
            <p>TaskDiff</p>
        </div>
    )
}

function createTask(name, description, progression, deadline){
    let myTask = new TaskObject(name, description, progression,deadline);
    return myTask;
}