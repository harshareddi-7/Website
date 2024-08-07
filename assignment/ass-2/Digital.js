// document.getElementById('abc').innerText=new Date();
/* document.getElementById('xyz').innerText=new Date().toLocaleTimeString();
document.getElementsByTagName('p')[0].innerHTML=new Date().toTimeString();
document.getElementsByTagName('p')[1].innerHTML=new Date().toLocaleDateString(); */
// 

setInterval(function(){
    document.getElementsByTagName('p')[0].innerHTML=new Date().toTimeString();
    document.getElementById('xyz').innerHTML=new Date().toLocaleDateString();
},1000);