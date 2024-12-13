import React, { useState } from "react";
import tasks from './TaskDataBase.json';
import { data, useLocation } from "react-router-dom";
let database = [
    { "_id" : 0, "category" : "work", "name" : "Work on joe", "description" : "Dante", "progress" : 1, "deadline" : 5, "size" : 10, "priority" : null, "completed" : false},
    { "_id" : 1, "category" : "work", "name" : "Work on moe", "description" : "Dante", "progress" : 1, "deadline" : 5, "size" : 10, "priority" : null, "completed" : false}
    ];

export default function TaskDisplay(){
    // const taskDisplay = Task();
    let location = useLocation();
    console.log(location.state);
    if (location.state != null){
        if (!database.includes(location.state)){
            database.push(location.state);
        }
        console.log(database)
    }
    return(
        <div className = 'taskContainer'>
            <div className = 'todo'>Today's tasks</div>
            {database.map((data, index) => <Task key = {index} data = {data}/>)}
        </div>
        
    )
}


function Task(props){
    if (props == null){
        return;
    }
    const {data} = props;
    return(
        <div className = "task">{data.name}</div>
    )
}
