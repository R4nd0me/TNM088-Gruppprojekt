let workTask = false;
let homeTask = false;
let freeTask = false;
let allTasks = false;

class MooDeng {
    constructor() {
        this.hunger = 0;
        this.clean = 0;
        this.play = 0;
        this.happy = false;
        this.kaos = false;
    }

    // Moodeng har tre stats + happy och kaos
    // hunger (work) 0-2
    // clean (home) 0-2
    // play (free) 0-2

    // happy (alla tasks complete) true/false
    isHappy() {
        if (allTasks) {
            this['happy'] = true;
        }
    }

    // kaos (alla stats = 2) true/false
    isKaos() {
        if (this.hunger == this.clean == this.play == 2) {
            this['kaos'] = true;
        }
    }





    // if work task inte gjord +1 hunger etc

    // if work task gjord -1 hunger 

    // workDone

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
console.log(myMooDeng.happy);


