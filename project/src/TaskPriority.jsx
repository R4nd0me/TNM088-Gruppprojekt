// läs in vektor från databas

// dela upp vektor i brackets enligt daysLeft

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

// insert brackets i final sorterad vektor


