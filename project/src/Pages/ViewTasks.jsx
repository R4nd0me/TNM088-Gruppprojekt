
import TaskDisplay from '../TaskDisplay';
export default function ViewTasks(){
    return(
        <div className= 'taskContainer'>
            <TaskDisplay detailed = {true}></TaskDisplay>
        </div>
    )
}