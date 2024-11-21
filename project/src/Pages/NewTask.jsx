import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 
    return (
        <div>
            <Datepicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    ); 
}

function createTask(name, description, progression, deadline){
    this.name = name;
    this.desc = description;
    this.prog = progression;
    this.deadline = deadline;
}