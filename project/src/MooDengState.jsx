import PropTypes from 'prop-types'; 

// vanlig och "extrema" moodengs
import vanligDeng from './assets/Moodeng/Moodeng-vanlig.svg'; 
import heartDeng from './assets/Moodeng/HEARTTTTTT.svg';
import kaosDeng from './assets/Moodeng/Moodeng-hungrig2-smutsig2.svg'; 

// olika hungriga o smutsiga moodengs
import H1 from './assets/Moodeng/Moodeng-hungrig1.svg';
import H2 from './assets/Moodeng/Moodeng-hungrig2.svg';
import S1 from './assets/Moodeng/Moodeng-vanlig-smutsig1.svg';
import S2 from './assets/Moodeng/Moodeng-vanlig-smutsig2.svg';
import H1S1 from './assets/Moodeng/Moodeng-hungrig1-smutsig1.svg';
import H1S2 from './assets/Moodeng/Moodeng-hungrig1-smutsig2.svg';
import H2S1 from './assets/Moodeng/Moodeng-hungrig2-smutsig1.svg';
import H2S2 from './assets/Moodeng/Moodeng-hungrig2-smutsig2.svg';



// bakgrund
import vanligtRum from './assets/Moodeng/Defaultroom.svg'; 
import uttråkad1 from './assets/Moodeng/rum-uttråkad1.svg'; 
import uttråkad2 from './assets/Moodeng/rum-uttråkad2.svg'; 
import uttråkad3 from './assets/Moodeng/rum-uttråkad3.svg'; 

let workComplete = false;
let homeComplete = false;
let freeComplete = false;
let allComplete = false;

MooDeng.propTypes = {
    hunger: PropTypes.number,  
    clean: PropTypes.number, 
    play: PropTypes.number, 
    happy: PropTypes.bool, 
    kaos: PropTypes.bool, 
    mooBild: PropTypes.string,
    room: PropTypes.string
}

const state = { 
    hunger: 0, 
    clean: 0, 
    play: 0, 
    happy: false, 
    kaos: false, 
    mooBild: vanligDeng,
    room: vanligtRum
}; 

export default function MooDengState() {
    

    if (allComplete && state.kaos != true) {
        state.happy = true;
        state.mooBild = heartDeng; 
    }

    if (state.hunger == 2 && state.clean == 2 && state.play == 2) {
        state.kaos = true;
        state.mooBild = kaosDeng; 
        state.room = uttråkad3; 
    }
    
    
    if (state.play == 1) {
        state.room = uttråkad1; 
    }
    else if (state.play == 2 && !state.kaos) {
        state.room = uttråkad2; 
    }
    
    return (
        <>
        <MooDeng 
        hunger={state.hunger}
        clean={state.clean} 
        play={state.play} 
        happy={state.happy} 
        kaos={state.kaos}
        mooBild={state.mooBild}
        room={state.room}
        />
        </>    
    )
}

function MooDeng(props) {
    // let hunger = props.hunger;
    // let clean = props.clean;
    // let play = props.play;
    
    // let happy = props.happy;
    // let kaos = props.kaos;
    // let url = props.url; 

    
    
    console.log(props); 

    return (
        <>
        <img className='room' src={props.room}/>
        <img id='MooDeng' src={props.mooBild}/>
        </>    
    )

}

// happy (alla tasks complete) true/false
// void function isHappy() {
//     if (allComplete && props.kaos != true) {
//         props.happy = true;
//     }


// }

// class MooDeng {
//     constructor() {
//         this.hunger = 0;
//         this.clean = 0;
//         this.play = 0;
//         this.happy = false;
//         this.kaos = false;
//     }

//     // Moodeng har tre stats + happy och kaos
//     // hunger (work) 0-2
//     // clean (home) 0-2
//     // play (free) 0-2

//     // happy (alla tasks complete) true/false
//     isHappy() {
//         if (allComplete && this['kaos'] != true) {
//             this['happy'] = true;
//         }
//     }

//     // kaos (alla stats = 2) true/false
//     isKaos() {
//         if (this.hunger == 2 && this.clean == 2 && this.play == 2) {
//             this['kaos'] = true;
//         }
//     }





//     // if work task inte gjord +1 hunger etc

//     // if work task gjord -1 hunger 

//     // workDone
//     workDone() {
//         if (workComplete && this.hunger > 0) {
//             this.hunger--; 
//         }
//         else if (!workComplete && this.hunger < 2) {
//             this.hunger++; 
//         }
//     }

//     // homeDone
//     homeDone() {
//         if (homeComplete && this.clean > 0) {
//             this.clean--; 
//         }
//         else if (!homeComplete && this.clean < 2) {
//             this.clean++; 
//         }
//     }

//     // freeDone
//     freeDone() {
//         if (freeComplete && this.play > 0) {
//             this.play--; 
//         }
//         else if (!freeComplete && this.play < 2) {
//             this.play++; 
//         }
//     }

//     mooDengState() {
        
//     }
// }

// const myMooDeng = new MooDeng();

// export default function updateMooDeng(myMooDeng) {
//     myMooDeng.workDone(); 
//     myMooDeng.homeDone(); 
//     myMooDeng.freeDone(); 
//     myMooDeng.isHappy();
//     myMooDeng.isKaos(); 
//     console.log(myMooDeng); 
    
    
// }

// updateMooDeng(myMooDeng); 



