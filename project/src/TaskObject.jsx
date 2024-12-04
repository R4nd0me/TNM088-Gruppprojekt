class TaskObject{
    constructor(name, description, progress, deadline, size){
        this.name = name;
        this.description = description;
        // progress i % 
        this.progress = progress;
        // deadline efter datum
        this.deadline = deadline;
        // size 1-5
        this.size = size; 
        // priority beräknas, ej input
        this.priority = null;
    }
}

export default TaskObject;