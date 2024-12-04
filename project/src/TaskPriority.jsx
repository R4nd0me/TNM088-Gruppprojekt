import TaskObject from './TaskObject.jsx'; 

// läs in array från databas

let taskArray = 
[
    new TaskObject("B", "hej", 23, 5, 1), 
    new TaskObject("E", "hej", 80, 13, 1), 
    new TaskObject("C", "Programmera algoritm.", 80, 4, 1), 
    new TaskObject("D", "hej", 50, 11, 1), 
    new TaskObject("A", "Gör en hel kontrollskrivning.", 0, 2, 5)
]; 

console.log(taskArray); 

let sortedArray = sortTasks(taskArray);



console.log(sortedArray); 

// dela upp array i brackets enligt daysLeft

function brackets(array) {

    let bracketA = []; 
    let bracketB = []; 
    let bracketC = []; 
    let bracketD = []; 
    let bracketE = []; 
    let bracketArray = [bracketA, bracketB, bracketC, bracketD, bracketE]; 

    for (let i = 0; i < array.length; i++) {


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
    const sizePoints = 5 - size; 

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

    if (bracket.length > 1) {
        bracket.sort((a, b) => a.priority - b.priority); 
    }

    //console.log(bracket); 
    
}

// insert brackets i final sorterad array

export default function sortTasks(array) {

    for (let i = 0; i < array.length; i++) {
        array[i].priority = calculatePoints(array[i].size, array[i].progress); 
    }

    let taskBrackets = brackets(array); 
    let sortedBracket = []; 
    let sortedTasks = []; 

    // console.log(taskBrackets); 

    for (let i = 0; i < taskBrackets.length; i++) {
        bracketSort(taskBrackets[i]); 
        //console.log(taskBrackets[i]); 

        sortedBracket = taskBrackets[i];

        for (let j = 0; j < sortedBracket.length; j++) {
            if (sortedBracket[j] != null) {
                sortedTasks.push(sortedBracket[j]);
            }
        }
    }

    // console.log(sortedTasks); 
    return sortedTasks; 

}
