var quiz = {};
var uanswer = new Array();
var qanswer = new Array();
var question = new Array();
var utime = new Array();
var q = 0;
var score = 0;
var elapsed = 0;
var start = 0;
var time;
function Tracker() {
 var random = Math.floor(Math.random()*num*2*1000000000000072*Math.random());
 var uid = CryptoJS.MD5(random);
 console.log(uid);
 var date = newDate();
 console.log(date); 
}
function quiz.starttimer(){
start = new Date().getTime();    
}
function quiz.stoptimer(){
time = new Date().getTime() - start;
elapsed = Math.floor(time / 100) / 10;    
}
function quiz.check(){
var uanswer[q] = document.getElementById('answer');
quiz.stoptimer();
utime[q] = elapsed;
elapsed = 0;
if (uanswer == qanswer)
{
score++;
q++;
}
else
{
score--;
q++;
}
}
function quiz.start(){
$('question').value(function(index)question[q];);
quiz.starttimer();
}