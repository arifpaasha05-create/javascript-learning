let score =0;
let currentNumber;
function startGame(){
    score=0;
    document.getElementById("score").innerText = "Score:0";
    nextNumber();
}
function nextNumber(){
    currentNumber = Math.floor(Math.random()*9000)+1000;
    document.getElementById("number").innerText =`${currentNumber}`;
    setTimeout(function(){
        document.getElementById("number").innerText ="";
        document.getElementById("answer").focus();
    },200);
}
function checkAnswer(){
    let answer =Number(document.getElementById("answer").value);
    if(answer === currentNumber){
        score++;
        document.getElementById("score").innerText = `Score:${score}`;
        document.getElementById("answer").value="";
        nextNumber();
    }else{
        alert(`Game Over!\nYour final score ${score}`);
        document.getElementById("answer").value ="";
    }

}