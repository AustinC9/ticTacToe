//Setting variables 
let gameBoard = document.querySelector('.gameBoard');
let gameText = document.querySelector('#gameText');
//Reset button
let rstBtn = document.querySelector('#rstBtn');
//Score table
let xWins = document.querySelector('#xWins');
let yWins = document.querySelector('#oWins');
let ties = document.querySelector('#ties');
let scoreTable = document.querySelector('.table');
// setting empty game variables
//fresh page
let turn = 'X';
let tileArr = [];
let gameWon = false;
// setting array for score table
let gameScore = [0, 0, 0];

class obj {
    constructor(value, clicked) {
        this.value = value;
        this.clicked = clicked;
    }
}

function createBoard(gridSize) {
    //setting new game
    turn = 'X';
    tileArr = [];
    gameWon = false;
    gameText.innerHTML = `It's X's Turn`;
    for (i = 0; i < gridSize; i++) {
        //building the board
        //creating div
        let div = document.createElement('div');
        //name class
        div.className += 'col-4 border bg-danger display-2';
        //assign div id to index of array
        div.id = `tile-${i}`;
        //console.log(div.id);
        //
        div.setAttribute('style', 'height: 100px;');
        let text = document.createTextNode('');
        div.appendChild(text);
        //creating object for each tile
        let tile = new obj(0, false);
        tileArr.push(tile)
        //add click listener and add tile to game board
        div.addEventListener('click', clickedOn);
        gameBoard.appendChild(div);
    }
}

//make game board of 9 tiles
createBoard(9);
// const main = document.getElementById('app');

// function init() {
//     //testing player information
//     const infoRow = generateElement('div', 'infoRow', 'row mt-3', main);

//     let playerOneCol = generateElement('div', playerOneCol, infoRow);
//     let playerOne = generateElement('p','playerOneText', 'text-center text-danger', playerOneCol);
//     playerOne.innerHTML = "Player 1";

// }
// function playerInput() {
//     if (document.getElementById("player1").value != "") {
//         playerOneText.innerHTML = document.getElementById("player1").value.toUpperCase();
//     }


// }
//add text input
//gather inputted value
//display name in Name 1        Name 2 
//if name = Anthony hide tic tac toe
//alert(Anthony you cannot play, get off my page!)
// if name = Justin || Ian
// display Justin || Ian won!
let btn = document.getElementById("player1btn");

btn.addEventListener('click', troll, true);
function troll() {
    let player1 = document.getElementById("player1").value;
    console.log(player1);
    if (player1 === "Anthony") {
        //alert("Get out of here Anthony")
        document.getElementById('hideTable').style.display = 'none';
        let txtCntnt = document.getElementById("gameText");
        txtCntnt.textContent = "GET OUT OF HERE ANTHONY";
        //resetGame();
        
        



        //if (player1 ===)


    }
}


function clickedOn(e) {
    if (!gameWon) {
        let id = e.target.id.split('-')[1];
        if (!tileArr[id].clicked) {
            tileArr[id].clicked = true;
            tileArr[id].value = (turn === 'X' ? 1 : 2);
            this.innerHTML = turn;
            turn === 'X' ? turn = 'O' : turn = 'X';
            gameText.innerHTML = `It's ${turn}'s turn!`;
            //console.log(turn);
            console.log(tileArr);
            console.log(id);
            console.log(tileArr[id].clicked);
            checkWin();
        }
    }
}

function checkWin() {
    //all possible places in array 
    let winArr = [
        //Horizontal Wins
        [tileArr[0].value, tileArr[1].value, tileArr[2].value],
        [tileArr[3].value, tileArr[4].value, tileArr[5].value],
        [tileArr[6].value, tileArr[7].value, tileArr[8].value],
        //Vertical Wins
        [tileArr[0].value, tileArr[3].value, tileArr[6].value],
        [tileArr[1].value, tileArr[4].value, tileArr[7].value],
        [tileArr[2].value, tileArr[5].value, tileArr[8].value],
        //Diagonal Wins
        [tileArr[2].value, tileArr[4].value, tileArr[6].value],
        [tileArr[0].value, tileArr[4].value, tileArr[8].value]
    ];
    let tieArr = [
        tileArr[0].clicked, tileArr[1].clicked, tileArr[2].clicked,
        tileArr[3].clicked, tileArr[4].clicked, tileArr[5].clicked,
        tileArr[6].clicked, tileArr[7].clicked, tileArr[8].clicked,
    ]
    //loop through 8 win options
    for (i = 0; i < 8; i++) {
        //turn the array into a comma seperated string and test if equal to an X or O
        if (winArr[i].join() === '1,1,1' || winArr[i].join() === '2,2,2') {
            gameWon = true;
            gameText.innerHTML = `${winArr[i].join() === '1,1,1' ? 'X' : 'O'} won the game!`;
            //add to game tally
            turn === 'O' ? gameScore[0]++ : gameScore[1]++;
            xWins.innerHTML = gameScore[0];
            oWins.innerHTML = gameScore[1];
            ties.innerHTML = gameScore[2];
            scoreTable.style.visibility = 'visible';
        }
    }
    //test for tie
    if (tieArr.join() === 'true,true,true,true,true,true,true,true,true' && gameWon === false) {
        gameText.innerHTML = 'TIE!';
        gameScore[2]++;
        xWins.innerHTML = gameScore[0];
        oWins.innerHTML = gameScore[1];
        ties.innerHTML = gameScore[2];
        scoreTable.style.visibility = 'visible';
    }

}

let rstplayer1 = document.getElementsByClassName("form-control");
function resetGame() {
    //clear game board
    gameBoard.innerHTML = '';
    rstplayer1.innerHTML = '';
    //build new game board
    createBoard(9);
}
rstBtn.addEventListener('click', resetGame);

