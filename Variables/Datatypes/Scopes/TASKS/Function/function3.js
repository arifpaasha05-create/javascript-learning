let count=0;
let intervel;
function updateTimer(){
    count++;
    document.getElementById("timer").innerText=count;
}
function startTimer(){
    if(intervel==null){
    intervel=setInterval(updateTimer,1000);
}
}
function stopTimer(){
    clearInterval(intervel);
    intervel=null;
}