import { useState } from "react";
import Datepicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import TaskObject from "../TaskObject";
import Slider from '@mui/material/Slider';
import { Box, Button, ButtonGroup } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate} from "react-router-dom"

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 

    const [visibility, setVisibility] = useState(false);

    function toggleVisibility(){
        setVisibility(true);
    }
    /*
    return (
        <div>
            <Datepicker selected={date} onChange={(date) => setDate(date)} />
        </div>
    ); 
    */
   return (
    <Menu visibility={visibility} toggleVisibility={toggleVisibility}></Menu>
   )
}
function valuetext(value) {
    return `${value}°C`;
  }
function DescribeTask(){

}



//const marks = [{value : 0, label: 0%}];


function Menu({ visibility, toggleVisibility }) {
    const buttons = [
        <Button key="Work" color = 'success'>Work</Button>,
        <Button key="Home">Home</Button>,
        <Button key="Leisure" color = '#4caf50'>Leisure</Button>,
];
    return (
        <div className="category">
            {!visibility && (
                <>
                    <p>Choose a category</p>
                    <ButtonGroup orientation="vertical">
                        {buttons.map((button, index) => (
                            <Button key={index} onClick={toggleVisibility}>
                                {button.props.children}
                            </Button>
                        ))}
                    </ButtonGroup>
                </>
            )}
            {visibility && <TaskCreator />}
        </div>
    );
}
function TaskCreator(){
    const yearButtons = [
        <TextField key = 'dd' label = 'dd' type = 'number' inputProps={{min:0, max:31}}></TextField>,
        <TextField key = 'mm' label = 'mm' type = 'number' inputProps={{min:0, max:12}}></TextField>,
        <TextField key = 'yy' label = 'yy' type = 'number' inputProps={{min:0}}></TextField>
    ];
    function PickDeadline(){
        return(
            <>
            <ButtonGroup>{yearButtons}.map()</ButtonGroup>
            </>
        )
    }
    let navigate = useNavigate();
    const [taskData, setTaskData] = useState({name:"swag", description : "swag 2"});
    return(
        <div className="taskCreation">
            <p>TaskName</p>
            <input type = "text" placeholder=" name..." onChange={e => setTaskData((prev) => {return {...prev, name: e.target.value}})} value = {taskData.name}></input>
            <p>TaskDesc</p>
            <input type = "text" placeholder=" description..." onChange={e => console.log(e.currentTarget.value)}></input>
            <p>TaskDiff</p>
            <div className = 'sliderContainer'><Slider aria-label="TaskSize" defaultValue={10} getAriaValueText={valuetext} valueLabelDisplay="auto" shiftStep={30} step={10} marks min={0} max = {100}></Slider></div>
            <p>Deadline</p>
            <div className = 'datePicker'>{<PickDeadline></PickDeadline>}</div>
            <Button key = 'next' onClick={() => {console.log(taskData);navigate('/')}}>CONFIRM!</Button>
        </div>
    )
}

function storeData(){
    return 

}