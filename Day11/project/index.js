// alert("hello world");

var randomNumber = Math.round(Math.random() * 6);
console.log(randomNumber);
var randomNumber2 = Math.round(Math.random() * 6);
console.log(randomNumber2)

if (randomNumber > 0) {
    var url = "./images/dice" + randomNumber + ".png";
    console.log(url);
    document.querySelector(".img1").setAttribute("src",url);
}

if (randomNumber2 > 0) {
    var url = "./images/dice" + randomNumber2 + ".png";
    console.log(url);
    document.querySelector(".img2").setAttribute("src",url);
}

//who wins a  game

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins";
}else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerText = "Player 2 wins";
}else{
    document.querySelector("h1").innerText = "Draw";
}