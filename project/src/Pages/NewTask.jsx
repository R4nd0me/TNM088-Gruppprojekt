import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import TaskObject from "../TaskObject";
import Slider from '@mui/material/Slider';
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 

    const [visibility, setVisibility] = useState(false);

    function toggleVisibility(){
        setVisibility(true);
    }
    /*
    return (
        <div>
            <Datepicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    ); 
    */
   return (
    <ChooseDeadline visibility={visibility} toggleVisibility={toggleVisibility}></ChooseDeadline>
   )
}
function valuetext(value) {
    return `${value}°C`;
  }
function DescribeTask(){

}

const buttons = [
  <Button key="Work" color = 'success'>Work</Button>,
  <Button key="Home">Home</Button>,
  <Button key="Leisure" color = '#4caf50'>Leisure</Button>,
];

function ChooseDeadline({ visibility, toggleVisibility }) {
    return (
        <div className="category">
            {!visibility && (
                <>
                    <p>Choose a category</p>
                    <ButtonGroup orientation="vertical" variant="contained">
                        {buttons.map((button, index) => (
                            <Button key={index} onClick={toggleVisibility}>
                                {button.props.children}
                            </Button>
                        ))}
                    </ButtonGroup>
                </>
            )}
            {visibility && <TaskCreator />}
        </div>
    );
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