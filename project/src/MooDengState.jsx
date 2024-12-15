import React, { useEffect, useState } from "react";
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


// let state = { 
//     hunger: 0, 
//     clean: 0, 
//     play: 0, 
//     happy: false, 
//     kaos: false, 
//     mooBild: vanligDeng,
//     room: vanligtRum
// }; 

// if (workComplete || homeComplete || freeComplete) {
//     updateMooDeng(); 
//     console.log(state); 
// }


function updateMooDeng(state) {
console.log("uppdateState")
    // let state = { 
    // hunger: 0, 
    // clean: 0, 
    // play: 0, 
    // happy: false, 
    // kaos: false, 
    // mooBild: vanligDeng,
    // room: vanligtRum
    // }; 

    let newState = state;

    // kolla om "work"-task är gjord och uppdatera hunger, bild på mat
    if (workComplete && state.hunger > 0) {
        newState.hunger--;
    }
    else if (!workComplete && state.hunger < 2) {
        newState.hunger++;
    }

    // kolla om "home"-task är gjord och uppdatera clean, bild på bad
    if (homeComplete && state.clean > 0) {
        newState.clean--;
    }
    else if (!homeComplete && state.clean < 2) {
        newState.clean++;
    }

    // kolla om "free"-task är gjord och uppdatera play

    if (freeComplete && state.play > 0) {
        newState.play--;
    }
    else if (!freeComplete && state.play < 2) {
        newState.play++;
    }

    // när alla dagens uppgifter är klara
    // isHappy(state); 
    if (allComplete && !state.kaos) {
        newState.happy = true;
        newState.mooBild = heartDeng;
    }

    // om man inte gjort uppgifter på ett tag
    // isKaos(state);
    if (state.hunger == 2 && state.clean == 2 && state.play == 2) {
        newState.kaos = true;
        newState.mooBild = kaosDeng;
        newState.room = uttråkad3;
    }

    // oändliga if-satser, visa rätt moodeng baserat på hunger+clean
    // displayMoodeng(state); 
    if (state.hunger == 1) {
        if (state.clean == 0) {
            newState.mooBild = H1;
        } else if (state.clean == 1) {
            newState.mooBild = H1S1;
        } else {
            newState.mooBild = H1S2;
        }
    }
    else if (state.hunger == 2) {
        if (state.clean == 0) {
            newState.mooBild = H2;
        } else if (state.clean == 1) {
            newState.mooBild = H2S1;
        } else {
            newState.mooBild = H2S2;
        }
    }
    else if (state.clean == 1) {
        newState.mooBild = S1;
    }
    else if (state.clean == 2) {
        newState.mooBild == S2;
    }

    // bestäm vilken backgrund m.a.p. play
    // background(state);
    if (state.play == 1) {
        newState.room = uttråkad1;
    }
    else if (state.play == 2 && !state.kaos) {
        newState.room = uttråkad2;
    }

    return newState;
}




export default function MooDengState() {

    // updateMooDeng(); 

    const [state, setState] = useState({
        hunger: 0,
        clean: 0,
        play: 0,
        happy: false,
        kaos: false,
        mooBild: vanligDeng,
        room: vanligtRum,
    });

    useEffect(() => {
        console.log("test", state);
    }, [state]);


    console.log("state i MooDengState()", state);
    console.log("clean i MooDengState()", state.clean);

    function onClickUpdate() {
        let tempState = updateMooDeng(state);
        console.log("tempSTATE", tempState);
        setState(tempState);
        let mooImg = document.getElementById("MooDeng");
        mooImg.src = tempState.mooBild;
        let roomImg = document.getElementById("room"); 
        roomImg.src = tempState.room; 
    }

    return (
        <>
            <button onClick={onClickUpdate}>
                <MooDeng
                    hunger={state.hunger}
                    clean={state.clean} 
                    play={state.play} 
                    happy={state.happy} 
                    kaos={state.kaos}
                    mooBild={state.mooBild}
                    room={state.room}
                />
            </button>
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
    console.log("props:", props)

    return (
        <>
            <img id='room' src={props.room} />
            <img id='MooDeng' src={props.mooBild} />
        </>
    )

}



// när alla dagens uppgifter är klara
// function isHappy(state) {
//     if (allComplete && !state.kaos) {
//         state.happy = true;
//         state.mooBild = heartDeng; 
//     }
// }

// om man inte gjort uppgifter på ett tag
// function isKaos(state) {
//     if (state.hunger == 2 && state.clean == 2 && state.play == 2) {
//         state.kaos = true;
//         state.mooBild = kaosDeng; 
//         state.room = uttråkad3; 
//     }
// }

// function displayMoodeng(state) {
//     // oändliga if-satser, visa rätt moodeng baserat på hunger+clean
//     if (state.hunger == 1) {
//         if (state.clean == 0) {
//             state.mooBild = H1; 
//         } else if (state.clean == 1) {
//             state.mooBild = H1S1; 
//         } else {
//             state.mooBild = H1S2; 
//         }
//     }
//     else if (state.hunger == 2) {
//         if (state.clean == 0) {
//             state.mooBild = H2; 
//         } else if (state.clean == 1) {
//             state.mooBild = H2S1; 
//         } else {
//             state.mooBild = H2S2; 
//         }
//     }
//     else if (state.clean == 1) {
//         state.mooBild = S1; 
//     }
//     else if (state.clean == 2) {
//         state.mooBild == S2; 
//     }
// }

// function background(state) {
//     // bestäm vilken backgrund m.a.p. play
//     if (state.play == 1) {
//         state.room = uttråkad1;
//     }
//     else if (state.play == 2 && !state.kaos) {
//         state.room = uttråkad2;
//     }
// }