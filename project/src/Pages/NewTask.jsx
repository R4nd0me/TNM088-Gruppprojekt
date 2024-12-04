import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import TaskObject from "../TaskObject";
import Slider from '@mui/material/Slider';

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
function valuetext(value) {
    return `${value}°C`;
  }

function ChooseCategory(){
    return(
        <></>
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
            <div className = 'sliderContainer'><Slider aria-label="TaskSize" defaultValue={10} getAriaValueText={valuetext} valueLabelDisplay="auto" shiftStep={30} step={10} marks min={0} max = {100}></Slider></div>
            <p>TaskCategory</p>
            <div className="categoryContainer">
            </div>
        </div>
    )
}

function createTask(name, description, progression, deadline){
    let myTask = new TaskObject(name, description, progression,deadline);
    return myTask;
}