<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha1.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha512.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/ripemd160.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/aes.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
var i; 
var start = new Date().getTime(); 
var elapsed = 0;  
for (var i = 0;i<1000000;i++) 
{ 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10;   
//if (elapsed > 5){ 
//console.log(i);    
//} 
var random = Math.floor(Math.random()*2*1000000000000072*Math.random());       
var hash = CryptoJS.SHA1(random);
var hash = CryptoJS.SHA256(random);
var hash = CryptoJS.SHA512(random);
var hash = CryptoJS.RIPEMD160(random);
var hash = CryptoJS.AES.encrypt(random, random);
var hash = CryptoJS.MD5(random);
} 
var time = new Date().getTime() - start; 
elapsed = Math.floor(time / 100) / 10; 
console.log(time); 