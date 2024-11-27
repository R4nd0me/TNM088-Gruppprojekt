
class TaskObject{
    constructor(name, description, progression, deadline){
        this.name = name;
        this.description = description;
        this.progression = progression;
        this.deadline = deadline;
        this.priority = null;
    }
}

export default TaskObject;