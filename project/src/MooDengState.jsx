let workComplete = false;
let homeComplete = false;
let freeComplete = false;
let allComplete = false;

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
        if (allComplete && this['kaos'] != true) {
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
        if (workComplete && this.hunger > 0) {
            this.hunger--; 
        }
        else if (!workComplete && this.hunger < 2) {
            this.hunger++; 
        }
    }

    // homeDone
    homeDone() {
        if (homeComplete && this.clean > 0) {
            this.clean--; 
        }
        else if (!homeComplete && this.clean < 2) {
            this.clean++; 
        }
    }

    // freeDone
    freeDone() {
        if (freeComplete && this.play > 0) {
            this.play--; 
        }
        else if (!freeComplete && this.play < 2) {
            this.play++; 
        }
    }

    mooDengState() {
        
    }
}

const myMooDeng = new MooDeng();

export default function updateMooDeng(myMooDeng) {
    myMooDeng.workDone(); 
    myMooDeng.homeDone(); 
    myMooDeng.freeDone(); 
    myMooDeng.isHappy();
    myMooDeng.isKaos(); 
    console.log(myMooDeng); 
    
}

updateMooDeng(myMooDeng); 



