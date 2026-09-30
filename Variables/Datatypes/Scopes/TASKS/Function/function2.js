(function(){
let time=3*24*60*60;
function countDown(){
    let days=Math.floor(time/(24*60*60));
    let hours=Math.floor((time%(24*60*60))/(60*60));
    let minutes=Math.floor((time%(60*60))/60);
    let seconds=Math.floor((time%60));
    document.getElementById("timer").innerText=`${days}Days: ${hours}hrs : ${minutes}min: ${seconds}s`;
    return time;
}
countDown();
let intervel= setInterval(function(){
    time--;
    countDown();
    if(time<0){
        clearInterval(intervel);
        document.getElementById("timer").innerText=`Offer Expired!`;
    }
    
}, 1000);
})();