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

if (workComplete || homeComplete || freeComplete) {
    updateMooDeng(); 
}

export default function MooDengState() {

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

function updateMooDeng() {
    // kolla om "work"-task är gjord och uppdatera hunger, bild på mat
    if (workComplete && state.hunger > 0) {
        state.hunger--; 
    }
    else if (!workComplete && state.hunger < 2) {
        state.hunger++; 
    }

    // kolla om "home"-task är gjord och uppdatera clean, bild på bad
    if (homeComplete && state.clean > 0) {
        state.clean--; 
    }
    else if (!homeComplete && state.clean < 2) {
        state.clean++; 
    }

    // kolla om "free"-task är gjord och uppdatera play

    if (freeComplete && state.play > 0) {
        state.play--; 
    }
    else if (!freeComplete && state.play < 2) {
        state.play++; 
    }

    isHappy(); 
    isKaos();
    displayMoodeng(); 
    background(); 
}

// när alla dagens uppgifter är klara

function isHappy() {
    if (allComplete && !state.kaos) {
        state.happy = true;
        state.mooBild = heartDeng; 
    }
}

// om man inte gjort uppgifter på ett tag
function isKaos() {
    if (state.hunger == 2 && state.clean == 2 && state.play == 2) {
        state.kaos = true;
        state.mooBild = kaosDeng; 
        state.room = uttråkad3; 
    }
}

function displayMoodeng() {
    // oändliga if-satser, visa rätt moodeng baserat på hunger+clean
    if (state.hunger == 1) {
        if (state.clean == 0) {
            state.mooBild = H1; 
        } else if (state.clean == 1) {
            state.mooBild = H1S1; 
        } else {
            state.mooBild = H1S2; 
        }
    }
    else if (state.hunger == 2) {
        if (state.clean == 0) {
            state.mooBild = H2; 
        } else if (state.clean == 1) {
            state.mooBild = H2S1; 
        } else {
            state.mooBild = H2S2; 
        }
    }
    else if (state.clean == 1) {
        state.mooBild = S1; 
    }
    else if (state.clean == 2) {
        state.mooBild == S2; 
    }
}

function background() {
    // bestäm vilken backgrund m.a.p. play
    if (state.play == 1) {
        state.room = uttråkad1; 
    }
    else if (state.play == 2 && !state.kaos) {
        state.room = uttråkad2; 
    }
}