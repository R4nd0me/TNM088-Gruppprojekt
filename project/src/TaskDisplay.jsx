import React, { useState } from "react";
import tasks from './TaskDataBase.json';
import { data, useLocation } from "react-router-dom";
// import { updateMooDeng } from "./MooDengState";
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';    
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { IconButton, Slider } from "@mui/material";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTasksContext } from "./context/DatabaseContext";

export default function TaskDisplay({detailed}){
    // när ett task är completed: 
    //updateMooDeng(tasks[0].completed, tasks[1].completed, tasks[2].completed); 

    // const taskDisplay = Task();
    const {tasks, setTasks} = useTasksContext();

    console.log(setTasks);
    let location = useLocation();
    console.log(location.state);
    if (location.state != null){
        if (!tasks.includes(location.state)){
             tasks.push(location.state);
        }
        console.log(tasks)
    }
    let test3 = tasks.slice(0,3);
    let check = detailed;
    return(
        <div className = 'taskContainer'>
            {detailed ?
            <div className = 'todo'><p>Current Tasks:</p>{tasks.map((data, index) => <Task key = {index} data = {data} detailed = {true}/>)}</div>
            :<div className = 'todo'><p className="today">Todays tasks</p>{test3.map((data, index) => <Task key = {index} data = {data} detailed = {false}/>)}</div>}
        </div>
        
    )
}


function Task({data, detailed}){
    if (data == null){
        return;
    }
    let [sliderValue, setValue] = useState(data.progress);
    function handleSlider(){
        //console.log("Slider value : ", sliderValue);
        tasks.progress = sliderValue;
        data.completed = true;
        console.log(tasks[0]);
    }
    /*
                <IconButton aria-label="complete" onClick={toggleEdit}><NoteAltIcon></NoteAltIcon></IconButton>
    */
    return(
        <div className = "task" id = {data.cate}>
            <p>
            {(() => {
                switch(data.category) {
                    case 'home':
                        return(<HouseIcon></HouseIcon>);
                    case 'work':
                        return(<WorkIcon></WorkIcon>);
                    case 'leisure':
                        return(<SelfImprovementIcon></SelfImprovementIcon>);
                }
            })()}
                {data.name}
                <IconButton onClick ={handleSlider}><CheckCircleOutlineIcon></CheckCircleOutlineIcon></IconButton>
            </p>
            {detailed ? <p>Description: {data.description}</p> : null}
            {detailed ? null :<Slider valueLabelDisplay='auto' min = {0} max = {100} step = {1} value={sliderValue}size = "medium" onChange={(_, value) => (setValue(value))}></Slider>}
            {detailed ? <div>{detailed ?<p>Deadline: {data.deadline.day}/{data.deadline.month}/{data.deadline.year}</p> : null}</div>: null}
        </div>
    )
}
