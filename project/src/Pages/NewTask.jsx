import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; 
import Slider from '@mui/material/Slider';
import {Button, ButtonGroup } from "@mui/material";
import { useNavigate} from "react-router-dom"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'
import { useTasksContext } from "../context/DatabaseContext"; 
/*

*/


export default function NewTask() {

    const [visibility, setVisibility] = useState(false);
    function toggleVisibility(){
        setVisibility(true);
    }
   return (
    <Menu visibility={visibility} toggleVisibility={toggleVisibility}></Menu>
   )
}
function Menu({ visibility, toggleVisibility }) {
    const buttons = [
        <Button key="Work" color = 'success'>Work</Button>,
        <Button key="Home">Home</Button>,
        <Button key="Leisure" color = '#4caf50'>Leisure</Button>,
    ];
const [category, setCategory] = useState("");
    return (
        <div className="category">
            {!visibility && (
                <>
                    <p className="categoryTitle">Choose a category</p>
                    <ButtonGroup orientation="vertical">
                        {buttons.map((button, index) => (
                            <Button key={index} className={`categoryButton_${index}`}
                             onClick={() => {
                                setCategory(button.key);
                                toggleVisibility();}}>
                                {button.props.children}
                            </Button>
                        ))}
                    </ButtonGroup>
                </>
            )}
            {visibility && <TaskCreator buttonType = {category}/>}
        </div>
    );
}
function TaskCreator(buttonType){
    let navigate = useNavigate();
    const {tasks} = useTasksContext();
    const sizeLabels = [
        { value: 0, label: "Small" },
        { value: 1, label: "Medium" },
        { value: 2, label: "Large" }]
    const getLabel = (value) => sizeLabels.find((size) => size.value === value)?.label || "";
    const [size, setSize] = useState(0);
    const [taskData, setTaskData] = useState({_id: tasks.length, name: 'New Task', description : 'Description', progress : 0, size: getLabel(0), deadline : null, category: buttonType.buttonType.toLowerCase(), completed:false});
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
            <p>Enter Name</p>
            <input type = "text" placeholder=" name..." onChange={e => setTaskData((prev) => {return {...prev, name: e.target.value}})} value = {taskData.name}></input>
            <p>Enter Description</p>
            <input type = "text" placeholder=" description..." onChange={e => setTaskData((prev) => {return {...prev, description: e.target.value}})} value = {taskData.description}></input>
            <p>Task Size</p>
            <div className = 'sliderContainer'><Slider value = {size}aria-label="TaskProg"valueLabelDisplay="auto" min={0} max = {2} step = {null} marks = {sizeLabels} onChange={(_, value) => setTaskData((prev) => {setSize(value); return {... prev, size: getLabel(value)}})}></Slider></div>
            <p>Deadline</p>
            <div className = 'datePicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <MobileDatePicker minDate = {dayjs()} defaultValue = {null} onChange={(newValue) => setTaskData((prev) => {const date = dateConverter(newValue.format('DD/MM/YYYY'));
                return {...prev, deadline: date}})}/>
            </LocalizationProvider>
            </div>
            <Button className = "confirmButton" key = 'next' onClick={() => {console.log(taskData);navigate('/', {state: taskData});}}>CONFIRM!</Button>
        </div>
    )
}

function storeData(){
    return 

}