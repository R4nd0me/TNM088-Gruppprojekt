import React from "react";
import TaskObject from './TaskObject.jsx'

export default function TaskDisplay(){
    // const taskDisplay = Task();
    const taskDetails = new TaskObject("Work","taskName", "taskDesc", "taskProg", "taskDead");
    return(
        <div className = 'taskContainer'>
            <div className = 'todo'>Today's tasks</div>
            <Task data = {taskDetails}></Task>
        </div>
    )
}

function Task(props){
    const {data} = props
    console.log(data);
    return(
        <div className = "task">{data.name}</div>
    )
}
