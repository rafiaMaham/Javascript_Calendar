const month = document.querySelector(".date h1");
const fulldate = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthsInx = new  Date().getMonth();
// const lastDay = new Date(new Date().getFullYear(), new Date().getMonth(), 0)
// const lastDay = new Date(new Date().getFullYear(), monthsInx, 0) // gives the last date of prev month
const lastDay = new Date(new Date().getFullYear(), monthsInx+1, 0).getDate(); //gives the alst date of curr month
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth() , 1).getDay()-1;
// console.log(lastDay);
// console.log(firstDay);


const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemebr",
    "December",
];

month.innerText = monthArr[monthsInx];
fulldate.innerText = new Date().toDateString();


let days = "";

for(let i= firstDay ; i>0 ; i--){
    days = days + `<div class="empty"></div>`
}

for(let i=1; i<=lastDay; i++){
    if(i===new Date().getDate()){
        days = days + `<div class="today">${i}</div>`
    }else{

        days = days + `<div>${i}</div>`
    }
}

daysEl.innerHTML = days;


