//Callback:
let date = document.querySelector('.date');
let time = document.querySelector('.time')

var now = new Date();
var dname = now.getDay();
    mo = now.getMonth();
    dnum = now.getDate();
    yr = now.getFullYear();

    hou = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();

date.innerText = dnum;
date.innerText = date.innerText + '.' + mo + '.' + yr;



let email = document.querySelectorAll('.email');

function mail() {
    alert("xyz@gmail.com")
}



