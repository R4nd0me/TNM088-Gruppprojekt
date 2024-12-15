import React, { useState } from "react";
import tasks from './TaskDataBase.json';
import { data, useLocation } from "react-router-dom";
import { updateMooDeng } from "./MooDengState";
import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';    
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { Slider } from "@mui/material";

let database = [
    { "_id" : 0, "category" : "work", "name" : "Work on joe", "description" : "I gotta help joe", "progress" : 10, "deadline" : 5, "size" : 10, "priority" : null, "completed" : false},
    { "_id" : 1, "category" : "leisure", "name" : "Work on moe", "description" : "Help moe", "progress" : 1, "deadline" : 5, "size" : 10, "priority" : null, "completed" : false},
    { "_id" : 2, "category" : "home", "name" : "Work on poe", "description" : "chillax", "progress" : 1, "deadline" : 5, "size" : 10, "priority" : null, "completed" : false}
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
    console.log(detailed)
    return(
        <div className = 'taskContainer'>
            {detailed ?
            <div className = 'todo'>Current Tasks:{database.map((data, index) => <Task key = {index} data = {data} detailed = {true}/>)}</div>
            :<div className = 'todo'>Today's tasks{test3.map((data, index) => <Task key = {index} data = {data} detailed = {false}/>)}</div>}
        </div>
        
    )
}


function Task({data, detailed}){
    if (data == null){
        return;
    }
    console.log(detailed); 
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
            </p>

            {detailed ? <p>Description: {data.description}</p> : console.log("TASK NOT FOUND")}
            <Slider disabled defaultValue={data.progress} size = "medium"></Slider>
        </div>
    )
}
