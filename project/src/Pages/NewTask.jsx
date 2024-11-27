import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import TaskObject from "../TaskObject";

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 
    return (
        <div>
            <Datepicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    ); 
}

function createTask(name, description, progression, deadline){
    let myTask = new TaskObject(name, description, progression,deadline);
    return myTask;
}