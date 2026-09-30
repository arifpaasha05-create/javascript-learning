
/*
self invoking function/ immediatley invoked function
- function that runs immediatly after declaration 
-syntax : (fucntion){//code}()
-usecases
1.dashboard
2.when page reloaded theme 


callback function:
-a function passed as an a argument for to another function
syntax:-function mf(Call back){
}
mf()

fucnytion sf(){
}
sf()
use cases
API 
Event handling 
set timeout 
set interval)consider call back function



















*/
/*example iife  tailwind css*/
( function(){
document.getElementById("msg1").innerText="welcome user"
})();


(function(){
    document.getElementById("body").classList.add("bg-black", "text-white");
})();


/* counter app */
let count = 0;
function increment (){
count++;
document.getElementById("countElement").innerText=`Count:${count}`;
}

function decrement (){
count--;
document.getElementById("countElement").innerText=`Count:${count}`;
}

function reset (){
count=0;
document.getElementById("countElement").innerText=`Count:${count}`;
}







