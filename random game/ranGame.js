// random number gen between 0 and 1 every 1sec
//increments a counter
// stops if the number is greater than .75 and console logs the amounts of attempts

//can I simplify the "random generator" with the "rounded number" function?

function randomGen() {
    let counter = 0
    let id = setInterval(function() {
        let ran = Math.random()
        let rounded = Math.round(ran * 100) / 100
        if (rounded >= .75) {
            clearInterval(id)
            console.log(`${rounded} on roll ${counter} ... Done rolling`)
        } else {
            console.log(`${rounded} on roll ${counter} ... Rolling again`)
            counter++
        }
    }, 1000)
}

randomGen()