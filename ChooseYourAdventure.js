const prompt = require("prompt-sync")()

const answer = prompt("Would you like to play(y/n)? ")

if(answer.toLowerCase() === "y"){
    const answer2 = prompt("Would you like to go left or go right(left/right)? ")

    if(answer2 === "left"){
        console.log("Oops, you go left and fall of a bridge! You lost!")
    }else{
        console.log("Nice! you go to right and approach of a bridge.... ")
        const answer3 = prompt("Would you like to cross the bridge, or turn around find another way (cross/turn)? ")
        if(answer3 === "cross"){
            console.log("You cross the bridge and reach the end of the game!")
        }else{
            console.log("You turn back and trip on a long and hurt your leg.You lose")
        }
    }

}else{
    console.log("Thats bad!")
}