var quiz = {};
var uanswer = newArray();
var qanswer = newArray();
var question = newArray();
var score = 0;
function Tracker() {
 var random = Math.floor(Math.random()*num*2*1000000000000072*Math.random());
 var uid = CryptoJS.MD5(random);
 console.log(uid);
 var date = newDate();
 console.log(date); 
}
function quiz.check(){
var uanswer[qcount] = document.getElementById('answer');
if (uanswer == qanswer)
{
score++;
}
else
{
score--;   
}
}