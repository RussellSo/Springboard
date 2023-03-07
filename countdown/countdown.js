

//I want to shorten this but i'm not sure how.
//I was think about creating a helper function, but not sure if it make it anymore "readable" or usable

//Initially I made the mistake of using a for loop to iterate. But the integers came out all at once

function countdown(num){
    let  id = setInterval(function() {
        console.log(num)
        num--
        if (num === 0) {
            console.log(`done`)
            clearInterval(id)
        }
    }, 1000) 
}

countdown(20)