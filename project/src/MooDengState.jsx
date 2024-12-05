let workTask = false; 
let homeTask = false; 
let freeTask = false; 
let allTasks = false; 

class MooDeng {
    constructor(){
        this.hunger = 0; 
        this.clean = 0; 
        this.play = 0; 
        this.happy = false; 
    }
}




// Moodeng har tre stats + happy
// hunger (work) 0-3
// clean (home) 0-3
// play (free) 0-3

// happy (alla tasks complete)
void function isHappy() {
    if (allTasks) {
        this['happy'] = true; 
       }
}

const myMooDeng = new MooDeng(); 
myMooDeng.isHappy(); 
console.log(myMooDeng.happy); 



// if work task inte gjord +1 hunger etc

// if work task gjord -1 hunger 

// workDone

// homeDone

// freeDone