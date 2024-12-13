import React from "react";
import tasks from './TaskDataBase.json';
import { useLocation } from "react-router-dom";
export default function TaskDisplay(){
    // const taskDisplay = Task();
    const location = useLocation();
    console.log(location.state);

    return(
        <div className = 'taskContainer'>
            <div className = 'todo'>Today's tasks</div>
            {tasks.map((data, index) => <Task key = {index} data = {data}/>)}
        </div>
        
    )
}


function Task(props){
    const {data} = props;
    return(
        <div className = "task">{data.name}</div>
    )
}
