
// "private"

// getInput?

// beräknar prio-poäng utifrån 
function calculateDeadlinePoints(daysLeft) {

    return deadlinePoints
}

// beräknar prio-poäng utifrån progress i %
function calculateProgressPoints(progressValue) {
    let progressPoints; 
    for (let i = 1; i <= 5; i++) {
        if (progressValue <= i*20) {
            progressPoints = i; 
        }
    }
    
    return progressPoints; 

}; 


// calculateTime

// sort priority [index 1 highest priority, index 5 lowest priority]
 

// calculateTotal 
// 1. Deadline + 2. Difficulty/Time




// "public"

// getTotal


