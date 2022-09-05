var timeBar = document.getElementById('timeBar');
var colors = document.getElementById('colors');
var scr = document.getElementById('scr');
var score = 0 ;
var i, j ;
var tick = document.getElementById('right');
var cross = document.getElementById('wrong');
var sartBt = document.getElementById('startBt');

function start(){
    timeBar.classList.add("timeBar");
    col();
    sartBt.style.display = "none" ;
}

function out(){
    alert(`out, your score is ${score}`);
    score = 0 ;
    timeBar.classList.remove("timeBar");
    sartBt.style.display = "block" ;
}

function col(){
    var col = ['red','green','blue','yellow','purple'];
    i = Math.floor(Math.random()*5);
    j = Math.floor(Math.random()*5);
    colors.innerText = col[i];
    colors.style.color = col[j];
}

function wrong() {
    if (i != j) {
        col();
        score++ ;
        timeBar.classList.remove("timeBar");
        cross.classList.add("clicked");
        setTimeout(() => {
            timeBar.classList.add("timeBar");
            cross.classList.remove("clicked");
        },200);
    }
    else{
        out();
    }
}

function right(){
    if (i == j) {
        col();
        score++ ;
        timeBar.classList.remove("timeBar");
        tick.classList.add("clicked");
        setTimeout(() => {
            timeBar.classList.add("timeBar");
            tick.classList.remove("clicked");
        },200);
    }
    else{
        out();
    }
}

document.onkeydown = function(e){
    if (e.keyCode == 37) {
        right();
    }
    if (e.keyCode == 39) {
        wrong();
    }
}

var myInt = setInterval(() => {
    var timeWidth = timeBar.offsetWidth ;
    var maxWidth = document.getElementById('prg').offsetWidth ;
    if (timeWidth > maxWidth) {
        alert(`timeout, your score is ${score}`);
        timeBar.classList.remove("timeBar");
sartBt.style.display = "block" ;
        setTimeout(() => {
            score = 0;
        },100)
    }
    else{
    scr.innerText = score ;
    }
},1);