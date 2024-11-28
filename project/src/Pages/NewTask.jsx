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
    <div className = 'taskContainer'>
        <TaskCreator></TaskCreator>
    </div>
   )
}

function TaskCreator(){
    return(
        <div>
            <p>TaskName</p>
            <p>TaskDesc</p>
            <p>TaskDiff</p>
        </div>
    )
}

function createTask(name, description, progression, deadline){
    let myTask = new TaskObject(name, description, progression,deadline);
    return myTask;
}