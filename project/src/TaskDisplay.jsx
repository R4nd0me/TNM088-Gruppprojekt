import React from "react";
import TaskObject from './TaskObject.jsx'
import tasks from './TaskDataBase.json';

export default function TaskDisplay(){
    // const taskDisplay = Task();
    return(
        <div className = 'taskContainer'>
            <div className = 'todo'>Today's tasks</div>
            {tasks.map((data, index) => <Task key = {index} data = {data}/>)}
        </div>
        
    )
}


function Task(props){
    const {data} = props;
    console.log(data);
    return(
        <div className = "task">{data.name}</div>
    )
}
