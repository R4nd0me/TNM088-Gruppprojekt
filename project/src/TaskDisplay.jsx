import React from "react";

export default function TaskDisplay(){
    // const taskDisplay = Task();
    const taskDetails = new TaskObject("taskName", "taskDesc", "taskProg", "taskDead");
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
function testFunc(a,b){
    const test = a + b;
    return test;
}
class TaskObject{
    constructor(name, description, progression, deadline){
        this.name = name;
        this.description = description;
        this.progression = progression;
        this.deadline = deadline;
        this.priority = testFunc(progression,deadline);
    }
    Update(){

    }
}
