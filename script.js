var p1 = document.getElementById("p1button");
var p2 = document.getElementById("p2button");
var resetb = document.getElementById("reset");
var p1Display =document.getElementById("p1Display");
var p2Display =document.getElementById("p2Display");
var numInput =document.querySelector("input");
var p = document.querySelector("h3 span");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameover = false;

p1.addEventListener("click",function(){
	if(!gameover){
		p1Score++;
	if(p1Score === winningScore){
         gameover = true;
         p1Display.classList.add("winner");
	}
	p1Display.textContent = p1Score;
}
});

p2.addEventListener("click",function(){
	if(!gameover){
		p2Score++;
	if(p2Score === winningScore){
         gameover = true;
         p2Display.classList.add("winner");
	}
	p2Display.textContent = p2Score;
}
});

resetb.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover = false;
}

numInput.addEventListener("change",function(){
    p.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});