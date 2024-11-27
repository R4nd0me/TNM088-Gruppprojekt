import TaskObject from 'TaskObject.jsx'; 

// läs in vektor från databas

let taskVector = [TaskObject("Projekt", "Programmera algoritm.", 5), TaskObject("Plugga KS TNA007", "Gör en hel kontrollskrivning.", 14)]; 

// dela upp vektor i brackets enligt daysLeft

function brackets(vector) {

    let bracketA; 
    let bracketB; 
    let bracketC; 
    let bracketD; 
    let bracketE; 
    let bracketVector = [bracketA, bracketB, bracketC, bracketD, bracketE]; 

    for (let i = 0; i < vector.size; i++) {
        if (vector[i].deadline < 3) {
            bracketA.push_back(vector[i]); 
        } 
        else if (vector[i].deadline < 6) {
            bracketB.push_back(vector[i]); 
        }
        else if (vector[i].deadline < 10) {
            bracketC.push_back(vector[i]); 
        }
        else if (vector[i].deadline < 14) {
            bracketD.push_back(vector[i]); 
        }
        else {
            bracketE.push_back(vector[i]); 
        }
        
        return bracketVector;
    }
}

// beräkna "utslagspoäng" baserat på size och progress
function calculatePoints(size, progressValue) {

    let points = 0; 
    const sizePoints = 6 - size; 

    let progressPoints = 0; 
    for (let i = 1; i <= 5; i++) {
        if (progressValue <= i*20) {
            progressPoints = i; 
            break; 
        }
    }

    points = sizePoints + progressPoints; 

    return points; 

}

// sortera brackets baserat på poäng

function bracketSort(bracket) {
    
    let sortedBracket; 

    for (let i = 0; i < bracket.size; i++) {
        
    }
}

// insert brackets i final sorterad vektor


