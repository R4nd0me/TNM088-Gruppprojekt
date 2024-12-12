import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; 
import Slider from '@mui/material/Slider';
import { Box, Button, ButtonGroup } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useLocation, useNavigate} from "react-router-dom"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb'
import toObject from 'dayjs/plugin/toObject'
dayjs.extend(toObject);

export default function NewTask() {
    const [date, setDate] = useState(new Date()); 

    const [visibility, setVisibility] = useState(false);

    function toggleVisibility(){
        setVisibility(true);
    }
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
    let navigate = useNavigate();
    const [taskData, setTaskData] = useState({name: 'New Task', description : 'Description', progression : 0, deadline : dateConverter(dayjs().format('DD/MM/YY'))});
    console.log(taskData.deadline);

    function dateConverter(dateString){
        const [day, month, year] = dateString.split('/'); // Split the string by '/'
        return {
            day: parseInt(day, 10), // Convert day to a number
            month: parseInt(month, 10), // Convert month to a number
            year: parseInt(year, 10), // Convert year to a number
        };
    }
    return(
        <div className="taskCreation">
            <p>TaskName</p>
            <input type = "text" placeholder=" name..." onChange={e => setTaskData((prev) => {return {...prev, name: e.target.value}})} value = {taskData.name}></input>
            <p>TaskDesc</p>
            <input type = "text" placeholder=" description..." onChange={e => setTaskData((prev) => {return {...prev, description: e.target.value}})} value = {taskData.description}></input>
            <p>Task Prog</p>
            <div className = 'sliderContainer'><Slider aria-label="TaskProg" getAriaValueText={valuetext} valueLabelDisplay="auto" min={0} max = {100} onChange={(_, value) => setTaskData((prev) => {return {... prev, progression: value}})}></Slider></div>
            <p>Deadline</p>
            <div className = 'datePicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <MobileDatePicker minDate = {dayjs()} defaultValue = {dayjs()} onChange={(newValue) => setTaskData((prev) => {const date = dateConverter(newValue.format('DD/MM/YYYY'));
                return {...prev, deadline: date}})}/>
            </LocalizationProvider>
            </div>
            <Button key = 'next' onClick={() => {console.log(taskData);navigate('/')}}>CONFIRM!</Button>
        </div>
    )
}

function storeData(){
    return 

}