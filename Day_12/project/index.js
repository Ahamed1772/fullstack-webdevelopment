

var total = document.querySelectorAll(".drum").length;
for (var i = 0; i < total; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var element = this.innerHTML;
        makesound(element);
        animation(element);

});
}

document.addEventListener("keypress",(event) => {
    makesound(event.key);
    animation(event.key);
});


function makesound(element){
    switch (element) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
             case "a":
                var audio = new Audio("./sounds/tom-2.mp3")
                audio.play();
                break;
             case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
             case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
             case "j":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log("error");
                break;
        }
}

function animation(animate){
    var element = document.querySelector("." + animate);
    element.classList.add("pressed");
    setTimeout(() => {
        element.classList.remove("pressed");
    },100);
}