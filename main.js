function Tracker() {
 var random = Math.floor(Math.random()*num*2*1000000000000072*Math.random());
 var uid = CryptoJS.MD5(random);
 console.log(uid);
 var date = newDate();
 console.log(date); 
}