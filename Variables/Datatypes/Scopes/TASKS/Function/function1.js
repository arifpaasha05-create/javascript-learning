let clock = function(){
    let time=new Date;
    return time.toLocaleTimeString();
};
setInterval(function(){
    document.getElementById("clock").innerText=clock()
},1000);