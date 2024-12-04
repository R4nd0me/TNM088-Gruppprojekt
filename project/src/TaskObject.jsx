class TaskObject{
    constructor(category, name, description, progress, deadline, size){
        this.category = category; 
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
        // completed ej input
        this.completed = false; 
    }
}

export default TaskObject;