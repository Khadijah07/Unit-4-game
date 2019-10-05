// generate a random number at start 
alert("LETS PLAY CRYSTAL COLLECTORS!");
// crytal variables // 
var gems = {
    Gem1:
    {
        name: "gem1",
        value: 0
    },
    Gem2:
    {
        name: "gem2",
        value: 0
    },
    Gem3:
    {
        name: "gem3",
        value: 0
    },
    Gem4:
    {
        name: "gem4",
        value: 0

    },
};

// current score / target score 
var currentScore = 0;
var targetScore = 0;

// win and loss variables 
var winCount = 0;
var lossCount = 0;



// Functions 
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {

    // reset the current score 
    currentScore = 0;
    // set a new large score between 19 and 120

    targetScore = getRandom(19, 120);

    // set diff values for each of the crystal between 1 and 12

    gems.Gem1.value = getRandom(1, 12);
    gems.Gem2.value = getRandom(1, 12);
    gems.Gem3.value = getRandom(1, 12);
    gems.Gem4.value = getRandom(1, 12);


    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);






    console.log("------------------");
    console.log("Target Score: " + targetScore);
    console.log("Gem1: " + gems.Gem1.value + " | Gem2: " + gems.Gem2.value + " | Gem3: " + gems.Gem3.value + " | Gem4: " + gems.Gem4.value);
    console.log("---------------------");
}

var addValues = function (gems) {

    currentScore = currentScore + gems.value;

    $("#yourScore").html(currentScore);

    checkWin();

    console.log("Your Score:" + currentScore);
}

var checkWin = function () {

    if (currentScore > targetScore) {
        alert("You lost!");
        console.log("You lost");

        lossCount++;
        $("#lossCount").html(lossCount);

        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congrats, YOU WON!");
        console.log("YOU WON!");

        winCount++;
        $("#winCount").html(winCount);

        startGame()
    }
}






// jquery functions // 
startGame();

$("#gem1").click(function () {
    addValues(gems.Gem1);
});

$("#gem2").click(function () {
    addValues(gems.Gem2);
});

$("#gem3").click(function () {
    addValues(gems.Gem3);
});

$("#gem4").click(function () {
    addValues(gems.Gem4);


});


