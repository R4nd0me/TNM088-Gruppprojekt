class TaskObject{
    constructor(name, description, progress, deadline, size){
        this.name = name;
        this.description = description;
        this.progress = progress;
        this.deadline = deadline;
        this.size = size; 
        this.priority = null;
    }
}

export default TaskObject;