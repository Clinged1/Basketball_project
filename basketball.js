

function one() {
    let changeScore = document.getElementById("homeScore");
    changeScore.textContent++;
}

function two() {
    let changeScore = document.getElementById("homeScore");
    changeScore.textContent = Number(changeScore.textContent) + 2;
}


function three() {
    let changeScore = document.getElementById("homeScore");
    changeScore.textContent = Number(changeScore.textContent) + 3;

}


function reset() {
    let changeScore = document.getElementById("homeScore");
    changeScore.textContent = 0;
}


function onealt() {
    let changeScore = document.getElementById("awayScore");
    changeScore.textContent++;
}

function twoalt() {
    let changeScore = document.getElementById("awayScore");
    changeScore.textContent = Number(changeScore.textContent) + 2;
}


function threealt() {
    let changeScore = document.getElementById("awayScore");
    changeScore.textContent = Number(changeScore.textContent) + 3;

}


function resetalt() {
    let changeScore = document.getElementById("awayScore");
    changeScore.textContent = 0;
}






