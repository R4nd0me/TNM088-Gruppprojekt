import React, { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
// import { updateMooDeng } from "./MooDengState";
import HouseIcon from "@mui/icons-material/House";
import WorkIcon from "@mui/icons-material/Work";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { IconButton, Slider } from "@mui/material";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useTasksContext } from "./context/DatabaseContext";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function TaskDisplay({ detailed }) {
  // när ett task är completed:
  //updateMooDeng(tasks[0].completed, tasks[1].completed, tasks[2].completed);

  // const taskDisplay = Task();
  let { tasks , setTasks} = useTasksContext(); // Access taskdatabase

  let location = useLocation(); // useLocation
  console.log(location.state);
  if (location.state != null) {
    // Check if new task has been created. Push to task database if a new task is created
    if (location.state && !tasks.some(task => task._id === location.state._id)) {
      setTasks(prevTasks => [...prevTasks, location.state]);
    }
    console.log(tasks);
  }
  let test3 = tasks.slice(0,3) // Display first 3
  const sizeOrder = { Small: 1, Medium: 2, Large: 3 };

  const sortedTasks = [...tasks].sort((a, b) => {
      return sizeOrder[b.size] - sizeOrder[a.size];
  });

  const todayTask = tasks.filter((task) => task.completed == false).sort((a,b) => sizeOrder[b.size] - sizeOrder[a.size]).slice(0,3);

  // const largestTasksPerCategory = Object.values(
  //   todayTask.reduce((acc, task) => {
  //     const category = task.category;
  
  //     // If this category is not yet added or this task has a larger size
  //     if (!acc[category] || sizeOrder[task.size] > sizeOrder[acc[category].size]) {
  //       acc[category] = task;
  //     }
  //     return acc;
  //   }, {})
  // );
  return (
    <div className="taskContainer">
      {detailed ? <p className="todoTitle">Current Tasks:</p> : <p className="todoTitle">Todays tasks</p>}
      {detailed ? (
        <div className="todo">
          {sortedTasks.map((data, index) => (
            <Task key={index} data={data} detailed={true} />
          ))}
        </div>
      ) : (
        <div className="todo">
          {todayTask.map((data, index) => (
            <Task key={index} data={data} detailed={false} />
          ))}
        </div>
      )}
    </div>
  );
}

// line 29: Check if displayed tasks are meant to be detailed. Home page should only render task name and task progression
// line 37: Display tasks that are meant to show more info such as description, deadline, etc. 


function Task({ data, detailed }) { // Task component
  if (data == null) { // Check if data exists
    return;
  }

  let [sliderValue, setValue] = useState(data.progress);
  let { setTasks } = useTasksContext();
  let [enable, toggleEnable] = useState(false);
  // useStates and database access

  useEffect(() => { // synch components
    toggleEnable(data.completed);
  }, [data.completed]);
  useEffect(() => {
    if (data.completed == true && detailed == false) {
      toggleEnable(data.completed);
    }
  }, [data.completed, detailed]); // Only runs when `data.completed` changes
  function handleSlider() {
    //console.log("Slider value : ", sliderValue);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === data._id
          ? { ...task, progress: sliderValue, completed: true }
          : task
      )
    );
    toggleEnable((prevState) => (!prevState));
  }
  /*
                <IconButton aria-label="complete" onClick={toggleEdit}><NoteAltIcon></NoteAltIcon></IconButton>
    */
  console.log(data.completed)

  function handleDelete(){
    console.log("Delete clicked");
  }
  return (
    <div className="task" id={data.category}>
      <div className="taskTitle">
        {(() => {
          switch (data.category) {
            case "home":
              return <HouseIcon sx={{ color: "#4200ff" }}></HouseIcon>;
            case "work":
              return <WorkIcon sx={{ color: "#05a5ffa6" }}></WorkIcon>;
            case "leisure":
              return <SelfImprovementIcon sx={{ color: "#bd00ff" }}></SelfImprovementIcon>;
          }
        })()}
        {data.name}
        <div className="checkMark">
          <IconButton className="checkMarkButton" onClick={handleSlider}>
            <CheckCircle className="checkMarkButtonIcon"></CheckCircle>
          </IconButton>
        </div>
      </div>
      {detailed ? <p className="taskDescription">Description: {data.description}</p> : null}
      {detailed ? (
        <div className="moreInfo">
          <p className="taskDeadline">
            Deadline: {data.deadline == null ? "None!" : data.deadline.day + "/" + data.deadline.month + "/" + data.deadline.year}
          </p>
          <p className="taskDeadline">Status : {data.completed ? "Done Today!" : "Not Done Today!"}</p>
          <p className="taskDeadline">Size: {data.size}</p>
        </div>
      ) : null}
      <p className="taskProgression">Progression: {data.progress}%</p>
      <div className="taskSlider">
        <Slider
          valueLabelDisplay="auto"
          valueLabelFormat={(sliderValue) => `${sliderValue}%`}
          min={0}
          max={100}
          step={1}
          value={sliderValue}
          size="medium"
          onChange={(_, value) => setValue(value)}
          disabled={enable}
        ></Slider>
      </div>
      {data.completed == true && detailed == false ? <p className="taskDeadline">Done for today!</p> : null}
      <div className="checkMark">
      {data.progress == 100 ? <div className =  "deleteButton"> 
          <IconButton onClick={handleDelete}>
            <DeleteSweepIcon></DeleteSweepIcon>
          </IconButton>
        </div>: null}
      </div>
    </div>
  );
}
