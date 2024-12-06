let workTask = false;
let homeTask = false;
let freeTask = false;
let allTasks = false;

class MooDeng {
    constructor() {
        this.hunger = 2;
        this.clean = 2;
        this.play = 2;
        this.happy = false;
        this.kaos = false;
    }

    // Moodeng har tre stats + happy och kaos
    // hunger (work) 0-2
    // clean (home) 0-2
    // play (free) 0-2

    // happy (alla tasks complete) true/false
    isHappy() {
        if (allTasks && this['kaos'] != true) {
            this['happy'] = true;
        }
    }

    // kaos (alla stats = 2) true/false
    isKaos() {
        if (this.hunger == 2 && this.clean == 2 && this.play == 2) {
            this['kaos'] = true;
        }
    }





    // if work task inte gjord +1 hunger etc

    // if work task gjord -1 hunger 

    // workDone
    workDone() {
        if (workTask) {
            while (this.hunger < 2) {
                this.hunger++; 
            }
        }
        else {
            while (this.hunger > 0) {
                this.hunger--; 
            }
        }
    }

    // homeDone

    // freeDone
}

export default function MyMooDeng() {


    return (
        <>
        {myMooDeng}
        </>
    ); 
}

const myMooDeng = new MooDeng();
myMooDeng.isHappy();
myMooDeng.isKaos(); 
console.log(myMooDeng); 
console.log("Happy: " + myMooDeng.happy);
console.log("Kaos: " + myMooDeng.kaos); 


