import TaskObject from './TaskObject.jsx'; 

// läs in array från databas

let taskArray = [new TaskObject("Projekt", "Programmera algoritm.", 5, 1), new TaskObject("Plugga KS TNA007", "Gör en hel kontrollskrivning.", 14, 4)]; 

// dela upp array i brackets enligt daysLeft

function brackets(array) {

    let bracketA; 
    let bracketB; 
    let bracketC; 
    let bracketD; 
    let bracketE; 
    let bracketArray = [bracketA, bracketB, bracketC, bracketD, bracketE]; 

    for (let i = 0; i < array.size; i++) {
        if (array[i].deadline < 3) {
            bracketA.push(array[i]); 
        } 
        else if (array[i].deadline < 6) {
            bracketB.push(array[i]); 
        }
        else if (array[i].deadline < 10) {
            bracketC.push(array[i]); 
        }
        else if (array[i].deadline < 14) {
            bracketD.push(array[i]); 
        }
        else {
            bracketE.push(array[i]); 
        }
    }

    return bracketArray;

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

// sortera inom brackets baserat på poäng

function bracketSort(bracket) {

    if (bracket.size > 1) {
        bracket.sort((a, b) => a.priority - b.priority); 
    }
    
}

// insert brackets i final sorterad array

export default function sortTasks() {

    for (let i = 0; i < taskArray.size; i++) {
        taskArray[i].priority = calculatePoints(taskArray[i].size, taskArray[i].progress); 
    }

    let taskBrackets = brackets(taskArray); 

    let sortedTasks; 

    for (let i = 0; i < taskBrackets.size; i++) {
        let sortedBracket = bracketSort(taskBrackets[i]); 
        for (let j = 0; j < sortedBracket; j++) {
        sortedTasks.push(sortedBracket[j])
        }
    }

    return sortedTasks; 

}
