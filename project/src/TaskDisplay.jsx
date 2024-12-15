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

let database = [
    { "_id" : 0, "category" : "work", "name" : "Finish project", "description" : "I gotta help joe", "progress" : 10, "deadline" : {day: 0, month : 0, year : 0}, "size" : 10, "priority" : null, "completed" : false},
    { "_id" : 1, "category" : "leisure", "name" : "Exercise", "description" : "Help moe", "progress" : 37, "deadline" : {day: 0, month : 0, year : 0}, "size" : 10, "priority" : null, "completed" : false},
    { "_id" : 2, "category" : "home", "name" : "Clean dishes", "description" : "chillax", "progress" : 1, "deadline" : {day: 0, month : 0, year : 0}, "size" : 10, "priority" : null, "completed" : false}
    ];

export default function TaskDisplay({detailed}){
    // när ett task är completed: 
    //updateMooDeng(database[0].completed, database[1].completed, database[2].completed); 

    // const taskDisplay = Task();
    let location = useLocation();
    console.log(location.state);
    if (location.state != null){
        if (!database.includes(location.state)){
             database.push(location.state);
        }
        console.log(database)
    }
    let test3 = database.slice(0,3);
    let check = detailed;
    return(
        <div className = 'taskContainer'>
            {detailed ?
            <div className = 'todo'><p>Current Tasks:</p>{database.map((data, index) => <Task key = {index} data = {data} detailed = {true}/>)}</div>
            :<div className = 'todo'><p className="today">Todays tasks</p>{test3.filter((p) => p.completed === false).map((data, index) => <Task key = {index} data = {data} detailed = {false}/>)}</div>}
        </div>
        
    )
}


function Task({data, detailed}){
    if (data == null){
        return;
    }
    let [toggle, setToggle] = useState(true);
    let [sliderValue, setValue] = useState(data.progress);
    function toggleEdit(){
        setToggle((prevState) => !prevState);
    }
    function handleSlider(){
        //console.log("Slider value : ", sliderValue);
        setToggle((prevState) => !prevState);
        data.progress = sliderValue;
        data.completed = true;
        console.log(database[0]);
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
            {detailed ? <div><p>Deadline: {}</p></div>: null}
        </div>
    )
}
