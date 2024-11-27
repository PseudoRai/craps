// global variables
        var randomNumber1 = 0;
        var randomNumber2 = 0;
        var firstRoll = 0;
        var secondRoll = 0;
        var wins = 0;
        var loses = 0;


// create random number then assign a matching dice image to it
function rollDice(){
        randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImage = "dice" + randomNumber1 + ".png";
        var randomImageSource = "images/" + randomDiceImage;
        var image1 = document.querySelectorAll("img")[0]
        image1.setAttribute("src", randomImageSource);


        randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
        document.querySelector("h2").innerHTML = 'Press "Roll Again" to have another try';
        document.querySelector("button").innerHTML = 'Roll Again';
}

function winning(){
        if (wins === 1){
                return "win";
        } else {
                return "wins";
        }
        console.log(wins)
}
function losing(){
        if (loses === 1) {
                return "lose";
        }else {
                return "loses";
        } 
}
        

// winning or losing from Initial roll
function initialRoll() {
        rollDice();
        firstRoll = (randomNumber1 + randomNumber2);
        console.log("first roll test" + firstRoll);
        
        if (firstRoll === 7){
                document.querySelector("h1").innerHTML = "Rolled 7 You Won Craps!";
                wins++;
                document.querySelector("#wins").innerHTML = `${winning()} = ${wins}`;
        } 
        else if (firstRoll === 11){
                document.querySelector("h1").innerHTML = "Rolled 11 You Won Craps!"
                wins++;
                document.querySelector("#wins").innerHTML = `${winning()} = ${wins}`;
        }
        else if (firstRoll === 2){
                document.querySelector("h1").innerHTML = "Rolled 2 You Lose Craps!"
                loses++;
                document.querySelector("#loses").innerHTML = `${losing()} = ${loses}`;
        }
        else if (firstRoll === 3){
                document.querySelector("h1").innerHTML = "Rolled 3 You Lose Craps!"
                loses++;
                document.querySelector("#loses").innerHTML = `${losing()} = ${loses}`;
        }
        else if (firstRoll === 12){
                document.querySelector("h1").innerHTML = "Rolled 12 You Lose Craps!"
                loses++;
                document.querySelector("#loses").innerHTML = `${losing()} = ${loses}`;
        } else {
                document.querySelector("h1").innerHTML = "Roll to match " + firstRoll; 
                document.getElementById("roll-again").addEventListener("click",followUpRoll);
                document.getElementById("roll-again").removeEventListener("click",initialRoll);
        }
}


// follow up roll 
function followUpRoll(){
        
        rollDice();
        
        secondRoll = randomNumber1 + randomNumber2;
        console.log("second roll test" + secondRoll);
        document.querySelector("h1").innerHTML = "Roll again to match" + firstRoll;
       

        if (secondRoll === 7){
                document.querySelector("h1").innerHTML = "Rolled 7 you lose in follow up roll";
                loses++;
                document.querySelector("#loses").innerHTML = `${losing()} = ${loses}`;
                document.getElementById("roll-again").removeEventListener("click",followUpRoll);
                document.getElementById("roll-again").addEventListener("click",initialRoll);
        }else if(firstRoll === secondRoll){
                document.getElementById("roll-again").removeEventListener("click",followUpRoll);
                document.getElementById("roll-again").addEventListener("click",initialRoll);
                document.querySelector("h1").innerHTML = "You win in follow up roll";
                wins++;
                document.querySelector("#wins").innerHTML = `${winning()} = ${wins}`;
        }else {
                document.querySelector("h1").innerHTML = "Roll didn't match " + firstRoll + " try again";
        }
}



document.getElementById("roll-again").addEventListener("click", initialRoll);