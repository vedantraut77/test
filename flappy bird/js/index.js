var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");
var point_scored_sound = document.getElementById("point_scored");
var dead_sound = document.getElementById("over");
var wing_sound = document.getElementById("wing");
var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration",RandomHole)

function RandomHole(){
    var random = -((Math.random()*350)+150) 
    hole.style.top = random +"px";
    point_scored_sound.play();
    score++;
}

var fall = setInterval(function(){
    console.log("codeExecute");
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0) 
    {
        bird.style.top = (birdTop+2)+"px";
    }
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = (500 + holeTop);
    if((birdTop >450) || ((blockleft<50)&&(blockleft> -50)&&((birdTop<hTop)||(birdTop>hTop+100)))) 
    { 
        dead_sound.play();
        result.style.display = "block";
        game.style.display = "none";
        text.innerText = `Your final score is : ${score}`;
        score = 0;
        clearInterval(fall);
    }
    
},10)

window.addEventListener("keydown",hop)

function hop()
{
    event.preventDefault(); // Prevent the default action of the key press like spacebar is predefined for auto scroll
    jumping=1;
    wing_sound.play();
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdTop > 6)
    {
        bird.style.top = (birdTop - 60) + "px";
    }
    setTimeout(function(){
        jumping = 0;
    },100)
}
