import React from "react";

export default function TaskDisplay(){
    // const taskDisplay = Task();
    const taskDetails = {name: 'taskName', desc: 'taskDesc'};
    return(
        <div className = 'taskContainer'>
            <div className = 'task'>Today's tasks</div>
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
