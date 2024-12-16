import React, { useState, useEffect } from "react";
import tasks from "./TaskDataBase.json";
import { data, useLocation } from "react-router-dom";
// import { updateMooDeng } from "./MooDengState";
import HouseIcon from "@mui/icons-material/House";
import WorkIcon from "@mui/icons-material/Work";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { IconButton, Slider } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTasksContext } from "./context/DatabaseContext";
    import { pink } from "@mui/material/colors";

export default function TaskDisplay({ detailed }) {
  // när ett task är completed:
  //updateMooDeng(tasks[0].completed, tasks[1].completed, tasks[2].completed);

  // const taskDisplay = Task();
  let { tasks } = useTasksContext();

  let location = useLocation();
  console.log(location.state);
  if (location.state != null) {
    if (!tasks.includes(location.state)) {
      tasks.push(location.state);
    }
    console.log(tasks);
  }
  let test3 = tasks.slice(0, 3);
  let check = detailed;
  return (
    <div className="taskContainer">
      {detailed ? <p className="todoTitle">Current Tasks:</p> : <p className="todoTitle">Todays tasks</p>}
      {detailed ? (
        <div className="todo">
          {tasks.map((data, index) => (
            <Task key={index} data={data} detailed={true} />
          ))}
        </div>
      ) : (
        <div className="todo">
          {test3.map((data, index) => (
            <Task key={index} data={data} detailed={false} />
          ))}
        </div>
      )}
    </div>
  );
}


function Task({ data, detailed }) {
  if (data == null) {
    return;
  }
  let [sliderValue, setValue] = useState(data.progress);
  let { setTasks } = useTasksContext();
  let [enable, toggleEnable] = useState(false);
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
  return (
    <div className="task" id={data.category}>
      <p className="taskTitle">
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
      </p>
      {detailed ? <p className="taskDescription">Description: {data.description}</p> : null}
      {detailed ? (
        <div className="moreInfo">
          <p className="taskDeadline">
            Deadline: {data.deadline == null ? "None!" : data.deadline.day + "/" + data.deadline.month + "/" + data.deadline.year}
          </p>
          <p className="taskDeadline">Status : {data.completed ? "Done Today!" : "Not Done Today!"}</p>
          <p className="taskDeadline">Progression: {data.progress}%</p>
        </div>
      ) : null}
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


        <div className="checkMark">
          <IconButton onClick={handleSlider}>
            <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
