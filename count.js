"use strict";

const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const weekday=['Sunday','Monday','Tuesday','Wensday','Thirsday','Friday','Saterday'];

let giveaway=document.querySelector('.giveaway');
let times=document.querySelectorAll('.times h1');
let deadline=document.querySelector('.deadline');

let futurDate =new Date(2025,4,20,12,0,0);

const year=futurDate.getFullYear();
const hours=futurDate.getHours();
const minuts=futurDate.getMinutes();
let month=futurDate.getMonth();
month=months[month];
let date=futurDate.getDate();
let day=futurDate.getDay();
day=weekday[day];
//let day=weekday[futurDate.getDay()];
giveaway.innerHTML=`Giveaway Ends On ${day}, ${date} ${month} ${year}  ${hours}:${minuts}0PM`;

//getting the real time in MS
let futurTime= futurDate.getTime();

function reamingTime(){
    let today=new Date().getTime();
    let t= futurTime-today;
    
    let oneDay =24*60*60*1000;
    let oneHour =60*60*1000;
    let oneMinute =60*1000;

    let day=Math.floor(t/oneDay);
    let hour=Math.floor((t%oneDay)/oneHour);
    let minute=Math.floor((t%oneHour)/oneMinute);
    let sec=Math.floor((t%oneMinute)/1000);

    function format(item){
        if(item<10){
        return `0${item}`;
        }
        return item;    
    }

    const values=[day,hour,minute,sec];
    times.forEach((item,index)=>{
        item.innerHTML=format(values[index]);
    })
    if(t<0){
        clearInterval(timeMines);
        deadline.innerHTML=`<h1 class="display-6 w-100 text-primary text-capitalize ">Sorry, our prodact is soled out</h1>`
    }
}
let timeMines=setInterval(reamingTime,1000);
reamingTime();
